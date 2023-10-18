"use client"
import Image from 'next/image'
import { Calendar } from '@/components/Calendar'
import { useState } from 'react'
import { ClientForm } from '@/components/Forms/ClientForm'
import { Client } from '@/types';
export default function Home() {
	const [client, setClient]: [Client, any] = useState({} as Client);
  return (
	<main className="min-h-screen p-24">
		
		<Calendar />

		<ClientForm client={client} setClient={setClient}/>
	</main>
  )
}
