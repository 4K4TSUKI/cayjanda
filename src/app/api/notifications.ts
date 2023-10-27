import { NextApiRequest, NextApiResponse } from "next";
import { Notification } from "@/types";

type ResponseType = {
	message: string
	content: Notification[]
}

function postNotification(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function getNotification(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function putNotification(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function deleteNotification(req: NextApiRequest, res: NextApiResponse<ResponseType>){}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>){
	switch(req.method){
		case "POST": {
			postNotification(req,res)
			break;
		}
		case "PUT": {
			putNotification(req,res)
			break;
		}
		case "GET": {
			getNotification(req,res)
			break;
		}
		case "DELETE": {
			deleteNotification(req,res);
			break;
		}
		default: {
			res.status(418).send({message: "No such method", content: []})
		}

	}
}