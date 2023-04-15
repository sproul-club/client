// Club has a one-to-many relationship w/ Member

import Event from '../Event';
import Branch from './Branch';
import RecruitingSeason from './RecruitingSeason';

export interface Club {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  profilePhoto: string;
  headingPhoto: string;
  isApplicationOpen: boolean;
  isApplicationRequired: boolean;
  categories: string[];
  events: Event['id'][];
  recruitingSeasons: RecruitingSeason['id'][];
  numMembers: number;

  // Time-related
  yearFounded: string;
  branches: Branch[];
}

export default Club;
