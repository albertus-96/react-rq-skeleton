import { axios } from 'app/services';
import { IAddress, ICompany, IUser } from 'interfaces/User';

//api for get al user
export const getAllUser = async (): Promise<IUser[]> => {
	const { data } = await axios.get(`/users`);
	const response = Array.isArray(data) ? data : [];
	return response.map((val: any) => {
		return new IUser(
			val.id,
			val.name,
			val.username,
			val.email,
			new IAddress(val.address.street, val.address.suite, val.address.city, val.address.zipcode, {
				lat: val.address.geo.lat,
				lng: val.address.geo.lng,
			}),
			val.phone,
			val.website,
			new ICompany(val.company.name, val.company.catchPhrase, val.company.bs)
		);
	});
};
