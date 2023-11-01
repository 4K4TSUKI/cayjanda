import { Event } from "@/types";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { useState } from "react";


function getDaysOfMonth(firstOfMounth: Date): Date[]{
	let dates: Date[] = []
		for (let day = 0; day < 42; day++){
			if (day === 0 && firstOfMounth.getDay() === 0)
				firstOfMounth.setDate(firstOfMounth.getDate() - 7);
			else if (day === 0)
				firstOfMounth.setDate(firstOfMounth.getDate() + (day - firstOfMounth.getDay()));
			else
				firstOfMounth.setDate(firstOfMounth.getDate() + 1)
			dates.push(new Date(firstOfMounth));
		}
	return dates;
}

function findDayBetween(date_prev: Date, date_next: Date): number {
	let diffTime = date_prev.getTime() - date_next.getTime();
	let diffDays = Math.ceil(diffTime / ((1000 * 60 * 60 * 24)));
	return diffDays;
}

const Calendar = ({eventDates}: {eventDates?: Event[]}) => {
	const [currentDate , _] = useState(new Date());
	const firstOfMounth = new Date(currentDate.getFullYear(),currentDate.getMonth(),1);
	const [searchDate, setSearchDate] = useState(new Date(firstOfMounth));
	const days = ["Pzr","Pts","Sal","Çar","Prş","Cum","Cts"];
	const months = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
	return <>
		<Card className=" bg-default max-w-[400px]">
			<CardHeader className="flex justify-between gap-3">
				<button onClick={e => setSearchDate(new Date(searchDate.getFullYear(),searchDate.getMonth() - 2, 1))}>&lt;</button>
				<div className="flex flex-row items-end gap-3 w-full">
					<span className="text-2xl">{searchDate.getFullYear()}</span>
					<span>{months[searchDate.getMonth()]}</span>
				</div>
				<button onClick={e => setSearchDate(new Date(searchDate.getFullYear(),searchDate.getMonth() , 1))}>&gt;</button>
			</CardHeader>
			<CardBody>

				<div className="grid grid-cols-7 gap-3">
					{days.map((el) => (<span key={Math.random()} className="text-center">{el}</span>))}
				</div>
				<div className="grid grid-cols-7 gap-3">
					{getDaysOfMonth(searchDate).map(day => {
						let cls = "text-center ";
						if (day.getMonth() != currentDate.getMonth())
							cls += "text-slate-400 ";
						if (eventDates != undefined)
							eventDates.forEach(event => {
								if (event.date.toDateString() === day.toDateString()){
									if (findDayBetween(event.date, currentDate) < 0)
									{
										console.log(event.date);
										cls += "bg-gray-600 "
									}
									else if (findDayBetween(event.date,currentDate) <= 3)
										cls += "bg-danger ";
									else if (findDayBetween(event.date,currentDate) <= 7)
										cls += "bg-warning ";
									else
										cls += "bg-primary ";
									cls += "rounded-md";
								}
						})
						return <span key={Math.random()} className={cls}>{day.getDate()}</span>
					})}
				</div>
			</CardBody>
    </Card>

	</>
}

export { Calendar }