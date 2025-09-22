import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { v4 as UUID } from 'uuid';
import { ContactMessage, db } from 'astro:db';

export const sendContact = defineAction({
    accept: "form",
    input: z.object({
        name: z.string().min(6).max(30),
        email: z.string().email(),
        message: z.string().min(6).max(150)
    }),
    handler: async ({ name, email, message }) => {

        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            throw new Error("All fields are required");
        }

        const newContactMessage = {
            id: UUID(),
            name,
            email,
            message,
            sendAt: new Date()
        }

        await db.insert(ContactMessage).values(newContactMessage);

        return { message: "Form sent successfully", ok: true };
    }
});