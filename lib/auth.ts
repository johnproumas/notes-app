import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle";
import { schema } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";
import VerificationEmail from "@/components/emails/verification-email";
import ResetPasswordEmail from "@/components/emails/reset-password-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url}, request) => {
      const { data, error } = await resend.emails.send({
        from: "NoteTaker <onboarding@resend.dev>",
        to: user.email,
        subject: "Reset your password",
        react: ResetPasswordEmail({
          userName: user.name,
          resetPasswordUrl: url,
        }),
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }
  },
  emailVerification: {
    sendVerificationEmail: async (
      { user, url, token },
      request
    ) => {
      const { data, error } = await resend.emails.send({
        from: "NoteTaker <onboarding@resend.dev>",
        to: user.email,
        subject: "Verify your email address",
        react: VerificationEmail({
          userName: user.name,
          verificationUrl: url,
        }),
      });
    },
    sendOnSignUp: true,
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  plugins: [nextCookies()],
});
