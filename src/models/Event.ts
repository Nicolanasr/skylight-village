import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	date: { type: Date, required: true },
	location: { type: String },
	maxParticipants: { type: Number },
	bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
	createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Event || mongoose.model("Event", eventSchema);
