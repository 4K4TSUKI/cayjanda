"use client"
import Image from 'next/image'
import { Calendar } from '@/components/Calendar'
import { useState } from 'react'
import { ClientForm } from '@/components/Forms/ClientForm'
import { Client } from '@/types';
export default function Home() {
	const [client, setClient]: [Client, any] = useState({} as Client);
	const events = [
		{id: "1",date:new Date()},
		{id: "1",date:new Date(2023,10,2)},
		{id: "1",date:new Date(2023,10,5)},
		{id: "1",date:new Date(2023,9,30)},
		{id: "1",date:new Date(2023,10,30)}
	]
  return (
	<main className="min-h-screen p-24">
		
		<Calendar eventDates={events} />

		<ClientForm client={client} onClientChange={setClient}/>
	</main>
  )
}
