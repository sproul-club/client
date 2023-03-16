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
}

export default Event;
