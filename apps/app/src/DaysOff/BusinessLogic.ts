import { Command } from '@event-driven-io/emmett';

export type DaysOffEvent =
  {
    type: 'AddNewDays';
    data: {
      userId: string;
      amount: number;
    };
  }
  | {
  type: 'moveLeaveFromPreviousCompany';
  data: {
    userId: string;
    amount: number;
  };
}
  | {
  type: 'AddedToTotalAmountOfLeave';
  data: {
    userId: string;
    amount: number;
  };
}
  | {
  type: 'RemovedFromTotalAmountOfLeave';
  data: {
    userId: string;
    amount: number;
  };
}

  | {
  type: 'ExchangeAmountOfLeave';
  data: {
    userId: string;
    amount: number;
  };
};


export type AddNewDaysToUserBalance = Command<
  'AddNewDaysToUserBalance',
  {
    userId: string;
    amount: number;
  }
>;
