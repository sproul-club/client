import React from 'react';
import Link from 'next/link';
import styles from './Card.module.scss';
import Club from '../../models/club/Club';

interface ClubCardProps {
  data: Club;
}

const ClubCard: React.FC<ClubCardProps> = ({ data }) => {
  const { name, description, categories, website, numMembers, yearFounded } =
    data;
  const application = data.isApplicationOpen ? 'Open' : 'Closed';
  const timeline = `${yearFounded} - Present`;

  const socialLinks = [
    { platform: 'Website', href: website },
    { platform: 'Instagram', href: data.instagram },
    { platform: 'LinkedIn', href: data.linkedin },
    { platform: 'Facebook', href: data.facebook },
    { platform: 'Twitter', href: data.twitter },
    { platform: 'Discord', href: data.discord },
    {
      platform: 'Email',
      href: data.email ? `mailto:${data.email}` : undefined,
    },
  ].filter((link) => link.href);

  return (
    <div className={styles.clubCard}>
      <div className={styles.header}>
        <div className={styles.nameAndButtons}>
          <h2 className={styles.clubName}>{name}</h2>
          <div className={styles.buttons}>
            <button className={styles.applyButton}>Apply</button>
            <button>Visit Website</button>
          </div>
        </div>
        <div className={styles.details}>
          <div>
            <span className={styles.icon}>📝</span>
            <span>Application: {application}</span>
          </div>
          <div>
            <span className={styles.icon}>⏳</span>
            <span>Timeline: {timeline}</span>
          </div>
          <div>
            <span className={styles.icon}>👥</span>
            <span>Members: {numMembers}</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div className={styles.about}>
            <h3>About Us</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <h3>Tags</h3>
          <div className={styles.tags}>
            {categories.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <h3>Links</h3>
          <div className={styles.links}>
            {socialLinks.map(({ platform, href }) => (
              <Link
                key={platform}
                href={'https://www.instagram.com/webatberkeley'}
              >
                {platform}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
