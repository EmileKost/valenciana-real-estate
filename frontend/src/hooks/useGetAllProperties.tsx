import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { ROUTES } from "@/constants/routes";

export const useGetAllProperties = () => {
	const getAllProperties = async () => {
		try {
			const response = await axios.get(
				`${ROUTES.API.BASE}${ROUTES.API.ALL_PROPERTIES}`
			);
			return response.data;
		} catch (err) {
			console.log(err);
			throw err;
		}
	};

	return useQuery({
		queryKey: ["allProperties"],
		queryFn: getAllProperties,
	});
};
