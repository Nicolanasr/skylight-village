import { FC } from "react";
import React from 'react'

type PageProps = {
    params: {
        slug: string;
    };
};

const AccomodationsSlug: FC<PageProps> = ({ params }) => {
    return (

        <div>{params.slug}</div>
    )
}

export default AccomodationsSlug