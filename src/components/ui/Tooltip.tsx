'use client'

import React from 'react'

import { Tooltip } from "react-tooltip";

import 'react-tooltip/dist/react-tooltip.css'


interface TooltipProps {
    id: string;
    children: React.ReactNode;
    tooltipTtext: string;
}

const TooltipUI = ({ children, tooltipTtext, id }: TooltipProps) => {
    return (
        <>
            <Tooltip id={id} />
            <div data-tooltip-id={id} data-tooltip-content={tooltipTtext}>
                {children}
            </div>

        </>
    )
}

export default TooltipUI