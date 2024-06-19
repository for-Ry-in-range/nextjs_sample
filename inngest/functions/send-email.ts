import { inngest } from 'inngest'; // Assuming your Inngest client is in a separate file
import { Resend } from 'resend'

inngest.createFunction(
  { id: 'sendWelcomeEmail' },
  {event: "user.created"}
  async ({ event, step }) => {
    console.log(event.data.email)
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'rylowong8@gmail.com',
      subject: 'Welcome',
      html: '<p>Thank you for signing up to join our community!</p>'
    });
    return "Email sent!"
  }
);
