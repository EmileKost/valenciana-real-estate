import type { NextAuthConfig } from "next-auth";

export const authConfig = {
	pages: {
		signIn: "/login",
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user; // Check if user is logged in
			const isOnDashboard = nextUrl.pathname.startsWith("/dashboard"); // Check only for the protected /dashboard route

			if (isOnDashboard) {
				if (isLoggedIn) return true;

				return false;
			} else if (isLoggedIn) {
				return Response.redirect(new URL("/dashboard", nextUrl));
			}
			return true;
		},
	},
	providers: [],
} satisfies NextAuthConfig;
