import { Organization } from "@/types";
import { Input } from "@nextui-org/input";
import { Dispatch, SetStateAction, useState } from "react";

const OrganizationForm = ({organization, onChange}: {organization?: Organization, onChange:  (org: Organization) => void}) => {
	const [org, setOrg] = useState(organization ? organization : {} as Organization);

	return <>
		<Input type="text" isClearable placeholder="Kurum Adı" value={organization?.name} onValueChange={(value)=> {
			setOrg({...org, name: value})
			onChange(org)
		}}/>
		<Input type="text" isClearable placeholder="Kurum E posta adresi" value={organization?.email}/>
		<Input type="text" isClearable placeholder="Kurum Adı" value={organization?.phone}/>
		<Input type="text" isClearable placeholder="Kurum Adı" value={organization?.address}/>
	</>
}

export {OrganizationForm}