import { CategoryString } from './Category';
import Club from './club/Club';
import Timestamp from './primitives/Timestamp';
import User from './User';
interface Event {
  id: string;
  name: string;
  description: string;
  startTimestamp: Timestamp;
  endTimestamp: Timestamp;
  clubHosts: Club['id'][];
  userHosts: User['id'][];
  location: string;
  meetingURI: string;
  categories: CategoryString[];
  image: string;
}

export default Event;
