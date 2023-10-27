import { NextApiRequest, NextApiResponse } from "next";
import { Meeting } from "@/types";

type ResponseType = {
	message: string
	content: Meeting[]
}

function postMeeting(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function getMeeting(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function putMeeting(req: NextApiRequest, res: NextApiResponse<ResponseType>){}
function deleteMeeting(req: NextApiRequest, res: NextApiResponse<ResponseType>){}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>){
	switch(req.method){
		case "POST": {
			postMeeting(req,res)
			break;
		}
		case "PUT": {
			putMeeting(req,res)
			break;
		}
		case "GET": {
			getMeeting(req,res)
			break;
		}
		case "DELETE": {
			deleteMeeting(req,res);
			break;
		}
		default: {
			res.status(418).send({message: "No such method", content: []})
		}

	}
}