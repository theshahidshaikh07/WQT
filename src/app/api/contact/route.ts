import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    company?: string;
    timeline: string;
    details: string;
    agreeToPrivacy: boolean;
}

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json();
        const { name, email, phone, company, timeline, details, agreeToPrivacy } = body;

        // Validate required fields
        if (!name || !email || !phone || !details || !agreeToPrivacy) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || '', // Will be set in .env
                pass: process.env.EMAIL_PASSWORD || '', // Will be set in .env
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER || 'contact.wqt@gmail.com',
            to: process.env.EMAIL_USER || 'contact.wqt@gmail.com',
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        .header {
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            padding: 30px;
                            border-radius: 10px 10px 0 0;
                            text-align: center;
                        }
                        .content {
                            background: #f9f9f9;
                            padding: 30px;
                            border-radius: 0 0 10px 10px;
                        }
                        .field {
                            margin-bottom: 20px;
                            padding: 15px;
                            background: white;
                            border-radius: 8px;
                            border-left: 4px solid #667eea;
                        }
                        .label {
                            font-weight: bold;
                            color: #667eea;
                            margin-bottom: 5px;
                        }
                        .value {
                            color: #333;
                        }
                        .footer {
                            text-align: center;
                            margin-top: 20px;
                            padding-top: 20px;
                            border-top: 2px solid #e0e0e0;
                            color: #666;
                            font-size: 12px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1 style="margin: 0;">New Contact Form Submission</h1>
                            <p style="margin: 10px 0 0 0;">WQT Contact Form</p>
                        </div>
                        <div class="content">
                            <div class="field">
                                <div class="label">Name:</div>
                                <div class="value">${name}</div>
                            </div>
                            
                            <div class="field">
                                <div class="label">Email:</div>
                                <div class="value"><a href="mailto:${email}">${email}</a></div>
                            </div>
                            
                            <div class="field">
                                <div class="label">Phone:</div>
                                <div class="value"><a href="tel:${phone}">${phone}</a></div>
                            </div>
                            
                            ${company ? `
                            <div class="field">
                                <div class="label">Company:</div>
                                <div class="value">${company}</div>
                            </div>
                            ` : ''}
                            
                            <div class="field">
                                <div class="label">Timeline:</div>
                                <div class="value">${timeline}</div>
                            </div>
                            
                            <div class="field">
                                <div class="label">Details:</div>
                                <div class="value">${details.replace(/\n/g, '<br>')}</div>
                            </div>
                            
                            <div class="footer">
                                <p>This email was sent from the WQT contact form.</p>
                                <p>Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
