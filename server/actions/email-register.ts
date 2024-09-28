"use server";
import { RegisterSchema } from "@/types/register-schema";
import { createSafeActionClient } from "next-safe-action";
import bcrypt from "bcrypt";
import { users } from "../schema";
import { db } from "..";
import { eq } from "drizzle-orm";
import { generateEmailVerificationToken } from "./tokens";
import { sendVerificationEmail } from "./email";

const action = createSafeActionClient();

export const emailRegister = action
  .schema(RegisterSchema)
  .action(async ({ parsedInput }) => {
    const hasedPassword = await bcrypt.hash(parsedInput.password, 10);
    
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, parsedInput.email),
    });

    if (existingUser) {
      if(!existingUser.emailVerified){ 2
          const verificationToken=await generateEmailVerificationToken(parsedInput.email)
          await sendVerificationEmail(verificationToken[0].email,verificationToken[0].token)
          return {success:"Email verification Resent"}
      }
      return { error: "User already exists" };
    }


    await db.insert(users).values({
        email: parsedInput.email,
        name: parsedInput.name,
        password: hasedPassword,
    })
    const verificationToken=await generateEmailVerificationToken(parsedInput.email)
    await sendVerificationEmail(verificationToken[0].email,verificationToken[0].token)
    
    return { success: "Confirmation Email Sent" };
  });
