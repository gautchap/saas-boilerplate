"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { DynamicIcon } from "@/components/ui/icons";
import { EnvelopeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { Dispatch, SetStateAction } from "react";

const FormSchema = z.object({
    email: z.string().min(1, "Email must be not empty").email(),
});

type FormType = z.infer<typeof FormSchema>;

type LoginFormProps = {
    providers: string[];
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export function LoginForm({ providers, setOpen }: LoginFormProps) {
    const { toast } = useToast();
    const form = useForm<FormType>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (value: FormType) => {
        try {
            await signIn("email", {
                email: value.email,
                redirect: false,
                callbackUrl: "/",
            });
            toast({
                title: "Email sent ! 📧✅",
                description: "Check your email for the sign in link.",
            });
            setOpen(false);
        } catch {
            toast({
                title: "Error ! 📧❌",
                description: "Something went wrong, please try again later.",
            });
        }
    };

    return (
        <>
            <div className="grid gap-4">
                {providers.map((provider: string) => (
                    <Button
                        key={provider}
                        className="mx-auto w-full max-w-[15rem]"
                        variant="outline"
                        onClick={() => signIn(provider)}
                    >
                        <DynamicIcon name={provider} className="mr-2 size-4" />
                        {provider.charAt(0).toUpperCase() + provider.slice(1)}
                    </Button>
                ))}

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="grid gap-2">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            required
                                            className="grid gap-2"
                                            placeholder="m.@example.com"
                                            type="email"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full" disabled={form.formState.isSubmitting} type="submit">
                            {form.formState.isSubmitting && <ReloadIcon className="mr-2 size-4 animate-spin" />}
                            <EnvelopeOpenIcon className="mr-2 size-4" /> Get my magic link
                        </Button>
                    </form>
                </Form>
            </div>
        </>
    );
}
