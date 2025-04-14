import mongoose from "mongoose";

const accomodationSchema = new mongoose.Schema({
	name: { type: String, required: true },
	slug: { type: String, required: true },
	description: { type: String, required: true },
	pricePerNight: { type: Number, required: true },
	amenities: [String], // Array of amenities, e.g., Wi-Fi, Air Conditioning, etc.
	images: [String], // Array of image URLs
	available: { type: Boolean, default: true },
	capacity: {
		adult: {
			min: { type: Number, required: true },
			max: { type: Number, required: true },
		},
		children: {
			min: { type: Number, required: true },
			max: { type: Number, required: true },
		},
	},
	size: { type: Number, required: true },
	location: { type: String, required: true }, // e.g., Mountain view, near playground, etc.
	bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }], // Referencing Bookings
	createdAt: { type: Date, default: Date.now },
	type: { type: String, enum: ["bungalow", "tent", "other"], default: "other" },
});

export default mongoose.models.Accomodation || mongoose.model("Accomodation", accomodationSchema);
