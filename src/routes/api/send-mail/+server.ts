import { SENDGRI_API_KEY } from '$env/static/private';
import sgMail from '@sendgrid/mail';
import { json } from '@sveltejs/kit';

sgMail.setApiKey(SENDGRI_API_KEY);

function deplay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST({ request }) {
	const { contactMail, contactName, projectContext } = await request.json();

	await deplay(2000);

	if (!contactMail || !contactName || !projectContext) {
		json({ message: 'Could not send email. Missing data' }, { status: 400 });
	}

	const message = {
		to: 'pierre@mail.com',
		from: 'pierre@mail.com',
		subject: 'Contact From on your portfolio',
		html: `Somebody used the content form on your site <br/>
        Name: ${contactName},
        Email: ${contactMail},
        Context: ${projectContext}`
	};

	try {
		await sgMail.send(message);
		return json({ emailSendSuccesfully: true });
	} catch (err) {
		return json({ err }, { status: 500 });
	}
}
