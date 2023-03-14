import Role from "./Role";

interface User {
  id: string;

  // Personal Attributes
  firstName: string;
  lastName: string;
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
  createdAt: string;
  interests: string[];
  recommendations: string[];
  favorites: string[];
  applications: string[];
  roles: Role[];
}

export default User;
