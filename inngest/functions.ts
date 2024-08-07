import { inngest } from "./client";
import { Resend } from 'resend'

const resend = new Resend('re_NHYRNKnP_ExRzxqMXKHUUm5P5nY9tapT5');

export const sendEmail = inngest.createFunction(
  { id: "send-email" },
  { event: "test/send.email" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    console.log(event.data.email)
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'rylowong8@gmail.com',
        subject: 'Welcome',
        html: '<p>Thank you for signing up to join our community!</p>'
      });
      console.log("After the email was sent")
    }
    catch(error){
      console.error("Emailing Error:", error)
    }
    return { event, body: "Hello, World!" };
  },
);

