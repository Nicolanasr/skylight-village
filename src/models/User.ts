import mongoose from "mongoose";

const validateEmail = function (email: string) {
	const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email);
};

const userSchems = new mongoose.Schema({
	name: { type: String, required: true },
	mobile: { type: String, match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/, required: true, unique: true },
	email: {
		type: String,
		trim: true,
		lowercase: true,
		unique: true,
		required: true,
		validate: [validateEmail, "Please fill a valid email address"],
		match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
	},
	Location: { type: String, required: false },
	createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model("User", userSchems);
