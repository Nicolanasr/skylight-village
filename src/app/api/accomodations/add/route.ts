import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "../../../../lib/mongodb";
import Accomodation from "../../../../models/Accomodation";

export async function POST(req: NextRequest) {
	await connectToDatabase();
	try {
		const body = await req.json();
		const { name, description, pricePerNight, capacity, available, location, amenities, images, size, type } = body;

		const newAccomodation = new Accomodation({
			name,
			description,
			pricePerNight,
			amenities,
			images,
			available,
			capacity,
			size,
			location,
			type,
		});
		await newAccomodation.save();

		return NextResponse.json({ message: "created", newAccomodation }, { status: 201 });
	} catch (error: unknown) {
		return NextResponse.json({ message: error }, { status: 500 });
	}
}
