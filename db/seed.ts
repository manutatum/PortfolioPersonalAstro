import { ContactMessage, db } from 'astro:db';
import { v4 as UUID } from 'uuid';

export default async function seed() {
	const exampleMessage = {
		id: UUID(),
		name: 'John Doe',
		email: 'john@example.com',
		message: 'Hello, this is a message from the database!',
		sendAt: new Date()
	};

	await db.insert(ContactMessage).values(exampleMessage);
}
