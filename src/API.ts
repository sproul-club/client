/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventsInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  startTimeStamp?: string | null,
  endTimeStamp?: string | null,
  location?: string | null,
  meetingUrl?: string | null,
  _version?: number | null,
};

export type ModelEventsConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startTimeStamp?: ModelStringInput | null,
  endTimeStamp?: ModelStringInput | null,
  location?: ModelStringInput | null,
  meetingUrl?: ModelStringInput | null,
  and?: Array< ModelEventsConditionInput | null > | null,
  or?: Array< ModelEventsConditionInput | null > | null,
  not?: ModelEventsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Events = {
  __typename: "Events",
  id: string,
  name?: string | null,
  description?: string | null,
  startTimeStamp?: string | null,
  endTimeStamp?: string | null,
  location?: string | null,
  meetingUrl?: string | null,
  clubs?: ModelEventsClubsConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelEventsClubsConnection = {
  __typename: "ModelEventsClubsConnection",
  items:  Array<EventsClubs | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type EventsClubs = {
  __typename: "EventsClubs",
  id: string,
  eventsId: string,
  clubsId: string,
  events: Events,
  clubs: Clubs,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Clubs = {
  __typename: "Clubs",
  id: string,
  name?: string | null,
  abbreviation?: string | null,
  description?: string | null,
  profilePhoto?: string | null,
  headingPhoto?: string | null,
  isApplicationOpen?: boolean | null,
  isApplicationRequired?: boolean | null,
  categories?: Array< string | null > | null,
  numMembers?: number | null,
  yearFounded?: string | null,
  branches?:  Array<Branch | null > | null,
  website?: string | null,
  instagram?: string | null,
  linkedin?: string | null,
  facebook?: string | null,
  twitter?: string | null,
  discord?: string | null,
  email?: string | null,
  recruitingSeasons?: RecruitingSeason | null,
  Events?: ModelEventsClubsConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Branch = {
  __typename: "Branch",
  title?: string | null,
  description?: string | null,
};

export type RecruitingSeason = {
  __typename: "RecruitingSeason",
  isActive?: boolean | null,
  startTimestamp?: string | null,
  endTimestamp?: string | null,
};

export type UpdateEventsInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  startTimeStamp?: string | null,
  endTimeStamp?: string | null,
  location?: string | null,
  meetingUrl?: string | null,
  _version?: number | null,
};

export type DeleteEventsInput = {
  id: string,
  _version?: number | null,
};

export type CreateClubsInput = {
  id?: string | null,
  name?: string | null,
  abbreviation?: string | null,
  description?: string | null,
  profilePhoto?: string | null,
  headingPhoto?: string | null,
  isApplicationOpen?: boolean | null,
  isApplicationRequired?: boolean | null,
  categories?: Array< string | null > | null,
  numMembers?: number | null,
  yearFounded?: string | null,
  branches?: Array< BranchInput | null > | null,
  website?: string | null,
  instagram?: string | null,
  linkedin?: string | null,
  facebook?: string | null,
  twitter?: string | null,
  discord?: string | null,
  email?: string | null,
  recruitingSeasons?: RecruitingSeasonInput | null,
  _version?: number | null,
};

export type BranchInput = {
  title?: string | null,
  description?: string | null,
};

export type RecruitingSeasonInput = {
  isActive?: boolean | null,
  startTimestamp?: string | null,
  endTimestamp?: string | null,
};

export type ModelClubsConditionInput = {
  name?: ModelStringInput | null,
  abbreviation?: ModelStringInput | null,
  description?: ModelStringInput | null,
  profilePhoto?: ModelStringInput | null,
  headingPhoto?: ModelStringInput | null,
  isApplicationOpen?: ModelBooleanInput | null,
  isApplicationRequired?: ModelBooleanInput | null,
  categories?: ModelStringInput | null,
  numMembers?: ModelIntInput | null,
  yearFounded?: ModelStringInput | null,
  website?: ModelStringInput | null,
  instagram?: ModelStringInput | null,
  linkedin?: ModelStringInput | null,
  facebook?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  discord?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelClubsConditionInput | null > | null,
  or?: Array< ModelClubsConditionInput | null > | null,
  not?: ModelClubsConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateClubsInput = {
  id: string,
  name?: string | null,
  abbreviation?: string | null,
  description?: string | null,
  profilePhoto?: string | null,
  headingPhoto?: string | null,
  isApplicationOpen?: boolean | null,
  isApplicationRequired?: boolean | null,
  categories?: Array< string | null > | null,
  numMembers?: number | null,
  yearFounded?: string | null,
  branches?: Array< BranchInput | null > | null,
  website?: string | null,
  instagram?: string | null,
  linkedin?: string | null,
  facebook?: string | null,
  twitter?: string | null,
  discord?: string | null,
  email?: string | null,
  recruitingSeasons?: RecruitingSeasonInput | null,
  _version?: number | null,
};

export type DeleteClubsInput = {
  id: string,
  _version?: number | null,
};

export type CreateEventsClubsInput = {
  id?: string | null,
  eventsId: string,
  clubsId: string,
  _version?: number | null,
};

export type ModelEventsClubsConditionInput = {
  eventsId?: ModelIDInput | null,
  clubsId?: ModelIDInput | null,
  and?: Array< ModelEventsClubsConditionInput | null > | null,
  or?: Array< ModelEventsClubsConditionInput | null > | null,
  not?: ModelEventsClubsConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateEventsClubsInput = {
  id: string,
  eventsId?: string | null,
  clubsId?: string | null,
  _version?: number | null,
};

export type DeleteEventsClubsInput = {
  id: string,
  _version?: number | null,
};

export type ModelEventsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startTimeStamp?: ModelStringInput | null,
  endTimeStamp?: ModelStringInput | null,
  location?: ModelStringInput | null,
  meetingUrl?: ModelStringInput | null,
  and?: Array< ModelEventsFilterInput | null > | null,
  or?: Array< ModelEventsFilterInput | null > | null,
  not?: ModelEventsFilterInput | null,
};

export type ModelEventsConnection = {
  __typename: "ModelEventsConnection",
  items:  Array<Events | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelClubsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  abbreviation?: ModelStringInput | null,
  description?: ModelStringInput | null,
  profilePhoto?: ModelStringInput | null,
  headingPhoto?: ModelStringInput | null,
  isApplicationOpen?: ModelBooleanInput | null,
  isApplicationRequired?: ModelBooleanInput | null,
  categories?: ModelStringInput | null,
  numMembers?: ModelIntInput | null,
  yearFounded?: ModelStringInput | null,
  website?: ModelStringInput | null,
  instagram?: ModelStringInput | null,
  linkedin?: ModelStringInput | null,
  facebook?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  discord?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelClubsFilterInput | null > | null,
  or?: Array< ModelClubsFilterInput | null > | null,
  not?: ModelClubsFilterInput | null,
};

export type ModelClubsConnection = {
  __typename: "ModelClubsConnection",
  items:  Array<Clubs | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelEventsClubsFilterInput = {
  id?: ModelIDInput | null,
  eventsId?: ModelIDInput | null,
  clubsId?: ModelIDInput | null,
  and?: Array< ModelEventsClubsFilterInput | null > | null,
  or?: Array< ModelEventsClubsFilterInput | null > | null,
  not?: ModelEventsClubsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionEventsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  startTimeStamp?: ModelSubscriptionStringInput | null,
  endTimeStamp?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  meetingUrl?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventsFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionClubsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  abbreviation?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  profilePhoto?: ModelSubscriptionStringInput | null,
  headingPhoto?: ModelSubscriptionStringInput | null,
  isApplicationOpen?: ModelSubscriptionBooleanInput | null,
  isApplicationRequired?: ModelSubscriptionBooleanInput | null,
  categories?: ModelSubscriptionStringInput | null,
  numMembers?: ModelSubscriptionIntInput | null,
  yearFounded?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
  instagram?: ModelSubscriptionStringInput | null,
  linkedin?: ModelSubscriptionStringInput | null,
  facebook?: ModelSubscriptionStringInput | null,
  twitter?: ModelSubscriptionStringInput | null,
  discord?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClubsFilterInput | null > | null,
  or?: Array< ModelSubscriptionClubsFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionEventsClubsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  eventsId?: ModelSubscriptionIDInput | null,
  clubsId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionEventsClubsFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventsClubsFilterInput | null > | null,
};

export type CreateEventsMutationVariables = {
  input: CreateEventsInput,
  condition?: ModelEventsConditionInput | null,
};

export type CreateEventsMutation = {
  createEvents?:  {
    __typename: "Events",
    id: string,
    name?: string | null,
    description?: string | null,
    startTimeStamp?: string | null,
    endTimeStamp?: string | null,
    location?: string | null,
    meetingUrl?: string | null,
    clubs?:  {
      __typename: "ModelEventsClubsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEventsMutationVariables = {
  input: UpdateEventsInput,
  condition?: ModelEventsConditionInput | null,
};

export type UpdateEventsMutation = {
  updateEvents?:  {
    __typename: "Events",
    id: string,
    name?: string | null,
    description?: string | null,
    startTimeStamp?: string | null,
    endTimeStamp?: string | null,
    location?: string | null,
    meetingUrl?: string | null,
    clubs?:  {
      __typename: "ModelEventsClubsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEventsMutationVariables = {
  input: DeleteEventsInput,
  condition?: ModelEventsConditionInput | null,
};

export type DeleteEventsMutation = {
  deleteEvents?:  {
    __typename: "Events",
    id: string,
    name?: string | null,
    description?: string | null,
    startTimeStamp?: string | null,
    endTimeStamp?: string | null,
    location?: string | null,
    meetingUrl?: string | null,
    clubs?:  {
      __typename: "ModelEventsClubsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateClubsMutationVariables = {
  input: CreateClubsInput,
  condition?: ModelClubsConditionInput | null,
};

export type CreateClubsMutation = {
  createClubs?:  {
    __typename: "Clubs",
    id: string,
    name?: string | null,
    abbreviation?: string | null,
    description?: string | null,
    profilePhoto?: string | null,
    headingPhoto?: string | null,
    isApplicationOpen?: boolean | null,
    isApplicationRequired?: boolean | null,
    categories?: Array< string | null > | null,
    numMembers?: number | null,
    yearFounded?: string | null,
    branches?:  Array< {
      __typename: "Branch",
      title?: string | null,
      description?: string | null,
    } | null > | null,
    website?: string | null,
    instagram?: string | null,
    linkedin?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    discord?: string | null,
    email?: string | null,
    recruitingSeasons?:  {
      __typename: "RecruitingSeason",
      isActive?: boolean | null,
      startTimestamp?: string | null,
      endTimestamp?: string | null,
    } | null,
    Events?:  {
      __typename: "ModelEventsClubsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateClubsMutationVariables = {
  input: UpdateClubsInput,
  condition?: ModelClubsConditionInput | null,
};

export type UpdateClubsMutation = {
  updateClubs?:  {
    __typename: "Clubs",
    id: string,
    name?: string | null,
    abbreviation?: string | null,
    description?: string | null,
    profilePhoto?: string | null,
    headingPhoto?: string | null,
    isApplicationOpen?: boolean | null,
    isApplicationRequired?: boolean | null,
    categories?: Array< string | null > | null,
    numMembers?: number | null,
    yearFounded?: string | null,
    branches?:  Array< {
      __typename: "Branch",
      title?: string | null,
      description?: string | null,
    } | null > | null,
    website?: string | null,
    instagram?: string | null,
    linkedin?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    discord?: string | null,
    email?: string | null,
    recruitingSeasons?:  {
      __typename: "RecruitingSeason",
      isActive?: boolean | null,
      startTimestamp?: string | null,
      endTimestamp?: string | null,
    } | null,
    Events?:  {
      __typename: "ModelEventsClubsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteClubsMutationVariables = {
  input: DeleteClubsInput,
  condition?: ModelClubsConditionInput | null,
};

export type DeleteClubsMutation = {
  deleteClubs?:  {
    __typename: "Clubs",
    id: string,
    name?: string | null,
    abbreviation?: string | null,
    description?: string | null,
    profilePhoto?: string | null,
    headingPhoto?: string | null,
    isApplicationOpen?: boolean | null,
    isApplicationRequired?: boolean | null,
    categories?: Array< string | null > | null,
    numMembers?: number | null,
    yearFounded?: string | null,
    branches?:  Array< {
      __typename: "Branch",
      title?: string | null,
      description?: string | null,
    } | null > | null,
    website?: string | null,
    instagram?: string | null,
    linkedin?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    discord?: string | null,
    email?: string | null,
    recruitingSeasons?:  {
      __typename: "RecruitingSeason",
      isActive?: boolean | null,
      startTimestamp?: string | null,
      endTimestamp?: string | null,
    } | null,
    Events?:  {
      __typename: "ModelEventsClubsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateEventsClubsMutationVariables = {
  input: CreateEventsClubsInput,
  condition?: ModelEventsClubsConditionInput | null,
};

export type CreateEventsClubsMutation = {
  createEventsClubs?:  {
    __typename: "EventsClubs",
    id: string,
    eventsId: string,
    clubsId: string,
    events:  {
      __typename: "Events",
      id: string,
      name?: string | null,
      description?: string | null,
      startTimeStamp?: string | null,
      endTimeStamp?: string | null,
      location?: string | null,
      meetingUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    clubs:  {
      __typename: "Clubs",
      id: string,
      name?: string | null,
      abbreviation?: string | null,
      description?: string | null,
      profilePhoto?: string | null,
      headingPhoto?: string | null,
      isApplicationOpen?: boolean | null,
      isApplicationRequired?: boolean | null,
      categories?: Array< string | null > | null,
      numMembers?: number | null,
      yearFounded?: string | null,
      website?: string | null,
      instagram?: string | null,
      linkedin?: string | null,
      facebook?: string | null,
      twitter?: string | null,
      discord?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEventsClubsMutationVariables = {
  input: UpdateEventsClubsInput,
  condition?: ModelEventsClubsConditionInput | null,
};

export type UpdateEventsClubsMutation = {
  updateEventsClubs?:  {
    __typename: "EventsClubs",
    id: string,
    eventsId: string,
    clubsId: string,
    events:  {
      __typename: "Events",
      id: string,
      name?: string | null,
      description?: string | null,
      startTimeStamp?: string | null,
      endTimeStamp?: string | null,
      location?: string | null,
      meetingUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    clubs:  {
      __typename: "Clubs",
      id: string,
      name?: string | null,
      abbreviation?: string | null,
      description?: string | null,
      profilePhoto?: string | null,
      headingPhoto?: string | null,
      isApplicationOpen?: boolean | null,
      isApplicationRequired?: boolean | null,
      categories?: Array< string | null > | null,
      numMembers?: number | null,
      yearFounded?: string | null,
      website?: string | null,
      instagram?: string | null,
      linkedin?: string | null,
      facebook?: string | null,
      twitter?: string | null,
      discord?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEventsClubsMutationVariables = {
  input: DeleteEventsClubsInput,
  condition?: ModelEventsClubsConditionInput | null,
};

export type DeleteEventsClubsMutation = {
  deleteEventsClubs?:  {
    __typename: "EventsClubs",
    id: string,
    eventsId: string,
    clubsId: string,
    events:  {
      __typename: "Events",
      id: string,
      name?: string | null,
      description?: string | null,
      startTimeStamp?: string | null,
      endTimeStamp?: string | null,
      location?: string | null,
      meetingUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    clubs:  {
      __typename: "Clubs",
      id: string,
      name?: string | null,
      abbreviation?: string | null,
      description?: string | null,
      profilePhoto?: string | null,
      headingPhoto?: string | null,
      isApplicationOpen?: boolean | null,
      isApplicationRequired?: boolean | null,
      categories?: Array< string | null > | null,
      numMembers?: number | null,
      yearFounded?: string | null,
      website?: string | null,
      instagram?: string | null,
      linkedin?: string | null,
      facebook?: string | null,
      twitter?: string | null,
      discord?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetEventsQueryVariables = {
  id: string,
};

export type GetEventsQuery = {
  getEvents?:  {
    __typename: "Events",
    id: string,
    name?: string | null,
    description?: string | null,
    startTimeStamp?: string | null,
    endTimeStamp?: string | null,
    location?: string | null,
    meetingUrl?: string | null,
    clubs?:  {
      __typename: "ModelEventsClubsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventsConnection",
    items:  Array< {
      __typename: "Events",
      id: string,
      name?: string | null,
      description?: string | null,
      startTimeStamp?: string | null,
      endTimeStamp?: string | null,
      location?: string | null,
      meetingUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEventsQueryVariables = {
  filter?: ModelEventsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEventsQuery = {
  syncEvents?:  {
    __typename: "ModelEventsConnection",
    items:  Array< {
      __typename: "Events",
      id: string,
      name?: string | null,
      description?: string | null,
      startTimeStamp?: string | null,
      endTimeStamp?: string | null,
      location?: string | null,
      meetingUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetClubsQueryVariables = {
  id: string,
};

export type GetClubsQuery = {
  getClubs?:  {
    __typename: "Clubs",
    id: string,
    name?: string | null,
    abbreviation?: string | null,
    description?: string | null,
    profilePhoto?: string | null,
    headingPhoto?: string | null,
    isApplicationOpen?: boolean | null,
    isApplicationRequired?: boolean | null,
    categories?: Array< string | null > | null,
    numMembers?: number | null,
    yearFounded?: string | null,
    branches?:  Array< {
      __typename: "Branch",
      title?: string | null,
      description?: string | null,
    } | null > | null,
    website?: string | null,
    instagram?: string | null,
    linkedin?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    discord?: string | null,
    email?: string | null,
    recruitingSeasons?:  {
      __typename: "RecruitingSeason",
      isActive?: boolean | null,
      startTimestamp?: string | null,
      endTimestamp?: string | null,
    } | null,
    Events?:  {
      __typename: "ModelEventsClubsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListClubsQueryVariables = {
  filter?: ModelClubsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClubsQuery = {
  listClubs?:  {
    __typename: "ModelClubsConnection",
    items:  Array< {
      __typename: "Clubs",
      id: string,
      name?: string | null,
      abbreviation?: string | null,
      description?: string | null,
      profilePhoto?: string | null,
      headingPhoto?: string | null,
      isApplicationOpen?: boolean | null,
      isApplicationRequired?: boolean | null,
      categories?: Array< string | null > | null,
      numMembers?: number | null,
      yearFounded?: string | null,
      website?: string | null,
      instagram?: string | null,
      linkedin?: string | null,
      facebook?: string | null,
      twitter?: string | null,
      discord?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncClubsQueryVariables = {
  filter?: ModelClubsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncClubsQuery = {
  syncClubs?:  {
    __typename: "ModelClubsConnection",
    items:  Array< {
      __typename: "Clubs",
      id: string,
      name?: string | null,
      abbreviation?: string | null,
      description?: string | null,
      profilePhoto?: string | null,
      headingPhoto?: string | null,
      isApplicationOpen?: boolean | null,
      isApplicationRequired?: boolean | null,
      categories?: Array< string | null > | null,
      numMembers?: number | null,
      yearFounded?: string | null,
      website?: string | null,
      instagram?: string | null,
      linkedin?: string | null,
      facebook?: string | null,
      twitter?: string | null,
      discord?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEventsClubsQueryVariables = {
  id: string,
};

export type GetEventsClubsQuery = {
  getEventsClubs?:  {
    __typename: "EventsClubs",
    id: string,
    eventsId: string,
    clubsId: string,
    events:  {
      __typename: "Events",
      id: string,
      name?: string | null,
      description?: string | null,
      startTimeStamp?: string | null,
      endTimeStamp?: string | null,
      location?: string | null,
      meetingUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    clubs:  {
      __typename: "Clubs",
      id: string,
      name?: string | null,
      abbreviation?: string | null,
      description?: string | null,
      profilePhoto?: string | null,
      headingPhoto?: string | null,
      isApplicationOpen?: boolean | null,
      isApplicationRequired?: boolean | null,
      categories?: Array< string | null > | null,
      numMembers?: number | null,
      yearFounded?: string | null,
      website?: string | null,
      instagram?: string | null,
      linkedin?: string | null,
      facebook?: string | null,
      twitter?: string | null,
      discord?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEventsClubsQueryVariables = {
  filter?: ModelEventsClubsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsClubsQuery = {
  listEventsClubs?:  {
    __typename: "ModelEventsClubsConnection",
    items:  Array< {
      __typename: "EventsClubs",
      id: string,
      eventsId: string,
      clubsId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEventsClubsQueryVariables = {
  filter?: ModelEventsClubsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEventsClubsQuery = {
  syncEventsClubs?:  {
    __typename: "ModelEventsClubsConnection",
    items:  Array< {
      __typename: "EventsClubs",
      id: string,
      eventsId: string,
      clubsId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type EventsClubsByEventsIdQueryVariables = {
  eventsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventsClubsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EventsClubsByEventsIdQuery = {
  eventsClubsByEventsId?:  {
    __typename: "ModelEventsClubsConnection",
    items:  Array< {
      __typename: "EventsClubs",
      id: string,
      eventsId: string,
      clubsId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type EventsClubsByClubsIdQueryVariables = {
  clubsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventsClubsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EventsClubsByClubsIdQuery = {
  eventsClubsByClubsId?:  {
    __typename: "ModelEventsClubsConnection",
    items:  Array< {
      __typename: "EventsClubs",
      id: string,
      eventsId: string,
      clubsId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateEventsSubscriptionVariables = {
  filter?: ModelSubscriptionEventsFilterInput | null,
};

export type OnCreateEventsSubscription = {
  onCreateEvents?:  {
    __typename: "Events",
    id: string,
    name?: string | null,
    description?: string | null,
    startTimeStamp?: string | null,
    endTimeStamp?: string | null,
    location?: string | null,
    meetingUrl?: string | null,
    clubs?:  {
      __typename: "ModelEventsClubsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEventsSubscriptionVariables = {
  filter?: ModelSubscriptionEventsFilterInput | null,
};

export type OnUpdateEventsSubscription = {
  onUpdateEvents?:  {
    __typename: "Events",
    id: string,
    name?: string | null,
    description?: string | null,
    startTimeStamp?: string | null,
    endTimeStamp?: string | null,
    location?: string | null,
    meetingUrl?: string | null,
    clubs?:  {
      __typename: "ModelEventsClubsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEventsSubscriptionVariables = {
  filter?: ModelSubscriptionEventsFilterInput | null,
};

export type OnDeleteEventsSubscription = {
  onDeleteEvents?:  {
    __typename: "Events",
    id: string,
    name?: string | null,
    description?: string | null,
    startTimeStamp?: string | null,
    endTimeStamp?: string | null,
    location?: string | null,
    meetingUrl?: string | null,
    clubs?:  {
      __typename: "ModelEventsClubsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateClubsSubscriptionVariables = {
  filter?: ModelSubscriptionClubsFilterInput | null,
};

export type OnCreateClubsSubscription = {
  onCreateClubs?:  {
    __typename: "Clubs",
    id: string,
    name?: string | null,
    abbreviation?: string | null,
    description?: string | null,
    profilePhoto?: string | null,
    headingPhoto?: string | null,
    isApplicationOpen?: boolean | null,
    isApplicationRequired?: boolean | null,
    categories?: Array< string | null > | null,
    numMembers?: number | null,
    yearFounded?: string | null,
    branches?:  Array< {
      __typename: "Branch",
      title?: string | null,
      description?: string | null,
    } | null > | null,
    website?: string | null,
    instagram?: string | null,
    linkedin?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    discord?: string | null,
    email?: string | null,
    recruitingSeasons?:  {
      __typename: "RecruitingSeason",
      isActive?: boolean | null,
      startTimestamp?: string | null,
      endTimestamp?: string | null,
    } | null,
    Events?:  {
      __typename: "ModelEventsClubsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateClubsSubscriptionVariables = {
  filter?: ModelSubscriptionClubsFilterInput | null,
};

export type OnUpdateClubsSubscription = {
  onUpdateClubs?:  {
    __typename: "Clubs",
    id: string,
    name?: string | null,
    abbreviation?: string | null,
    description?: string | null,
    profilePhoto?: string | null,
    headingPhoto?: string | null,
    isApplicationOpen?: boolean | null,
    isApplicationRequired?: boolean | null,
    categories?: Array< string | null > | null,
    numMembers?: number | null,
    yearFounded?: string | null,
    branches?:  Array< {
      __typename: "Branch",
      title?: string | null,
      description?: string | null,
    } | null > | null,
    website?: string | null,
    instagram?: string | null,
    linkedin?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    discord?: string | null,
    email?: string | null,
    recruitingSeasons?:  {
      __typename: "RecruitingSeason",
      isActive?: boolean | null,
      startTimestamp?: string | null,
      endTimestamp?: string | null,
    } | null,
    Events?:  {
      __typename: "ModelEventsClubsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteClubsSubscriptionVariables = {
  filter?: ModelSubscriptionClubsFilterInput | null,
};

export type OnDeleteClubsSubscription = {
  onDeleteClubs?:  {
    __typename: "Clubs",
    id: string,
    name?: string | null,
    abbreviation?: string | null,
    description?: string | null,
    profilePhoto?: string | null,
    headingPhoto?: string | null,
    isApplicationOpen?: boolean | null,
    isApplicationRequired?: boolean | null,
    categories?: Array< string | null > | null,
    numMembers?: number | null,
    yearFounded?: string | null,
    branches?:  Array< {
      __typename: "Branch",
      title?: string | null,
      description?: string | null,
    } | null > | null,
    website?: string | null,
    instagram?: string | null,
    linkedin?: string | null,
    facebook?: string | null,
    twitter?: string | null,
    discord?: string | null,
    email?: string | null,
    recruitingSeasons?:  {
      __typename: "RecruitingSeason",
      isActive?: boolean | null,
      startTimestamp?: string | null,
      endTimestamp?: string | null,
    } | null,
    Events?:  {
      __typename: "ModelEventsClubsConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateEventsClubsSubscriptionVariables = {
  filter?: ModelSubscriptionEventsClubsFilterInput | null,
};

export type OnCreateEventsClubsSubscription = {
  onCreateEventsClubs?:  {
    __typename: "EventsClubs",
    id: string,
    eventsId: string,
    clubsId: string,
    events:  {
      __typename: "Events",
      id: string,
      name?: string | null,
      description?: string | null,
      startTimeStamp?: string | null,
      endTimeStamp?: string | null,
      location?: string | null,
      meetingUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    clubs:  {
      __typename: "Clubs",
      id: string,
      name?: string | null,
      abbreviation?: string | null,
      description?: string | null,
      profilePhoto?: string | null,
      headingPhoto?: string | null,
      isApplicationOpen?: boolean | null,
      isApplicationRequired?: boolean | null,
      categories?: Array< string | null > | null,
      numMembers?: number | null,
      yearFounded?: string | null,
      website?: string | null,
      instagram?: string | null,
      linkedin?: string | null,
      facebook?: string | null,
      twitter?: string | null,
      discord?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEventsClubsSubscriptionVariables = {
  filter?: ModelSubscriptionEventsClubsFilterInput | null,
};

export type OnUpdateEventsClubsSubscription = {
  onUpdateEventsClubs?:  {
    __typename: "EventsClubs",
    id: string,
    eventsId: string,
    clubsId: string,
    events:  {
      __typename: "Events",
      id: string,
      name?: string | null,
      description?: string | null,
      startTimeStamp?: string | null,
      endTimeStamp?: string | null,
      location?: string | null,
      meetingUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    clubs:  {
      __typename: "Clubs",
      id: string,
      name?: string | null,
      abbreviation?: string | null,
      description?: string | null,
      profilePhoto?: string | null,
      headingPhoto?: string | null,
      isApplicationOpen?: boolean | null,
      isApplicationRequired?: boolean | null,
      categories?: Array< string | null > | null,
      numMembers?: number | null,
      yearFounded?: string | null,
      website?: string | null,
      instagram?: string | null,
      linkedin?: string | null,
      facebook?: string | null,
      twitter?: string | null,
      discord?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEventsClubsSubscriptionVariables = {
  filter?: ModelSubscriptionEventsClubsFilterInput | null,
};

export type OnDeleteEventsClubsSubscription = {
  onDeleteEventsClubs?:  {
    __typename: "EventsClubs",
    id: string,
    eventsId: string,
    clubsId: string,
    events:  {
      __typename: "Events",
      id: string,
      name?: string | null,
      description?: string | null,
      startTimeStamp?: string | null,
      endTimeStamp?: string | null,
      location?: string | null,
      meetingUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    clubs:  {
      __typename: "Clubs",
      id: string,
      name?: string | null,
      abbreviation?: string | null,
      description?: string | null,
      profilePhoto?: string | null,
      headingPhoto?: string | null,
      isApplicationOpen?: boolean | null,
      isApplicationRequired?: boolean | null,
      categories?: Array< string | null > | null,
      numMembers?: number | null,
      yearFounded?: string | null,
      website?: string | null,
      instagram?: string | null,
      linkedin?: string | null,
      facebook?: string | null,
      twitter?: string | null,
      discord?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
