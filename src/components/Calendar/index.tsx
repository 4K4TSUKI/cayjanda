import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

const Calendar = () => {
	const days = ["Pts","Sal","Çar","Prş","Cum","Cts","Pzr"]
	return <>
		<Card className=" bg-primary max-w-[400px]">
			<CardHeader className="flex gap-3">
				<span className="text-2xl">Calendar</span>
			</CardHeader>
			<CardBody>

				<div className="grid grid-cols-7 gap-3">
					{days.map((el) => (<span className="text-center">{el}</span>))}
				</div>
				<div className="grid grid-cols-7 gap-3">
					{Array.from({length: 28},(_,i) => i).map((el) => (<span className="text-center">{el}</span>))}
				</div>
			</CardBody>
    </Card>

	</>
}

export { Calendar }