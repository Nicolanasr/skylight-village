import Link from 'next/link';
import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    scheme?: "transparent";
    className?: string,
    onClick?: () => void
    type?: "button" | "submit" | "reset"
}


const Button = ({ children, href, className, onClick, type }: ButtonProps) => {
    const classes: string = `border-2 cursor-pointer transition-all rounded-lg px-6 py-2 inline-block ${className}`;

    return (
        href ?
            <Link className={classes} href={href}>
                {children}
            </Link>
            :
            <button type={type} onClick={onClick} className={classes}>{children}</button>
    )
}

export default Button