// app/api/join-waitlist/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateWelcomeEmail } from '@/lib/renderEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {
    const emailHtml = await generateWelcomeEmail(email); // ✅ Await the promise
  
    await resend.emails.send({
      from: 'Marvellous From SolNest <waitlist@solnest.xyz>',
      to: email,
      subject: '🎉 You’re on the waitlist!, this is a testing from joys',
      html: emailHtml, // ✅ Now it's a string, not a Promise
    });
  
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
