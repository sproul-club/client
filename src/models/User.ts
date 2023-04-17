import Event from './Event';
import Club from './club/Club';
import Role from './club/Role';
import Timestamp from './primitives/Timestamp';

interface User {
  id: string;

  // Personal Attributes
  firstName: string;
  lastName: string;
  nickname: string;
  pronouns: string;
  race: string;
  ethnicity: string;
  profilePhotoURI: string;
  majors: string[];
  minors: string[];

  // Contact Info
  emailPersonal: string;
  emailSchool: string;
  phone: string;

  // Socials
  linkedin: string;
  website: string;
  github: string;
  twitter: string;

  // App Attributes
  createdAt: Timestamp;
  interests: string[];
  recommendations: string[];
  favoriteClubs: Club['id'][];
  favoriteEvents: Event['id'][];
  applications: string[];
  roles: Role['id'][];
}

export default User;
