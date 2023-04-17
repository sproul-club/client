// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Events, Clubs, EventsClubs, RecruitingSeason, Branch } = initSchema(schema);

export {
  Events,
  Clubs,
  EventsClubs,
  RecruitingSeason,
  Branch
};