import Image from 'next/image'
import { Calendar } from '@/components/Calendar'
export default function Home() {
  return (
	<main className="min-h-screen p-24">
		
		<Calendar />
	</main>
  )
}
