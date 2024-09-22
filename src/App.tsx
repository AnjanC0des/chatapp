"use client";

import "./App.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card } from "./components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Googlelogo from "./assets/googlelogo.svg"
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z
    .string()
    .min(5, { message: "Password is too short." })
    .max(10, { message: "Password is too long." }),
});

export default function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <Card className="dark border border-slate-600 rounded-md p-2 space-y-2">
      <div className="bg-blue-500 rounded-md text-white p-4">Login</div>
      <button className="flex border border-blue-500 justify-center content-center rounded-md p-4 w-full">
      <img src="src/assets/googlelogo.svg" width="25" height="25"/>
      </button>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Card>
    </>
  );
}
