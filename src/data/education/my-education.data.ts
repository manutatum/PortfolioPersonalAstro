import type { EducationModule } from "@/interfaces/EducationModule.interface";

export const myEducation: EducationModule[] = [
    {
        title: "Desarrollo de Aplicaciones Web",
        description: "Ciclo Superior en I.E.S. Trassierra, centrado en el desarrollo de aplicaciones web modernas usando HTML, CSS, JavaScript y frameworks actuales, con buenas prácticas de diseño y usabilidad.",
        startDate: new Date(2021, 9, 15),
        endDate: new Date(2024, 6, 15),
    },
    {
        title: "Desarrollo de Aplicaciones Multiplataforma",
        description: "Ciclo Superior en el I.E.S. Trassierra orientado al desarrollo de aplicaciones multiplataforma para escritorio, dispositivos móviles y entornos empresariales.",
        startDate: new Date(2024, 10, 15),
        // endDate: new Date(2025, 12, 15),
    },
    {
        title: "Curso de React: De Cero a experto",
        description: "Curso completo de React en manos de Fernando Herrera, cubriendo componentes, hooks, gestión de estado, enrutamiento y optimización de aplicaciones frontend modernas.",
        startDate: new Date(2024, 3, 15),
        endDate: new Date(2024, 4, 15),
    },
    {
        title: "NextJS",
        description: "Curso de NextJS impartido por Fernando Herrera, desarrollador de React, con la finalidad de mejorar mi conocimiento y experiencia en el desarrollo de aplicaciones frontend modernas.",
        startDate: new Date(2024, 3, 15),
        endDate: new Date(2024, 4, 15),
    },
    {
        title: "Spring Framework 6 & Spring Boot 3 desde cero a experto",
        description: "Formación avanzada en desarrollo backend con Java, creando APIs REST, gestionando seguridad con JWT y conectando bases de datos con JPA/Hibernate.",
        startDate: new Date(2025, 6, 15),
        endDate: new Date(2025, 7, 15),
    },
    {
        title: "Astro: El framework para sitios web orientados al contenido",
        description: "Curso enfocado en el uso de Astro para crear sitios rápidos y optimizados, integrando componentes de distintos frameworks y desplegándolos en producción.",
        startDate: new Date(2025, 7, 15),
        endDate: new Date(2025, 9, 1),
    }
];