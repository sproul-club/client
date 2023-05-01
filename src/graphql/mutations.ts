/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvents = /* GraphQL */ `
  mutation CreateEvents(
    $input: CreateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    createEvents(input: $input, condition: $condition) {
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
export const updateEvents = /* GraphQL */ `
  mutation UpdateEvents(
    $input: UpdateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    updateEvents(input: $input, condition: $condition) {
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
export const deleteEvents = /* GraphQL */ `
  mutation DeleteEvents(
    $input: DeleteEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    deleteEvents(input: $input, condition: $condition) {
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
export const createClubs = /* GraphQL */ `
  mutation CreateClubs(
    $input: CreateClubsInput!
    $condition: ModelClubsConditionInput
  ) {
    createClubs(input: $input, condition: $condition) {
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
export const updateClubs = /* GraphQL */ `
  mutation UpdateClubs(
    $input: UpdateClubsInput!
    $condition: ModelClubsConditionInput
  ) {
    updateClubs(input: $input, condition: $condition) {
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
export const deleteClubs = /* GraphQL */ `
  mutation DeleteClubs(
    $input: DeleteClubsInput!
    $condition: ModelClubsConditionInput
  ) {
    deleteClubs(input: $input, condition: $condition) {
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
export const createEventsClubs = /* GraphQL */ `
  mutation CreateEventsClubs(
    $input: CreateEventsClubsInput!
    $condition: ModelEventsClubsConditionInput
  ) {
    createEventsClubs(input: $input, condition: $condition) {
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
export const updateEventsClubs = /* GraphQL */ `
  mutation UpdateEventsClubs(
    $input: UpdateEventsClubsInput!
    $condition: ModelEventsClubsConditionInput
  ) {
    updateEventsClubs(input: $input, condition: $condition) {
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
export const deleteEventsClubs = /* GraphQL */ `
  mutation DeleteEventsClubs(
    $input: DeleteEventsClubsInput!
    $condition: ModelEventsClubsConditionInput
  ) {
    deleteEventsClubs(input: $input, condition: $condition) {
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
