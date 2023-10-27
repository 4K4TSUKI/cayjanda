import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@/types";

type ResponseType = {
	message: string
	content: Client[]
}

function postClient(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function getClient(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function putClient(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function deleteClient(req: NextApiRequest, res: NextApiResponse<ResponseType>){}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>){
	switch(req.method){
		case "POST": {
			postClient(req,res)
			break;
		}
		case "PUT": {
			putClient(req,res)
			break;
		}
		case "GET": {
			getClient(req,res)
			break;
		}
		case "DELETE": {
			deleteClient(req,res);
			break;
		}
		default: {
			res.status(418).send({message: "No such method", content: []})
		}

	}
}