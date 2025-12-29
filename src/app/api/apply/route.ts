import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const linkedin = formData.get('linkedin') as string;
        const portfolio = formData.get('portfolio') as string;
        const coverLetter = formData.get('coverLetter') as string;
        const jobTitle = formData.get('jobTitle') as string;
        const file = formData.get('resume') as File;

        // Validate required fields
        if (!name || !email || !phone || !linkedin || !file) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create transporter (same as contact form)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'contact.wqt@gmail.com',
                pass: process.env.EMAIL_PASSWORD || '',
            },
        });

        // Convert file to buffer for attachment
        const buffer = Buffer.from(await file.arrayBuffer());

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER || 'contact.wqt@gmail.com',
            to: process.env.EMAIL_USER || 'contact.wqt@gmail.com',
            replyTo: email,
            subject: `New Job Application: ${name} - ${jobTitle || 'General Application'}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: #000; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                        .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #000; }
                        .label { font-weight: bold; color: #000; margin-bottom: 5px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1 style="margin: 0;">New Job Application</h1>
                            <p style="margin: 10px 0 0 0;">${jobTitle}</p>
                        </div>
                        <div class="content">
                            <div class="field"><div class="label">Name:</div><div>${name}</div></div>
                            <div class="field"><div class="label">Email:</div><div><a href="mailto:${email}">${email}</a></div></div>
                            <div class="field"><div class="label">Phone:</div><div><a href="tel:${phone}">${phone}</a></div></div>
                            <div class="field"><div class="label">LinkedIn:</div><div><a href="${linkedin}">${linkedin}</a></div></div>
                            ${portfolio ? `<div class="field"><div class="label">Portfolio/GitHub:</div><div><a href="${portfolio}">${portfolio}</a></div></div>` : ''}
                            ${coverLetter ? `<div class="field"><div class="label">Cover Letter:</div><div>${coverLetter.replace(/\n/g, '<br>')}</div></div>` : ''}
                            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;" />
                            <p style="text-align: center; color: #666; font-size: 12px;">Resume is attached to this email.</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
            attachments: [
                {
                    filename: file.name,
                    content: buffer,
                    contentType: file.type,
                },
            ],
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Application submitted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing application:', error);
        return NextResponse.json(
            { error: 'Failed to submit application' },
            { status: 500 }
        );
    }
}
