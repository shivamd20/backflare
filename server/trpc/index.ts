import { createRouter } from './trpc';
import { userRouter } from './routers/user';

export const appRouter = createRouter({
  user: userRouter,
});

export type AppRouter = typeof appRouter;