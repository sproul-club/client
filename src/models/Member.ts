// Club has a one-to-many relationship w/ Member
// Member has a one-to-many relationship w/ Role
interface Member {
  id: string;
  student: string;
  roles: string[];
}

export default Member;
