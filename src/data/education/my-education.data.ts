import type { EducationModule } from "@/interfaces/EducationModule.interface";

export const myEducation: EducationModule[] = [
    {
        title: "Desarrollo de Aplicaciones Web",
        description: "Ciclo Superior de Desarrollo de Aplicaciones Web",
        startDate: new Date(2021, 9, 15),
        endDate: new Date(2024, 6, 15),
    },
    {
        title: "Desarrollo de Aplicaciones Multiplataforma",
        description: "Ciclo Superior de Desarrollo de Aplicaciones Multiplataforma",
        startDate: new Date(2024, 10, 15),
        // endDate: new Date(2025, 12, 15),
    },
    {
        title: "Curso de React: De Cero a experto",
        description: "Curso de React: De Cero a experto",
        startDate: new Date(2024, 3, 15),
        endDate: new Date(2024, 4, 15),
    },
    {
        title: "NextJS",
        description: "Curso de NextJS",
        startDate: new Date(2024, 3, 15),
        endDate: new Date(2024, 4, 15),
    },
    {
        title: "Spring Framework 6 & Spring Boot 3 desde cero a experto",
        description: "Curso de Spring Framework 6 & Spring Boot 3 desde cero a experto",
        startDate: new Date(2025, 6, 15),
        endDate: new Date(2025, 7, 15),
    },
    {
        title: "Astro: El framework para sitios web orientados al contenido",
        description: "Curso de Astro: El framework para sitios web orientados al contenido",
        startDate: new Date(2025, 7, 15),
        endDate: new Date(2025, 9, 1),
    }
];