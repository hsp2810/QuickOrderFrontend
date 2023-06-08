import "../../index.css";

export const primaryColor = getComputedStyle(
	document.documentElement
).getPropertyValue("--primary-color");

export const secondaryBgColor = getComputedStyle(
	document.documentElement
).getPropertyValue("--secondary-bg-color");

export const tertiaryBgColor = getComputedStyle(
	document.documentElement
).getPropertyValue("--tertiary-bg-color");
