import ClubCard from '../../components/ClubCard';
import Club from '../../models/club/Club';
export default function Discover() {
  const clubData: Club = {
    id: '1',
    name: 'Club Name',
    abbreviation: 'CN',
    description: 'This is a club about something interesting.',
    profilePhoto: 'https://via.placeholder.com/150',
    headingPhoto: 'https://via.placeholder.com/300',
    isApplicationOpen: true,
    isApplicationRequired: true,
    categories: ['Tag1', 'Tag2', 'Tag3'],
    events: ['event1', 'event2'],
    recruitingSeasons: ['season1', 'season2'],
    numMembers: 100,
    yearFounded: '2000',
    branches: [], // Fill in the Branch data as required
    website: 'https://example.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    discord: 'https://discord.com',
    email: 'email@example.com',
  };

  return (
    <div>
      <ClubCard data={clubData} />
    </div>
  );
}
