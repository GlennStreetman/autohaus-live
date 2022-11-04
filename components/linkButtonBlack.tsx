import Link from "next/link";

interface props {
    text: string | Element | JSX.Element;
    link: string;
    icon?: JSX.Element; //svg icon?
    newtab?: boolean;
}


const textRegular =
    `flex flex-row shrink p-2 bg-transparent gap-1  
    text-2xl text-black hover:text-white font-heading font-extrabold subpixel-antialiased  uppercase
    relative
    inline-block
    transition-all
    duration-500
    before:content-[''] 
    before:absolute 
    before:-bottom-2
    before:left-1/2
    before:-translate-x-1/2
    before:w-0 
    before:left-0 
    before:h-1.5 
    before:rounded-full 
    before:opacity-0 
    before:transition-all 
    before:duration-500 
    before:bg-gradient-to-r
    before:from-neutral-50
    before:via-neutral-200
    before:to-neutral-50
    hover:before:w-full
    hover:before:opacity-100
    hover:before:bottom-0
    shrink m-auto
    `;

function LinkButtonBlack(p: props) {
    return (

        <div className="my-auto">
            {p.newtab === true ? (
                <div className="flex z-20">
                    <Link href={p.link}>
                    <a target="_blank"  className={textRegular}>
                        {p.icon ? p.icon : <></>}
                        <div className="flex">
                            <div className="shrink m-auto">{p.text}</div>
                        </div>
                    </a>
                    </Link>
                    <div className="flex grow" />
                </div>
            ) : (
                <div className="flex z-20">
                    <Link href={p.link}>
                    <a href={p.link} className={textRegular}>
                        {p.icon ? p.icon : <></>}
                        <div className="flex">
                            <div className="shrink m-auto">{p.text}</div>
                        </div>
                    </a>
                    </Link>
                    <div className="flex grow" />
                </div>
            )}
        </div>
    );
}

export function NextLinkButtonBlack(p: props) {
    return (

        <div className="my-auto">
            {p.newtab === true ? (
                <div className="flex z-20">
                    <a target="_blank" href={p.link} className={textRegular}>
                        {p.icon ? p.icon : <></>}
                        <div className="flex">
                            <div className="shrink m-auto">{p.text}</div>
                        </div>
                    </a>
                    <div className="flex grow" />
                </div>
            ) : (
                <div className="flex z-20">
                    <a href={p.link} className={textRegular}>
                        {p.icon ? p.icon : <></>}
                        <div className="flex">
                            <div className="shrink m-auto">{p.text}</div>
                        </div>
                    </a>
                    <div className="flex grow" />
                </div>
            )}
        </div>
    );
}

export default LinkButtonBlack;
