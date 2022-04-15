import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface props {
    text: string | Element | JSX.Element;
    callback: Function;
    icon: JSX.Element; //svg icon?
    link?: string;
    highlight?: boolean;
    nextLink?: boolean;
}

const highlight = "border-2 p-2 rounded-md bg-secondary shadow-lg shadow-slate-600 hover:bg-strong hover:border-black  active:bg-strong text-sm";
const regular = "border-2 p-2 rounded-md bg-secondary shadow-sm shadow-slate-600 hover:bg-weak hover:border-black  active:bg-strong text-sm";

const textHighlight = "flex flex-row gap-1 hover:text-accent text-red-600";
const textRegular = "flex flex-row gap-1 hover:text-accent";

function IconButton(p: props) {
    let router;
    if (p.nextLink) router = useRouter();

    return (
        <button
            className={p.highlight === true ? highlight : regular}
            onClick={() => {
                p.callback();
                if (p.nextLink) {
                    router.push(p.link);
                } else if (p.link) {
                    location.replace(p.link);
                }
            }}
        >
            <div className="flex m-auto text-primary hover:text-accent ">
                {p.nextLink ? (
                    <Link href={p.link}>
                        <div className={p.highlight === true ? textHighlight : textRegular}>
                            {p.icon} <div className="m-auto">{p.text}</div>
                        </div>
                    </Link>
                ) : (
                    <div className={p.highlight === true ? textHighlight : textRegular}>
                        {p.icon} <div className="m-auto">{p.text}</div>
                    </div>
                )}
            </div>
        </button>
    );
}

export default IconButton;
