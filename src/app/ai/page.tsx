"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ChatCompletionMessage } from "openai/resources/index.mjs";

const formSchema = z.object({
  chatai: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function ProfileForm() {
  const [messages, setMessages] = useState<ChatCompletionMessage[]>([]);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      chatai: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("on submit working");
    try {
      const usermessage: ChatCompletionMessage = {
        role: "user",
        content: values.chatai,
      };
      const newMessages = [...messages, usermessage];
      const responce = await axios.post("/api/conversation", {
        messages: newMessages,
      });
      setMessages((current) => [...current, usermessage, responce.data]);
      form.reset();
    } catch (error: any) {
      console.log(error);
    } finally {
      router.refresh();
    }
  }
  // ...

  return (
    <>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="chatai"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ai Chat</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public Ai name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      <div>
        {messages.map((msg) => {
          return <div key={msg.content}>{msg.content}</div>;
        })}
      </div>
    </>
  );
}
