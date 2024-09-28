"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { AuthCard } from "./auth-cards";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/types/register-schema";
import * as z from "zod";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { useAction } from "next-safe-action/hooks";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { emailRegister } from "@/server/actions/email-register";
import { FormSuccess } from "./form-success";
import { FormError } from "./form-error";

export const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { email: "", password: "" ,name:""},
  });

  const tempsee=()=>{
    setTemp("temp")
  }
  const [error, setError] = useState("");
  const [success,setSuccess]=useState("")
  const [temp,setTemp]=useState("")
  const { execute, status } = useAction(emailRegister, {
    onSuccess: (data) => {
      if(data.data!.success) setSuccess(data.data!.success)
      console.log(data.data, "data");
    },
    onError: (error) => {
      if(error.error) setError(error.error as string)

      console.log(error, "error");
      // setError(error);

  }});

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    console.log(values, "values");
    console.log("submitting");
    execute(values);
  };

  return (
    <AuthCard
      cardTitle="Create an Account 🎊"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account?"
      showSocials
    >
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} >
            <div>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Username </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Username"
                        type="text"
                        autoComplete="name"
                      ></Input>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Email </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter Your Email"
                        type="email"
                        autoComplete="email"
                      ></Input>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter Your Password"
                        type="password"
                        autoComplete="current-password"
                      ></Input>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormSuccess success={success}/>
              <FormError error={error}/>
              <Button size={"sm"} variant={"link"} asChild>
                <Link href={"/auth/reset"}>Forgot Your Password?</Link>
              </Button>
            </div>
            <Button
              type="submit"
              className={cn(
                "w-full",
                status === "executing" ? "animate-pulse" : ""
              )}
            >
              Register
            </Button>
          </form>
        </Form>
      </div>
    </AuthCard>
  );
};
