import ParseMarkdown from "../lib/parseMarkdown";


interface props {
    heading: string;
    body: string;
    override?: string;
}

function Intro(p: props) {

    return (
        <div className='bg-white p-4 pt-4'>
            <div className='lg:mx-auto lg:w-3/5'>
                <div className="font-body text-3xl font-bold mb-4">
                    <div className={p.override ? p.override : ''}>
                        {p.heading}
                    </div>
                </div>
                <div className="font-body text-sm mx-auto">
                    <ParseMarkdown text={p.body} />
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default Intro;

