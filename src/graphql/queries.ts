/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvents = /* GraphQL */ `
  query GetEvents($id: ID!) {
    getEvents(id: $id) {
      id
      name
      description
      startTimeStamp
      endTimeStamp
      location
      meetingUrl
      clubs {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        startTimeStamp
        endTimeStamp
        location
        meetingUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        startTimeStamp
        endTimeStamp
        location
        meetingUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getClubs = /* GraphQL */ `
  query GetClubs($id: ID!) {
    getClubs(id: $id) {
      id
      name
      abbreviation
      description
      profilePhoto
      headingPhoto
      isApplicationOpen
      isApplicationRequired
      categories
      numMembers
      yearFounded
      branches {
        title
        description
      }
      website
      instagram
      linkedin
      facebook
      twitter
      discord
      email
      recruitingSeasons {
        isActive
        startTimestamp
        endTimestamp
      }
      Events {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listClubs = /* GraphQL */ `
  query ListClubs(
    $filter: ModelClubsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        abbreviation
        description
        profilePhoto
        headingPhoto
        isApplicationOpen
        isApplicationRequired
        categories
        numMembers
        yearFounded
        website
        instagram
        linkedin
        facebook
        twitter
        discord
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncClubs = /* GraphQL */ `
  query SyncClubs(
    $filter: ModelClubsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClubs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        abbreviation
        description
        profilePhoto
        headingPhoto
        isApplicationOpen
        isApplicationRequired
        categories
        numMembers
        yearFounded
        website
        instagram
        linkedin
        facebook
        twitter
        discord
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEventsClubs = /* GraphQL */ `
  query GetEventsClubs($id: ID!) {
    getEventsClubs(id: $id) {
      id
      eventsId
      clubsId
      events {
        id
        name
        description
        startTimeStamp
        endTimeStamp
        location
        meetingUrl
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      clubs {
        id
        name
        abbreviation
        description
        profilePhoto
        headingPhoto
        isApplicationOpen
        isApplicationRequired
        categories
        numMembers
        yearFounded
        website
        instagram
        linkedin
        facebook
        twitter
        discord
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEventsClubs = /* GraphQL */ `
  query ListEventsClubs(
    $filter: ModelEventsClubsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventsClubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        eventsId
        clubsId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEventsClubs = /* GraphQL */ `
  query SyncEventsClubs(
    $filter: ModelEventsClubsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEventsClubs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        eventsId
        clubsId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const eventsClubsByEventsId = /* GraphQL */ `
  query EventsClubsByEventsId(
    $eventsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventsClubsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsClubsByEventsId(
      eventsId: $eventsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventsId
        clubsId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const eventsClubsByClubsId = /* GraphQL */ `
  query EventsClubsByClubsId(
    $clubsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventsClubsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsClubsByClubsId(
      clubsId: $clubsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventsId
        clubsId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
