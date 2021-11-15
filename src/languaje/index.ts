import es from "./es.json";

export enum Locales {
	ES = "es",
}

export const LOCALES = [{ value: Locales.ES, caption: "English" }];

export const messages = {
	[Locales.ES]: es,
};

export const defaultLocale = Locales.ES;
