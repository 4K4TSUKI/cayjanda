import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "@/types";

type ResponseType = {
	message: string
	content: Product[]
}

function postProduct(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function getProduct(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function putProduct(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function deleteProduct(req: NextApiRequest, res: NextApiResponse<ResponseType>){}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>){
	switch(req.method){
		case "POST": {
			postProduct(req,res)
			break;
		}
		case "PUT": {
			putProduct(req,res)
			break;
		}
		case "GET": {
			getProduct(req,res)
			break;
		}
		case "DELETE": {
			deleteProduct(req,res);
			break;
		}
		default: {
			res.status(418).send({message: "No such method", content: []})
		}

	}
}