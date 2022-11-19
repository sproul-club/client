import Role from "./Role";

interface Student {
  id: string;

  // Personal Attributes
  name_first: string;
  name_last: string;
  nickname: string;
  pronouns: string;
  race: string;
  ethnicity: string;
  profile_photo: string;
  majors: string[];
  minors: string[];

  // Contact Info
  email_personal: string;
  email_school: string;
  phone: string;

  // Socials
  linkedin: string;
  website: string;
  github: string;
  twitter: string;

  // App Attributes
  creation: string;
  interests: string[];
  recommendations: string[];
  favorites: string[];
  applications: string[];
  roles: Role[];
}

export default Student;
