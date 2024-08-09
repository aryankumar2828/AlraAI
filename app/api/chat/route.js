import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const systemPrompt = 'You are AIra, an advanced AI-powered College Advisor assisting students globally. Provide guidance on admissions, course selection, study techniques, career planning, networking, and mental health. Offer detailed, actionable responses with empathy, encouraging proactive steps. Deflect questions outside your expertise, focusing on academic and career-related topics. Your mission is to empower students to succeed in their academic and personal lives.';




export async function POST(req) {
    try {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error('GEMINI_API_KEY is not set');
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const data = await req.json();

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: systemPrompt }],
                },
            ],
        });

        const result = await chat.sendMessageStream([
            { text: data.content }
        ]);

        const stream = new ReadableStream({
            async start(controller) {
                const encoder = new TextEncoder();
                try {
                    for await (const chunk of result.stream) {
                        const text = encoder.encode(chunk.text());
                        controller.enqueue(text);
                    }
                } catch (err) {
                    console.error('Streaming error:', err);
                    controller.error(err);
                } finally {
                    controller.close();
                }
            }
        });

        return new NextResponse(stream);
    } catch (error) {
        console.error('API route error:', error);
        return new NextResponse(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}