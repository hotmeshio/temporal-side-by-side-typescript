import { Client as PostgresClient } from 'pg';

/**
 * The connection configuration for the Postgres DB used by
 * HotMesh, MeshFlow and Temporal.
 * 
 * NOTE: This Postgres database is part of Temporal's
 * default Docker Compose setup. I'm reusing the DB
 * to avoid setting up a separate one for the demo AND
 * to demonstrate that HotMesh behaves like a typical
 * Temporal client/worker, but it doesn't require a separate
 * Temporal App server to run.
 */
export const connection = {
  class: PostgresClient,
  options: {
    connectionString: 'postgresql://temporal:temporal@postgresql:5432/hotmesh'
  }
};