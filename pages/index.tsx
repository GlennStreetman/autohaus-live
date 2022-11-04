import Banner from "../components/banner";
import Team from "../components/team";
import Services from "../components/services";
import Why from "../components/why";
import { PublicHOC } from "../components/publicData";
import Head from "next/head";
import FAQ from "../components/faq";
import Announcements from "../components/announcements";

import {getPublicFAQ, faqPayload} from "../strapiAPI/getPublicFAQ"
import {getPublicImages, imagePayload} from "../strapiAPI/getPublicImages"
import {getTeam, teamMember} from "../strapiAPI/getTeam"
import {getContacts, contacts} from "../strapiAPI/getContacts"
import {getSiteLinks, siteLinks} from "../strapiAPI/getSiteLinks"
import {getSiteText, siteText} from "../strapiAPI/getSiteText"
import {getServices, ServicePayload} from "../strapiAPI/getServices"
import {getBannerText, bannerTextPayload} from "../strapiAPI/getBannerText"


export async function getStaticProps() {

    const faqData = await getPublicFAQ()
    const imageUrls = await getPublicImages()
    const teamList = await getTeam()
    const contactData:contacts = await getContacts()
    const siteLinks:siteLinks = await getSiteLinks()
    const siteText:siteText = await getSiteText()
    const allServices:ServicePayload[] = await getServices()
    const bannerTexts:bannerTextPayload = await getBannerText()


    return {
        props: {
            faq: faqData,
            team: teamList,
            images: imageUrls,
            contacts: contactData,
            siteLinks: siteLinks,
            siteText: siteText,
            allServices: allServices,
            bannerTexts: bannerTexts,
        },
    };
}

interface props {
    faq: faqPayload[];
    images: imagePayload;
    team: teamMember[];
    data: string[];
    siteText: siteText;
    allServices: ServicePayload[];
    bannerTexts:bannerTextPayload;
}

interface staticData {
    faq: faqPayload[];
    images: imagePayload;
    team: teamMember[];
    data: string[];
    contacts: contacts;
    siteLinks: siteLinks;
    siteText: siteText;
    allServices: ServicePayload[];
    bannerTexts:bannerTextPayload
}

export function Home(p: props) {

    return (
        <>
            <Head>
                <title>{`${process.env.NEXT_PUBLIC_BUSINESS_NAME}: Porsche Repair Specialist - Santa Monica`}</title>
            </Head>
            <main>
                <section>
                    <Banner images={p.images}>
                            <div className='flex flex-col'>
                            <div className='w-full h-12' />
                            <Announcements bannerTexts={p.bannerTexts} />
                            </div>
                    </Banner>
                </section>
                <section>
                    <Services services={p.allServices} />
                </section>
                <section>
                    <Why siteText={p.siteText} />
                </section>
                <section>
                <Team team={p.team}/>
                </section>
                <section>
                    <FAQ faq={p.faq} />
                </section>
            </main>
        </>
    );
}

export default function Main(p: staticData) {
    return (
        <PublicHOC contacts={p.contacts} siteLinks={p.siteLinks} images={p.images} >
            <Home faq={p.faq} data={p.data} team={p.team} images={p.images} siteText={p.siteText} allServices={p.allServices} bannerTexts={p.bannerTexts}/>
        </PublicHOC>
    );
}
