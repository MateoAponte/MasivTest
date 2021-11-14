import en from "./es.json";

export enum Locales {
	EN = "en",
	FR = "fr",
}

export const LOCALES = [
	{ value: Locales.EN, caption: "English" },
	{ value: Locales.FR, caption: "Français" },
];

export const messages = {
	[Locales.EN]: en,
};

export const defaultLocale = Locales.EN;
