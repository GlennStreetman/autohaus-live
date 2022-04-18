import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import NextLinkButton from "./nextLinkButton";
import { SiPorsche } from "react-icons/si";

//flex grid elements
const gutter = " hidden lg:block lg:col-span-1 "; //2x
const dataLeft = "p-2  col-span-12 md:col-span-12 lg:col-span-10"; //2x
const imgBox = "relative rounded-md bg-black overflow-hidden h-40 w-40 md:h-80 md:w-80 lg:h-96 lg:w-96 xl::h-96 xl:w-116 float-left m-2 ";

function why() {
    const router = useRouter();
    return (
        <div className="flex flex-col">
            <div className="grid justify-items-center w-screen p-3">
                <div className="text-3xl font-bold">Why go with Auto Haus?</div>
            </div>
            <div className="grid grid-cols-12">
                <div className={gutter} />
                <div className={dataLeft}>
                    <div className={imgBox}>
                        <Image src="/gulfOil.jpg" layout="fill" objectFit="fill" />
                    </div>
                    <div className="text-3xl font-bold">Santa Monica's Porsche Experts</div>
                    <p>
                        20 years experience working with all makes and models is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
                    </p>
                    <br />
                    <p>
                        Complementary car service dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galle
                    </p>
                    <br />
                    <p>
                        I'm best choice dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galle
                    </p>
                    <br />
                    <div className="flex p-2 gap-2 justify-center ">
                        <NextLinkButton text={"Meet the team"} icon={<SiPorsche className="h-7 w-7" />} link="/team" />
                    </div>
                </div>
                <div className={gutter} />
            </div>
        </div>
    );
}

export default why;
