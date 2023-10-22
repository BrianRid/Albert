import { db } from "~/server/db";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  me: publicProcedure.query(async ({ ctx }) => {
    if (!ctx.session) return null;
    return await db.user.findFirst({
      where: { id: ctx.session.user.id },
    });
  }),
});
