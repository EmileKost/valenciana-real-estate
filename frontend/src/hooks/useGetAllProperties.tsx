import { useQuery } from "@tanstack/react-query";

export const useGetAllProperties = () => {
	const getAllProperties = async () => {
		const response = await fetch("http://localhost:4500/properties");
		const result = await response.json();

		return result;
	};

	const data = useQuery({
		queryKey: ["allProperties"],
		queryFn: getAllProperties,
	});

	return data;
};
