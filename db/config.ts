import { column, defineDb, defineTable } from 'astro:db';

const ContactMessage = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true }),
    name: column.text(),
    email: column.text(),
    message: column.text(),
    sendAt: column.date(),
  },
});

export default defineDb({
  tables: { ContactMessage }
});
