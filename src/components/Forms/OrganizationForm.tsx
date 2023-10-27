import { Organization } from "@/types";
import { Input } from "@nextui-org/input";
import { Dispatch, SetStateAction, useState } from "react";

const OrganizationForm = ({organization, onChange}: {organization?: Organization, onChange:  (org: Organization) => void}) => {
	const [org, setOrg] = useState(organization ? organization : {} as Organization);
	function updateOrg(organization: Organization){
		setOrg(organization)
		onChange(organization);
	}
	return <>
		<Input type="text" className="my-2" isClearable placeholder="Kurum Adı" value={organization?.name} onValueChange={(value)=> updateOrg({...org, name: value})}/>
		<Input type="text" className="my-2" isClearable placeholder="Kurum Telefon Numarası" value={organization?.phone} onValueChange={(value)=> updateOrg({...org, phone: value})}/>
		<Input type="text" className="my-2" isClearable placeholder="Kurum E posta adresi" value={organization?.email} onValueChange={(value)=> updateOrg({...org, email: value})}/>
		<Input type="text" className="my-2" isClearable placeholder="Adres" value={organization?.address} onValueChange={(value)=> updateOrg({...org, address: value})}/>
	</>
}

export {OrganizationForm}