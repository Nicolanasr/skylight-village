import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "@/lib/mongodb";
import Accomodation from "@/models/Accomodation";
import Booking from "@/models/Booking";

export async function GET(req: NextRequest) {
	await connectToDatabase();

	try {
		const params = req.nextUrl.searchParams;
		// checkin, checkout, type, guests
		const checkin = params.get("checkin");
		const checkout = params.get("checkout");
		const accomodationType = params.get("accomodation");
		const guests = params.get("guests");
		const adults = guests?.split(", ")[0].split(" ")[0];
		const childrens = guests?.split(", ")[1].split(" ")[0];

		console.log(checkin, checkout, accomodationType, guests);

		// Combine them all into one array
		let accommodations = [];

		if (checkin && checkout) {
			const checkInDate = new Date(checkin);
			const checkOutDate = new Date(checkout);

			const bookedAccomodationIds = await Booking.find({
				resourceType: accomodationType,
				$or: [
					{
						checkInDate: { $lt: checkOutDate },
						checkOutDate: { $gt: checkInDate },
					},
					{
						checkInDate: { $eq: checkInDate },
						checkOutDate: { $eq: checkOutDate },
					},
					{
						checkInDate: { $eq: checkOutDate },
						checkOutDate: { $gt: checkOutDate },
					},
					{
						checkOutDate: { $eq: checkInDate },
						checkInDate: { $lt: checkInDate },
					},
				],
			}).distinct("resourceId");

			const availableAccomodations = await Accomodation.find({
				_id: { $nin: bookedAccomodationIds },
				"capacity.adult.max": { $gte: adults },
				"capacity.adult.min": { $lte: adults },
				"capacity.children.max": { $gte: childrens },
				"capacity.children.min": { $lte: childrens },
				type: accomodationType,
				available: true,
			});
			accommodations = availableAccomodations;
		} else {
			const allAccomodations = await Accomodation.find();
			accommodations = allAccomodations;
		}

		return NextResponse.json({ message: "success", accommodations }, { status: 200 });
	} catch (err: unknown) {
		return NextResponse.json({ message: err }, { status: 500 });
	}
}
