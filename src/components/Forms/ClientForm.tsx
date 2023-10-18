"use client"

import { Client } from "@/types"
import { Input } from "@nextui-org/input";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import {Switch} from "@nextui-org/switch";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react"
import { OrganizationForm } from "./OrganizationForm";

const ClientForm = ({client, setClient}: {client: Client, setClient: Dispatch<SetStateAction<Client>>}) => {
	const [currentClient, setCurrentClient] = useState(client);
	const [isNewCompany, setIsNewCompany] = useState(false)
	return <>
	
		<div className="grid gap-4 grid-cols-2 my-2">
			<Input type="text" placeholder="İsim" isClearable onValueChange={name => setCurrentClient({...currentClient, name})}/>
			<Input type="text" placeholder="Soyisim" isClearable onValueChange={surname => setCurrentClient({...currentClient, surname})}/>
		</div>
		<div className="grid gap-4 grid-cols-2 my-2">
			<Input type="text" placeholder="E posta" isClearable onValueChange={name => setCurrentClient({...currentClient, name})}/>
			<Input type="phone" placeholder="5xxxxxxxxx" isClearable onValueChange={name => setCurrentClient({...currentClient, name})}/>
		</div>
		<Switch color="primary" onChange={e=> setIsNewCompany(!isNewCompany)}>
			Yeni Ekle
		</Switch>
		
		{isNewCompany ? (
			<>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.5,
						delay: 0.3,
						ease: [0, 0.71, 0.2, 1.01]
					}}
				>
					<OrganizationForm  onChange={(org) => {setCurrentClient({...currentClient,organization: org})}}/>
				</motion.div>
			</>
		): (
			
			<motion.div
  			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.5,
				delay: 0.2,
				ease: [0, 0.71, 0.2, 1.01]
			}}
		>
			<Select placeholder="Kurum">
				<SelectItem key={1} value={"Karaambar kamyoncular derneği"}>
					Karaambar kamyoncular derneği
				</SelectItem>
			</Select>

		</motion.div>
		)}
	</>
}

export {ClientForm}