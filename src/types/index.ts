interface Team {
	name: string
	members: User[]
}

interface User {
	name: string
	surname: string
	email: string
	team: Team
	googleToken: string
}

interface UserToken {
	user: User
	token: string
}

interface Organization {
	id: string
	name: string
	phone: string
	email: string
	address: string
	geoMap: {lat: number, lng: number}
}

interface Client {
	id: string
	name: string
	surname: string
	phone: string
	email: string
	organization: Organization
}

interface Product {
	id: string
	name: string
	description: string
	unitPrice: number
}

interface SelledProduct {
	id: string
	product: Product
	client: Client
	amount: number
	recieved: number
}

interface Event {
	id: string
	client?: Client
	address?: string
	geoMap?: {lat: number, lng: number}
	date: Date
	description?: string
}

interface Notification {
	id: string
	title: string
	description: string
	from: string
}

export type {Organization, Client, Product, SelledProduct, Event, Notification}