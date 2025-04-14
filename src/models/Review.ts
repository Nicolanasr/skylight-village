import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
	resourceType: { type: String, enum: ["bungalow", "tent", "restaurant", "space"], required: true },
	resourceId: { type: mongoose.Schema.Types.ObjectId, refPath: "resourceType", required: true },
	rating: { type: Number, min: 1, max: 5, required: true },
	comment: { type: String },
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
	createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Review || mongoose.model("Review", reviewSchema);
