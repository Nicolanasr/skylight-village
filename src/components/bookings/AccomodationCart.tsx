import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";

import { Axe, Bath, BedDouble, Drama, Fence, FlameKindling, Heater, InspectionPanel, MountainSnow, RockingChair, Sun, Toilet, Trees, Wifi } from "lucide-react";
import TooltipUI from "../ui/Tooltip";
import { titleToLink, truncateClean } from "@/lib/functions";


export type AccType = {
    _id: string;
    images: string[];
    name: string;
    capacity?: {
        adult?: {
            min: number;
            max: number;
        };
        children?: {
            min: number;
            max: number;
        };
    };
    size: number;
    description: string;
    amenities: string[];
};

type Props = {
    data: AccType;
};


export const amenetiesIconMap: Record<string, ReactElement> = {
    "private bathroom": <Bath />,
    "mountain view": <MountainSnow />,
    "wi-fi": <Wifi />,
    "fireplace": <Heater />,
    "slides": <Drama />,
    "ropes": <Fence />,
    "treehouse": <Trees />,
    "safe flooring": <InspectionPanel />,
    "wood logs": <Axe />,
    "seating benches": <RockingChair />,
    "fire pit": <FlameKindling />,
    "queen bed": <BedDouble />,
    "shared bathroom": <Toilet />,
    "solar light": <Sun />,
};

const AccomodationCart = ({ data }: Props) => {
    // console.log(data);
    let capacityMin: number = 0;
    let capacityMax: number = 0;
    const size: number = data.size || 0;
    if (data.capacity !== undefined) {
        if (data.capacity.adult?.min) {
            capacityMin += data.capacity.adult?.min;
        }
        if (data.capacity.children?.min) {
            capacityMin += data.capacity.children?.min;
        }
        if (data.capacity.adult?.max) {
            capacityMax += data.capacity.adult?.max;
        }
        if (data.capacity.children?.max) {
            capacityMax += data.capacity.children?.max;
        }
    }

    return (
        <div >
            <Link href={`/accomodations/${titleToLink(data.name)}`} className="block w-full relative aspect-square bg-skylight-green octagon-path max-w-sm mx-auto">
                {data.images.length > 0 && <Image src={data.images[0]} layout="fill" alt={data.name} />}
            </Link>
            <div className="p-2">
                <div className="flex justify-between mt-4 items-center">
                    <h4 className="text-xl font-semibold ">{data.name}</h4>
                    <p className="text-sm font-light text-gray-500">
                        {capacityMin}-{capacityMax} persons <b>|</b> {size}m2
                    </p>
                </div>
                <p className="mt-2">{truncateClean(data.description, 100)}</p>
                <div className="border-t border-gray-400 mt-6 pt-4 flex justify-between">
                    {/* ameneties */}
                    <div className="flex gap-2">
                        {data.amenities.map((am: string, index) => <div key={index}>
                            <TooltipUI id={`${am}-${index}`} tooltipTtext={am}>
                                {amenetiesIconMap[am.toLocaleLowerCase()]}
                            </TooltipUI >
                        </div>)}
                    </div>
                    <Link href={`/accomodations/${titleToLink(data.name)}`} className="font-semibold flex gap-2 items-center">
                        Check Availability{" "}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.053" height="10.039" viewBox="0 0 20.053 10.039">
                            <path
                                d="M17.474,11.444a.683.683,0,0,0-.005.962l3.179,3.184H3.549a.68.68,0,0,0,0,1.359H20.643l-3.179,3.184a.688.688,0,0,0,.005.962.677.677,0,0,0,.957-.005l4.308-4.34h0a.763.763,0,0,0,.141-.214.649.649,0,0,0,.052-.261.681.681,0,0,0-.193-.476l-4.308-4.34A.666.666,0,0,0,17.474,11.444Z"
                                transform="translate(-2.875 -11.252)"
                            ></path>{" "}
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AccomodationCart;
