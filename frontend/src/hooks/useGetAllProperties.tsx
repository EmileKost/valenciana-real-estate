import { useState, useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

const options = {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
	},
	Authorization: {
		"x-api-key": "fake-api-key",
	},
};

export const useGetAllProperties = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	const fetchAllProperties = async (url: string) => {
		try {
			const response = await fetch(url, options);
			const result = await response.json();

			console.log({ result });
			return result;
		} catch (err) {
			console.log({ err });
		}
	};

	// Setting up Query
	const data = useQuery({
		queryKey: ["allProperties"],
		queryFn: () => fetchAllProperties,
	});

	console.log({ data });

	return { data, isLoading, isError };
};
