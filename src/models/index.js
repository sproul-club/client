// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Clubs, RecruitingSeason, Branch } = initSchema(schema);

export {
  Clubs,
  RecruitingSeason,
  Branch
};