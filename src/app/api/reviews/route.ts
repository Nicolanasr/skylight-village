import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "../../../lib/mongodb";
import Review from "@/models/Review";

export async function GET() {
	await connectToDatabase();

	try {
		const allReviews = await Review.find();
		return NextResponse.json({ message: "success", allReviews }, { status: 200 });
	} catch (err: unknown) {
		return NextResponse.json({ message: err }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	await connectToDatabase();
	try {
		const body = await req.json();
		const { resourceType, resourceId, rating, comment, user } = body;

		const newReview = new Review({
			resourceType,
			resourceId,
			rating,
			comment,
			user,
		});
		await newReview.save();

		return NextResponse.json({ message: "created", newReview }, { status: 201 });
	} catch (error: unknown) {
		console.log(error);
		return NextResponse.json({ message: error }, { status: 500 });
	}
}
