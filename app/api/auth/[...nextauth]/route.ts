
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import type { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prismaDB } from "@/lib/connection";


export const authOptions: NextAuthOptions = ({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],
  adapter: PrismaAdapter(prismaDB),
})

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }