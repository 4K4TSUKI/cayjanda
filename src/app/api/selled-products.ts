import { NextApiRequest, NextApiResponse } from "next";
import { SelledProduct } from "@/types";

type ResponseType = {
	message: string
	content: SelledProduct[]
}

function postSelledProduct(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function getSelledProduct(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function putSelledProduct(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function deleteSelledProduct(req: NextApiRequest, res: NextApiResponse<ResponseType>){}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>){
	switch(req.method){
		case "POST": {
			postSelledProduct(req,res)
			break;
		}
		case "PUT": {
			putSelledProduct(req,res)
			break;
		}
		case "GET": {
			getSelledProduct(req,res)
			break;
		}
		case "DELETE": {
			deleteSelledProduct(req,res);
			break;
		}
		default: {
			res.status(418).send({message: "No such method", content: []})
		}

	}
}