/*import { inngest } from 'inngest'; // Assuming your Inngest client is in a separate file
import { Resend } from 'resend'

export default inngest.createFunction(
  {
    id: 'sendWelcomeEmail',
    event: 'user.signedUp',
  },
  async ({ event, step }) => {
    try {
      const emailResponse = await sendWelcomeEmail(event.data.email);
      console.log('Email sent successfully:', emailResponse);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
);

async function sendWelcomeEmail(email) {
  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'rylowong8@gmail.com',
    subject: 'Welcome',
    html: '<p>Thank you for signing up to join our community!</p>'
  });
}*/