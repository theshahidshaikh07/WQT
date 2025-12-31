import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const linkedin = formData.get('linkedin') as string;
        const portfolio = formData.get('portfolio') as string;
        const github = formData.get('github') as string;
        const otherLink = formData.get('otherLink') as string;
        const coverLetter = formData.get('coverLetter') as string;
        const jobTitle = formData.get('jobTitle') as string;
        const file = formData.get('resume') as File | null;
        const resumeUrl = formData.get('resumeUrl') as string | null;

        // Validate required fields
        if (!name || !email || !phone || !linkedin) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate that either file or URL is provided
        if (!file && !resumeUrl) {
            return NextResponse.json(
                { error: 'Please provide either a resume file or a resume link' },
                { status: 400 }
            );
        }

        // Prepare email options
        const mailOptions: any = {
            from: 'WQT Careers <onboarding@resend.dev>', // Use default until domain is verified
            to: ['wqt.contact@gmail.com'],
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
                        .resume-link { display: inline-block; margin-top: 10px; padding: 10px 20px; background: #000; color: white; text-decoration: none; border-radius: 6px; }
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
                            ${portfolio ? `<div class="field"><div class="label">Portfolio:</div><div><a href="${portfolio}">${portfolio}</a></div></div>` : ''}
                            ${github ? `<div class="field"><div class="label">GitHub:</div><div><a href="${github}">${github}</a></div></div>` : ''}
                            ${otherLink ? `<div class="field"><div class="label">Other Link:</div><div><a href="${otherLink}">${otherLink}</a></div></div>` : ''}
                            ${coverLetter ? `<div class="field"><div class="label">Cover Letter:</div><div>${coverLetter.replace(/\n/g, '<br>')}</div></div>` : ''}
                            ${resumeUrl ? `<div class="field"><div class="label">Resume Link:</div><div><a href="${resumeUrl}" class="resume-link" target="_blank">View Resume</a></div></div>` : ''}
                            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;" />
                            <p style="text-align: center; color: #666; font-size: 12px;">
                                ${file ? 'Resume is attached to this email.' : resumeUrl ? 'Resume link is provided above.' : ''}
                            </p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        };

        // Add file attachment if provided
        if (file) {
            const buffer = Buffer.from(await file.arrayBuffer());
            mailOptions.attachments = [
                {
                    filename: file.name,
                    content: buffer,
                },
            ];
        }

        // Send email via Resend
        const { data, error } = await resend.emails.send(mailOptions);

        if (error) {
            console.error('Error processing application:', error);
            return NextResponse.json(
                { error: 'Failed to submit application' },
                { status: 500 }
            );
        }

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
