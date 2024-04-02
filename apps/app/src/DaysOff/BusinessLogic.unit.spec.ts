/* eslint-disable @typescript-eslint/no-floating-promises */
import { DeciderSpecification } from '@event-driven-io/emmett';
import { randomUUID } from 'node:crypto';
import { describe, it } from 'node:test';

const given = DeciderSpecification.for({
  decide,
  evolve,
  initialState: getInitialState,
});

describe('DayOff', () => {
  describe('When empty user balance', () => {
    it('Should rejected', () => {
      given({
        type: 'UserRequestedDayOff',
        data: {
          userId: userId,
          amount:1,
          addedAt: oldTime,
        },
      }).when({})
    })
  });
});

const oldTime = new Date();
const now = new Date();
const userId = randomUUID();
