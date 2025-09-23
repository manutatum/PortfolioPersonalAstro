import type { Project } from "@/interfaces/Project.interface";

import tesloShopImage from "@/assets/images/teslo-shop.png";
import trassTareasImage from "@/assets/images/trass-tareas.png";
import chatWebSocketsImage from "@/assets/images/chat-websockets.png";
import bookManagerApiImage from "@/assets/images/book-manager-api.png";

export const myProjects: Project[] = [
    {
        title: "Book Manager API",
        description: "API para una gestión personal de tus libros, permite añadir, eliminar y editar libros que te hayas leído o que tengas pendientes o en proceso.",
        image: bookManagerApiImage,
        url: "https://github.com/manutatum/BookManagerSpring",
        technologies: ["Java", "Spring Boot", "MySQL", "Hibernate", "Swagger", "OpenPDF", "Spring Security", "JWT"]
    },
    {
        title: "Chat WebSockets",
        description: "Aplicación de chat en tiempo real. El frontend está desarrollado con React + TypeScript y Tailwind CSS, mientras que el backend está implementado en Java.",
        image: chatWebSocketsImage,
        url: "https://github.com/manutatum/chatWebSocketsFrontend",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "Hibernate", "React", "TypeScript", "Tailwind CSS"]
    },
    {
        title: "Teslo Shop",
        description: "Teslo Shop es una tienda de ropa inspirada en la experiencia de compra de la tienda oficial de Tesla. La aplicación está diseñada para ofrecer una experiencia de usuario moderna, fluida y minimalista.",
        image: tesloShopImage,
        url: "https://github.com/manutatum/Teslo-Shop",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "React", "Zustand", "Next Auth"]
    },
    {
        title: "TrassTareas",
        description: "TrassTareas es una aplicación móvil que permite a los usuarios gestionar sus tareas.",
        image: trassTareasImage,
        url: "https://github.com/manutatum/TrassTareas",
        technologies: ["Java", "Android Studio", "MySQL", "SQLite", "Glide"]
    }
];