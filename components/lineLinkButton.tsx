import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface props {
    text: string | Element | JSX.Element;
    icon: JSX.Element; //svg icon?
    link: string;
}

const textRegular = "relative flex flex-row p-2 text-xl gap-1 hover:text-accent justify-center z-20 bg-white";

// before:absolute before:left-0 before:top-1/2

function NextLinkButton(p: props) {
    return (
        <div className="flex p-2 gap-2 justify-center relative">
            <div className="before:w-full before:border-y-2 before:border-black before:hover:border-accent before:-z-10 before:hover:text-accent before:absolute before:left-0 before:top-1/2">
                <Link href={p.link}>
                    <a id="lineLink" className={textRegular}>
                        {p.icon}{" "}
                        <div className="flex">
                            <div className="shrink m-auto">{p.text}</div>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default NextLinkButton;
