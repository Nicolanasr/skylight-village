import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	menu: [{ name: String, price: Number, description: String, image: String }], // Menu items
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
	availableSlots: [{ type: Date }], // Date objects for available time slots
	bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
	createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantSchema);
