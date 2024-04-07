export type EmployeesEvent =
  {
    type: 'HiredNewEmployee';
    data: {
      name: string;
      surname: string;
    };
  }
  | {
  type: 'employeeWasFired';
  data: {
    name: string;
    surname: string;
  };
};
