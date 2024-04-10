import type { Event } from '@event-driven-io/emmett';


export const toUserStreamId = (userId: string) =>
  `balance-${userId}`;
