import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['hexthecoder@gmail.com'],
            subject: `New message from ${name}`,
            html: `
                <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto;">
                    <div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1); padding-bottom: 24px; margin-bottom: 32px;">
                        <h1 style="font-size: 32px; font-weight: 750; letter-spacing: -0.02em; margin: 0; color: #000;">New Message</h1>
                        <p style="font-size: 16px; font-weight: 300; color: rgba(0, 0, 0, 0.7); margin: 8px 0 0 0;">You've received a new message through your contact form</p>
                    </div>

                    <div style="background: rgba(0, 0, 0, 0.02); border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 12px; padding: 24px; margin: 24px 0;">
                        <div style="margin-bottom: 24px;">
                            <div style="font-size: 12px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(0, 0, 0, 0.5); margin-bottom: 8px;">From</div>
                            <p style="font-size: 16px; font-weight: 300; color: #000; margin: 0;">${name} (${email})</p>
                        </div>
                        
                        <div>
                            <div style="font-size: 12px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(0, 0, 0, 0.5); margin-bottom: 8px;">Message</div>
                            <p style="font-size: 16px; font-weight: 300; color: #000; margin: 0; white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>

                    <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(0, 0, 0, 0.1); font-size: 14px; font-weight: 300; color: rgba(0, 0, 0, 0.5);">
                        This email was sent from your portfolio website's contact form.
                    </div>
                </div>
            `,
            replyTo: email
        });

        if (error) {
            return NextResponse.json(
                { error: error.message },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: 'Email sent successfully', id: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}