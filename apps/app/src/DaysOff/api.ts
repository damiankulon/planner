import {
  assertNotEmptyString,
  assertPositiveNumber,
  CommandHandler,
  type EventStore,
} from '@event-driven-io/emmett';

export const handle = CommandHandler(evolve, getInitialState);
