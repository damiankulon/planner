import { EventStoreDBClient } from '@eventstore/db-client';
import { Application } from 'express';
import { getApplication, startAPI } from '@event-driven-io/emmett-expressjs';
import { getEventStoreDBEventStore } from '@event-driven-io/emmett-esdb';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const eventStoreDBClient = EventStoreDBClient.connectionString(
  `esdb://localhost:2113?tls=false`
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const eventStore = getEventStoreDBEventStore(eventStoreDBClient);

const application: Application = getApplication({
  apis: []
});

startAPI(application, {
  port
});
