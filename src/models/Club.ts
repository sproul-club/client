// Club has a one-to-many relationship w/ Member

interface Club {
  id: string;
  name: string;
  profile_photo: string;
  heading_photo: string;
  description: string;
  applications_open: boolean;
  application_required: boolean;
  tags: string[];
  members: string[]; // member ids NOT student ids, these are correlated but not independent
  events: string[];
}

export default Club;
