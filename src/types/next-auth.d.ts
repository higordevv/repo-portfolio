import NextAuth from "next-auth";
import type { User } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
