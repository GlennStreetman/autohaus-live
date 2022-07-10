import prisma from "../../../lib/prismaPool";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const newOrder = req.body.newOrder;
            const updateList = newOrder.map(
                (el, index) =>
                    new Promise(async (res, rej) => {
                        await prisma.services.update({
                            where: {
                                id: el,
                            },
                            data: {
                                ordernumber: index + 1,
                            },
                        });
                        res(true);
                    })
            );

            Promise.all(updateList).then(async () => {
                fetch(`${process.env.NEXTAUTH_URL}/api/revalidate?secret=${process.env.NEXT_REVALIDATE}&path=/`);
                res.status(200).json({ msg: "success" });
            });
        } catch (err) {
            console.log("update service order err", err);
            res.status(500);
        }
    }
}
