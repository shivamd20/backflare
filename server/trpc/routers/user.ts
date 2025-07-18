import { createRouter, publicProcedure } from '../trpc';
import { UserProfileUpdateSchema, TokenRevokeSchema, UserEventSchema } from '@/schemas/user';
import { getSessionUser } from '@/lib/auth';
import { getUserTokens, insertUserEvent } from '@/lib/db';

export const userRouter = createRouter({
  me: publicProcedure.query(async ({ ctx }) => {
    return await getSessionUser(ctx.req);
  }),
  updateProfile: publicProcedure.input(UserProfileUpdateSchema).mutation(async ({ ctx, input }) => {
    // Implement update logic here
  }),
  getTokens: publicProcedure.query(async ({ ctx }) => {
    const user = await getSessionUser(ctx.req);
    if (!user) return [];
    return await getUserTokens(ctx.db, user.id);
  }),
  revokeToken: publicProcedure.input(TokenRevokeSchema).mutation(async ({ ctx, input }) => {
    // Implement revoke logic here (soft delete)
  }),
  logEvent: publicProcedure.input(UserEventSchema).mutation(async ({ ctx, input }) => {
    const user = await getSessionUser(ctx.req);
    const event = { id: crypto.randomUUID(), userId: user?.id, ...input };
    return await insertUserEvent(ctx.db, event);
  }),
});