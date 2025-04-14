import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "../../../../lib/mongodb";
import Booking from "@/models/Booking";
import Accomodation from "@/models/Accomodation";

export async function GET(req: NextRequest) {
	await connectToDatabase();
	const params = req.nextUrl.searchParams;
	// checkin, checkout, type, guests
	const checkin = params.get("checkin");
	const checkout = params.get("checkout");
	const type = params.get("type");
	const guests = params.get("guests");

	console.log(checkin, checkout, type, guests);

	try {
		const allBookings = await Booking.find();
		return NextResponse.json({ message: "success", allBookings }, { status: 200 });
	} catch (err: unknown) {
		return NextResponse.json({ message: err }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	await connectToDatabase();
	try {
		// Parse and validate the request body
		const body = await req.json();
		const {
			user,
			resourceId,
			checkIn,
			checkOut,
		}: {
			user?: string;
			resourceId: string;
			checkIn: string;
			checkOut: string;
		} = body;

		if (!resourceId || !checkIn || !checkOut) {
			return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
		}

		const checkInDate = new Date(checkIn);
		const checkOutDate = new Date(checkOut);

		// Calculate number of nights
		const msInDay = 1000 * 60 * 60 * 24;
		const daysDifference = Math.round((checkOutDate.getTime() - checkInDate.getTime()) / msInDay);

		if (daysDifference <= 0) {
			return NextResponse.json({ message: "Check-out must be after check-in" }, { status: 400 });
		}

		// Fetch the accommodation
		const accommodation = await Accomodation.findById(resourceId);
		if (!accommodation) {
			return NextResponse.json({ message: "Accommodation not found" }, { status: 404 });
		}

		const totalPrice = daysDifference * accommodation.pricePerNight;
		const resourceType: string = accommodation.type;

		// Create a new booking
		const newBooking = await new Booking({
			user: user || undefined,
			resourceType,
			resourceId: resourceId,
			checkInDate,
			checkOutDate,
			totalPrice,
		}).save();

		// Push the booking ID into the accommodation's bookings array
		await Accomodation.findByIdAndUpdate(resourceId, {
			$push: { bookings: newBooking._id },
		});

		return NextResponse.json({ message: "Booking created successfully", newBooking }, { status: 201 });
	} catch (error: unknown) {
		console.log(error);
		return NextResponse.json({ message: error }, { status: 500 });
	}
}
