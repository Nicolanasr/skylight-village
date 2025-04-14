export function titleToLink(title: string): string {
	return title
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, "") // Remove special characters
		.replace(/\s+/g, "-") // Replace spaces with dashes
		.replace(/-+/g, "-"); // Remove multiple dashes
}

export const truncateClean = (text: string, maxLength = 100) => {
	if (text.length <= maxLength) return text;
	return text.slice(0, text.lastIndexOf(" ", maxLength)) + "...";
};
