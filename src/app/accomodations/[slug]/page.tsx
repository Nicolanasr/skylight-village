import React from 'react'

type Props = {
    params: {
        slug: string;
    };
}

const AccomodationsSlug = ({ params }: Props) => {
    return (

        <div>{params.slug}</div>
    )
}

export default AccomodationsSlug