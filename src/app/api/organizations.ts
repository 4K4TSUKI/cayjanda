import { NextApiRequest, NextApiResponse } from "next";
import { Organization } from "@/types";

type ResponseType = {
	message: string
	content: Organization[]
}

function postOrganization(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function getOrganization(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function putOrganization(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function deleteOrganization(req: NextApiRequest, res: NextApiResponse<ResponseType>){}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>){
	switch(req.method){
		case "POST": {
			postOrganization(req,res)
			break;
		}
		case "PUT": {
			putOrganization(req,res)
			break;
		}
		case "GET": {
			getOrganization(req,res)
			break;
		}
		case "DELETE": {
			deleteOrganization(req,res);
			break;
		}
		default: {
			res.status(418).send({message: "No such method", content: []})
		}

	}
}