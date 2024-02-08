import z from "zod";

const envSchema = z.object({
    SITE_URL: z.string().trim().min(1).url(),
    GOOGLE_CLIENT_ID: z.string().trim().min(1),
    GOOGLE_CLIENT_SECRET: z.string().trim().min(1),
    NEXTAUTH_URL: z.string().trim().min(1).url(),
    NEXTAUTH_SECRET: z.string().trim().min(1),
    PORT: z.number().default(3000),
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    DATABASE_URL: z.string().trim().min(1),
});

const envServer = envSchema.safeParse({
    SITE_URL: process.env.SITE_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
});

if (!envServer.success) {
    // eslint-disable-next-line no-console
    console.error(envServer.error.issues);
    throw new Error("There is an error with the server environment variables");
    // eslint-disable-next-line no-unreachable, unicorn/no-process-exit
    process.exit(1);
}

export const envServerSchema = envServer.data;
export type EnvSchemaType = z.infer<typeof envSchema>;
