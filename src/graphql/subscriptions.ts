/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvents = /* GraphQL */ `
  subscription OnCreateEvents($filter: ModelSubscriptionEventsFilterInput) {
    onCreateEvents(filter: $filter) {
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
export const onUpdateEvents = /* GraphQL */ `
  subscription OnUpdateEvents($filter: ModelSubscriptionEventsFilterInput) {
    onUpdateEvents(filter: $filter) {
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
export const onDeleteEvents = /* GraphQL */ `
  subscription OnDeleteEvents($filter: ModelSubscriptionEventsFilterInput) {
    onDeleteEvents(filter: $filter) {
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
export const onCreateClubs = /* GraphQL */ `
  subscription OnCreateClubs($filter: ModelSubscriptionClubsFilterInput) {
    onCreateClubs(filter: $filter) {
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
export const onUpdateClubs = /* GraphQL */ `
  subscription OnUpdateClubs($filter: ModelSubscriptionClubsFilterInput) {
    onUpdateClubs(filter: $filter) {
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
export const onDeleteClubs = /* GraphQL */ `
  subscription OnDeleteClubs($filter: ModelSubscriptionClubsFilterInput) {
    onDeleteClubs(filter: $filter) {
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
export const onCreateEventsClubs = /* GraphQL */ `
  subscription OnCreateEventsClubs(
    $filter: ModelSubscriptionEventsClubsFilterInput
  ) {
    onCreateEventsClubs(filter: $filter) {
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
export const onUpdateEventsClubs = /* GraphQL */ `
  subscription OnUpdateEventsClubs(
    $filter: ModelSubscriptionEventsClubsFilterInput
  ) {
    onUpdateEventsClubs(filter: $filter) {
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
export const onDeleteEventsClubs = /* GraphQL */ `
  subscription OnDeleteEventsClubs(
    $filter: ModelSubscriptionEventsClubsFilterInput
  ) {
    onDeleteEventsClubs(filter: $filter) {
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
