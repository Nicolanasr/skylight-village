import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to user (if users are implemented)
	resourceType: { type: String, enum: ["bungalow", "tent", "restaurant", "space"], required: true },
	resourceId: { type: mongoose.Schema.Types.ObjectId, refPath: "resourceType", required: true }, // Dynamic reference based on resourceType
	checkInDate: { type: Date, required: true },
	checkOutDate: { type: Date, required: true },
	totalPrice: { type: Number, required: true },
	status: { type: String, enum: ["pending", "booked", "completed", "cancelled"], default: "pending" },
	createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
