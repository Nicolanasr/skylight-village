import React from 'react'

type Props = {
    subtitle?: string;
    title?: string;
    isCenter?: boolean;
    className?: string;
}

const SectionTitle = ({ title, subtitle, isCenter, className }: Props) => {
    const classes = `${className} ${isCenter && "text-center"}`
    return (
        <div className={`${classes}`}>
            {subtitle && <h4 className='font-semibold text-skylight-green text-lg uppercase mb-2'>{subtitle}</h4>}
            {title && <h2 className='text-4xl md:text-5xl font-semibold md:leading-14'>{title}</h2>}
        </div>
    )
}

export default SectionTitle