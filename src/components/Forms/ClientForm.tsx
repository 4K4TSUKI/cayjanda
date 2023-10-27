"use client"

import { Client } from "@/types"
import { Input } from "@nextui-org/input";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import {Switch} from "@nextui-org/switch";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react"
import { OrganizationForm } from "./OrganizationForm";

const ClientForm = ({client, onClientChange}: {client?: Client, onClientChange: (client: Client) => void}) => {
	const [currentClient, setCurrentClient] = useState(client ? client : {} as Client);
	const [isNewCompany, setIsNewCompany] = useState(false);
	function updateClient(client: Client){
		setCurrentClient(client);
		onClientChange(client);
	}
	return <>
	
		<div className="grid gap-4 grid-cols-2 my-2">
			<Input type="text" placeholder="İsim" isClearable onValueChange={name => updateClient({...currentClient, name})}/>
			<Input type="text" placeholder="Soyisim" isClearable onValueChange={surname => updateClient({...currentClient, surname})}/>
		</div>
		<div className="grid gap-4 grid-cols-2 my-2">
			<Input type="text" placeholder="E posta" isClearable onValueChange={name => updateClient({...currentClient, name})}/>
			<Input type="phone" placeholder="5xxxxxxxxx" isClearable onValueChange={name => updateClient({...currentClient, name})}/>
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
					<OrganizationForm  onChange={(org) => {updateClient({...currentClient,organization: org})}}/>
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
		<button onClick={e => console.log(currentClient)}>Kaydet</button>
	</>
}

export {ClientForm}