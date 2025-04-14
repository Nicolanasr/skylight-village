import { FC } from "react";
import React from 'react'

type PageProps = {
    params: {
        slug: string;
    };
};

const AccomodationsSlug: FC<PageProps> = ({ params }) => {
    const { slug } = params;
    return (

        <div>{slug}</div>
    )
}

export default AccomodationsSlug