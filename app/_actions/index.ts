import Parser from 'rss-parser';
import { Resend } from 'resend';

const parser = new Parser();

export async function fetchMediumPosts() {
  "use server";
  const feed = await parser.parseURL(`https://medium.com/feed/@johnnybuilds`);

  console.log(feed.items[0])
  
  return feed.items.map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    contentSnippet: item.contentSnippet,
  }));
}

export async function verifyCaptcha(captchaToken: string) {
  "use server";

  const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
  });

  const captchaValidation = await response.json();
  if (captchaValidation.success) {
    return true;
  } else {
    throw new Error("reCAPTCHA validation failed");
  }
}

export async function sendRequest({title, description, contact}: {title: string, description: string, contact: string}) {
  'use server';

  if (!process.env.EMAIL_JOHNNY) {
    throw new Error("Email is not defined in the environment. Johnny done fucked up son!");
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data } = await resend.emails.send({
    from: 'Build Requests <requests@johnnybuilds.com>',
    to: [process.env.EMAIL_JOHNNY],
    subject: 'New Johnny Builds Request',
    html: `<h1>${title}<br/><br/></h1><div>${description}<br/><br/></div><div>Contact:<br/>${contact}</div>`
  });

  console.log(data);
}