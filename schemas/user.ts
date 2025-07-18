import { z } from 'zod';

export const UserProfileUpdateSchema = z.object({
  name: z.string().optional(),
  image: z.string().optional(),
});

export const TokenRevokeSchema = z.object({
  tokenId: z.string(),
});

export const UserEventSchema = z.object({
  eventType: z.string(),
  eventData: z.record(z.unknown()),
});