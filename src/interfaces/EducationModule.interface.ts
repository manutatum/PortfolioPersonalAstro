import type { Temporal } from "@js-temporal/polyfill";

export interface EducationModule {
    title: string;
    description: string;
    startDate: Temporal.PlainDate;
    endDate?: Temporal.PlainDate;
}