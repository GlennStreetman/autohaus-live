import React, { useContext } from "react";
import Banner from "../components/banner";
import prisma from "../lib/prismaPool";
import { PublicContext, PublicHOC } from "../components/publicData";
import Head from "next/head";

export async function getStaticProps() {
    const holidays = await prisma.holidays.findMany({});
    const data = await prisma.sitesetup.findMany({});
    return {
        props: {
            holidays,
            data: data,
        },
    };
}

const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
};

interface holidayObject {
    targetdate: string;
    holiday: string;
    daysclosed: string;
}

const tableCell = "p-2 ";
function Calendar(p) {
    const publicData = useContext(PublicContext);
    const gutter = "col-span-0 lg:col-span-1 xl:col-span-3"; //2x
    const body = "col-span-12 lg:col-span-10 xl:col-span-6 mb-4  text-white p-2"; //1x
    const smallTextStyling = `text-white font-heading bold text-1xl sm:text-2xl lg:text-3xl [text-shadow:2px_2px_rgba(0,0,0,1)] antialiased whitespace-pre-line`;

    function mapCalendar(calendar: holidayObject[]) {
        const mapped = Object.values(calendar).map((el) => {
            const date = el.targetdate.replace("T00:00:00.000Z", "").split("-");
            const dateNumber = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2])).getDay();
            return (
                <tr key={`calendarRow-${el.holiday}`}>
                    <td className={tableCell}>{el.targetdate.replace("T00:00:00.000Z", "")}</td>
                    <td className={tableCell}>{el.holiday}</td>
                    <td className={tableCell}>{days[dateNumber]}</td>
                    <td className="p-2 text-center">{el.daysclosed}</td>
                </tr>
            );
        });
        return mapped;
    }

    return (
        <>
            <Head>
                <title>{`${process.env.NEXT_PUBLIC_BUSINESS_NAME}: Calendar`}</title>
            </Head>
            <Banner>
                <div className={smallTextStyling}>{publicData.holidayMessage}</div>
            </Banner>
            <div className="grid grid-row grid-cols-12 bg-white">
                <div className={gutter}></div>
                <div className={body}>
                    <div className="flex flex-col content-center">
                        <div className="flex justify-center text-accent active:bg-strong text-3xl font-bold p-6">Upcoming holidays</div>
                        <table className="text-black border-2 border-black">
                            <thead className="border-2 border-black">
                                <tr className="border-black">
                                    <td className={tableCell}>Date:</td>
                                    <td className={tableCell}>Holiday:</td>
                                    <td className={tableCell}>Day:</td>
                                    <td className="p-2 text-center">Days Closed:</td>
                                </tr>
                            </thead>
                            <tbody>{mapCalendar(p.holidays)}</tbody>
                        </table>
                    </div>
                </div>
                <div className={gutter}></div>
            </div>
        </>
    );
}

export default function Main(p) {
    return (
        <PublicHOC {...p}>
            <Calendar holidays={p.holidays} />
        </PublicHOC>
    );
}
