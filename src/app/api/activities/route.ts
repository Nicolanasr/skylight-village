import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "../../../lib/mongodb";
import Event from "@/models/Event";

export async function GET() {
	await connectToDatabase();

	try {
		const allEvents = await Event.find();
		return NextResponse.json({ message: "success", allEvents }, { status: 200 });
	} catch (err: unknown) {
		return NextResponse.json({ message: err }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	await connectToDatabase();
	try {
		const body = await req.json();
		const { name, description, date, location, maxParticipants } = body;

		const newEvent = new Event({
			name,
			description,
			date,
			location,
			maxParticipants,
		});
		await newEvent.save();

		return NextResponse.json({ message: "created", newEvent }, { status: 201 });
	} catch (error: unknown) {
		return NextResponse.json({ message: error }, { status: 500 });
	}
}
