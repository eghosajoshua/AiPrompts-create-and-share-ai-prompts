import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectDb } from "@/utils/db";
import { User } from "@/models/user";
import { Prompt } from "@/models/prompt";

console.log({
  clientId: process.env.GOOGLE_CLIENT_ID || "not found",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || "not fo",
});
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session?.user.email });
      if (session.user) {
        session.user.id = sessionUser._id.toString();
      }
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectDb();
        //check if a user exist
        const userExist = await User.findOne({ email: profile?.email });

        if (!userExist) {
          await User.create({
            email: profile?.email,
            username: profile?.name,
            image: profile?.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
