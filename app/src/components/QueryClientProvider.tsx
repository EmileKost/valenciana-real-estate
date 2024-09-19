"use client";

import { useState, ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const ReactQueryClientProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [client] = useState(() => new QueryClient()); // Later add options

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
