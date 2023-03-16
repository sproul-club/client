import Timestamp from '../primitives/Timestamp';
import User from '../User';
import Club from './Club';

export default interface Application {
  id: string;
  clubId: Club['id'];
  userId: User['id'];
  createdAt: Timestamp;
  updatedAt: Timestamp;
  isSubmitted: boolean;
  response: any;
}
