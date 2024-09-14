import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

const getUser = async (email: string) => {
	try {
		// Make the connection to either NodeJS server or directly to MongoDB Database
	} catch (err) {
		// Err handling
	}
};

export const { auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = z
					.object({ email: z.string().email(), password: z.string().min(6) })
					.safeParse(credentials);
			},
		}),
	],
});
