import { betterAuth } from "better-auth";

export const auth = betterAuth({
    // ডিফল্ট হিসেবে ইমেইল পাসওয়ার্ড দেওয়া হলো
    emailAndPassword: {
        enabled: true,
    },
    // সোশ্যাল প্রভাইডার লাগলে এখানে আনকমেন্ট করো
    // socialProviders: {
    //    google: {
    //        clientId: process.env.GOOGLE_CLIENT_ID as string,
    //        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    //    },
    // },
    
    // মনে রেখো: Better Auth এর জন্য ডাটাবেস এডাপ্টার লাগে (Prisma/Drizzle)
    // database: prismaAdapter(prisma, { provider: "postgresql" }), 
});