import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { Resend } from 'resend'
import { inngest } from "../../../inngest/client";

const resend = new Resend('re_NHYRNKnP_ExRzxqMXKHUUm5P5nY9tapT5');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export async function POST(req: Request) {
  console.log("GOT HERE")
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload);

  console.error('WEBHOOK_SECRET: ', WEBHOOK_SECRET)
  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    })
  }


  // Do something with the payload
  // For this guide, you simply log the payload to the console
  const { id } = evt.data;
  const eventType = evt.type;
  console.log(`Webhook with and ID of ${id} and type of ${eventType}`)
  console.log('Webhook body:', body)
  console.log("evt.data: " + JSON.stringify(evt.data))
  
  if ( evt.type === 'user.created' ) {
    try {
      console.log("evt.data.email_addresses[0].email_address:" + evt.data.email_addresses[0].email_address)
      console.log("evt.data: " + JSON.stringify(evt.data))
      await prisma.user.create({
        data: {
          email: evt.data.email_addresses[0].email_address
        } 
      })
      console.log("Finished adding user")
      const allUsers = await prisma.user.findMany()
      console.log("All users:", allUsers)
    } catch (error: any) {
      console.log("Error adding user to database")
    }
  }
  if ( evt.type === 'user.created' ) {
    try {
      await inngest.send({
        name: "test/send.email",
        data: {
          email: evt.data.email_addresses[0].email_address,
        },
      });
      console.log("Finished send")
    } catch (error) {
      console.error("Error:", error)
    }
  }

  console.log("AFTER")

  return new Response('', { status: 200 })

}