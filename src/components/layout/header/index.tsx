import { Avatar } from "@nextui-org/avatar"
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { InboxIcon, MagnifyingGlassIcon, SunIcon, MoonIcon } from "@heroicons/react/20/solid";

const Header = () => {

	const inputStyle = {
		label: "text-black/50 dark:text-white/90",
		input: [
		  "bg-transparent",
		  "text-black/90 dark:text-white/90",
		  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
		],
		innerWrapper: "bg-transparent",
		inputWrapper: [
		  "shadow-xl",
		  "bg-default-200/50",
		  "dark:bg-default/60",
		  "backdrop-blur-xl",
		  "backdrop-saturate-200",
		  "hover:bg-default-200/70",
		  "dark:hover:bg-default/70",
		  "group-data-[focused=true]:bg-default-200/50",
		  "dark:group-data-[focused=true]:bg-default/60",
		  "!cursor-text",
		],
	  }

	return <div className="border-b-1 border-gray-500 flex gap-3 shadow-xl flex-row-reverse divide-x-reverse divide-x py-2 px-4">
		<div className="flex gap-4 flex-row items-center">
			<Button isIconOnly size="sm" >T</Button>
			<Button isIconOnly size="sm" className="bg-transparent text-gray-400 border border-gray-400 hover:border-gray-900 hover:text-gray-900 dark:hover:border-gray-200 dark:hover:text-gray-200">
				<InboxIcon className="h-5 w-5"/>
			</Button>
			<Avatar isBordered radius="full" size="sm" color="default" className="text-gray-200" name="EM" />
		</div>
		<div className="px-2">
			<Input type="text" isClearable placeholder="Ara:" classNames={inputStyle} startContent={
				<MagnifyingGlassIcon className="h-5 w-5" />
			}  />
		</div>
		

	</div>
}

export {Header};