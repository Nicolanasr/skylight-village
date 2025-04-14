import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "../../../lib/mongodb";
import Bungalow from "../../../models/Accomodation";

export async function GET() {
	await connectToDatabase();

	try {
		const allBungalows = await Bungalow.find();
		return NextResponse.json({ message: "success", allBungalows }, { status: 200 });
	} catch (err: unknown) {
		return NextResponse.json({ message: err }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	await connectToDatabase();
	try {
		const body = await req.json();
		const { name, description, pricePerNight, capacity, available, location, amenities, images } = body;

		const newBungalow = new Bungalow({
			name,
			description,
			pricePerNight,
			capacity,
			available,
			location,
			amenities,
			images,
		});
		await newBungalow.save();

		return NextResponse.json({ message: "created" }, { status: 201 });
	} catch (error: unknown) {
		return NextResponse.json({ message: error }, { status: 500 });
	}
}
