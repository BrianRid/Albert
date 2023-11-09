import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

export const flatRouter = createTRPCRouter({
  getList: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const flats = await db.flat.findMany({
        where: { userId: input.id },
      });
      return {
        data: flats,
      };
    }),
});
