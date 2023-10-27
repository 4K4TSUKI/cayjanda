
function fetc_token(url: string, token: string, options: any){
	return fetch(url,{
		...options,
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	});
}