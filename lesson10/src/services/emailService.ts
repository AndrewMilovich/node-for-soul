import * as nodemailer from 'nodemailer';
import EmailTemplate from 'email-templates';
import path from 'path';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { config } from '../config/config';
import { emailActionEnum, emailInfo } from '../constants';
import { RootDir } from '../app';

class EmailService {
    async sendMail(
        userMail:string,
        action:emailActionEnum,
        context = {},
    ):Promise<SMTPTransport.SentMessageInfo> {
        const { subject, templateName } = emailInfo[action];

        const templateRender = new EmailTemplate({
            views: { root: path.join(RootDir, 'email-templates') },
        });
        Object.assign(context, { frontendUrl: config.FRONT_URL });
        const html = await templateRender.render(templateName, context);

        const emailTransporter = nodemailer.createTransport({
            from: 'No Reply Sep-2021',
            service: 'gmail',
            auth: {
                user: config.NO_REPLY_EMAIL,
                pass: config.NO_REPLY_EMAIL_PASSWORD,
            },
        });
        return emailTransporter.sendMail({
            to: userMail,
            subject,
            html,
        });
    }
}

export const emailService = new EmailService();
