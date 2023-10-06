import createRandomProducts from "@/components/GenerateDummyList"
import { NextApiRequest, NextApiResponse } from "next";


const apiHandler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        res.status(200).json(createRandomProducts(5));
    } else if (req.method === 'POST') {
        res.status(200).json({ message: "Test"});
    } else {
        res.status(405).end();
    }  
}

export default apiHandler;