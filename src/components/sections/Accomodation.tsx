
import { checkEnvironment } from "@/lib/functions";
import { AccType } from "../bookings/AccomodationCart";
import AccomodationPage from "./AccomodatoinPage";

export default async function Accomodation() {
    let accommodations: AccType[] = [];

    try {
        const res = await fetch(`${checkEnvironment()}/api/accomodations`, {
            next: { revalidate: 60 }, // optional if using in app/
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const tmp_accommodations = await res.json();
        accommodations = tmp_accommodations.accommodations;
    } catch (error) {
        console.error("Failed to fetch accommodations:", error);
    }


    return <AccomodationPage accommodations={accommodations} />;
}


