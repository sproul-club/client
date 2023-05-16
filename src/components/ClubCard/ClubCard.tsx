import React from 'react';
import Link from 'next/link';
import styles from './Card.module.scss';
import Club from '../../models/club/Club';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

interface ClubCardProps {
  data: Club;
}

const ClubCard: React.FC<ClubCardProps> = ({ data }) => {
  const application = data.isApplicationRequired ? 'Open' : 'Closed';
  const timeline = data.isApplicationOpen ? 'Open' : 'Closed';
  // TODO: add icons
  const socialLinks = [
    { platform: 'Instagram', href: data.instagram, icon: faInstagram },
    { platform: 'LinkedIn', href: data.linkedin, icon: faLinkedin },
    { platform: 'Facebook', href: data.facebook, icon: faFacebookF },
    { platform: 'Twitter', href: data.twitter, icon: faTwitter },
    { platform: 'Discord', href: data.discord, icon: faDiscord },
    {
      platform: 'Email',
      href: data.email ? `mailto:${data.email}` : undefined,
      icon: faEnvelope,
    },
  ].filter((link) => link.href);

  return (
    <div className={styles.clubCard}>
      <div className={styles.header}>
        <div className={styles.nameAndButtons}>
          <h2 className={styles.clubName}>{data.name}</h2>
          <div className={styles.buttons}>
            <button className={styles.applyButton}>Apply</button>
            <Link href={data.website}>
              <button>Visit Website</button>
            </Link>
          </div>
        </div>
        <div className={styles.details}>
          <div>
            <span className={styles.icon}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2658 3.08808L13.6042 6.42654L3.33846 16.6923H0V13.3538L10.2658 3.08808ZM11.4342 1.91962L13.3538 0L16.6923 3.33846L14.7727 5.25808L11.4342 1.91962Z"
                  fill="black"
                  fillOpacity="0.6"
                />
              </svg>
            </span>
            <span>Application: {application}</span>
          </div>
          <div>
            <span className={styles.icon}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49992 16.4167C4.12754 16.4167 0.583252 12.8724 0.583252 8.50004C0.583252 4.12767 4.12754 0.583374 8.49992 0.583374C12.8723 0.583374 16.4166 4.12767 16.4166 8.50004C16.4166 12.8724 12.8723 16.4167 8.49992 16.4167ZM9.29158 8.50004V4.54171H7.70825V10.0834H12.4583V8.50004H9.29158Z"
                  fill="#797979"
                />
              </svg>
            </span>

            <span>Timeline: {timeline}</span>
          </div>
          <div>
            <span className={styles.icon}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 17C0 15.2824 0.682311 13.6352 1.89683 12.4206C3.11135 11.2061 4.7586 10.5238 6.47619 10.5238C8.19378 10.5238 9.84103 11.2061 11.0555 12.4206C12.2701 13.6352 12.9524 15.2824 12.9524 17H0ZM6.47619 9.71429C3.79262 9.71429 1.61905 7.54071 1.61905 4.85714C1.61905 2.17357 3.79262 0 6.47619 0C9.15976 0 11.3333 2.17357 11.3333 4.85714C11.3333 7.54071 9.15976 9.71429 6.47619 9.71429ZM12.4367 11.522C13.675 11.8402 14.7813 12.541 15.5982 13.5246C16.415 14.5081 16.9008 15.7243 16.9862 17H14.5714C14.5714 14.8871 13.7619 12.9637 12.4367 11.522ZM10.799 9.67948C11.4774 9.07272 12.0199 8.32946 12.391 7.49841C12.7621 6.66736 12.9534 5.76728 12.9524 4.85714C12.9541 3.7509 12.6711 2.66282 12.1307 1.69757C13.0476 1.88181 13.8724 2.37787 14.4649 3.10144C15.0575 3.82502 15.3811 4.73145 15.381 5.66667C15.3812 6.24342 15.2581 6.81357 15.02 7.33888C14.7819 7.86419 14.4342 8.33254 14.0004 8.71253C13.5665 9.09253 13.0564 9.37539 12.5043 9.54215C11.9521 9.70892 11.3707 9.75574 10.799 9.67948V9.67948Z"
                  fill="#797979"
                />
              </svg>
            </span>
            <span>Members: {data.numMembers}</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div className={styles.about}>
            <h3>About Us</h3>
            <p>{data.description}</p>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <h3>Tags</h3>
          <div className={styles.tags}>
            {data.categories && data.categories.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <h3>Links</h3>
          <div className={styles.icons}>
            {socialLinks.map(({ platform, href, icon }) => (
              <Link key={platform} href={href!}>
                <a className={styles.iconLink} title={platform}>
                  <FontAwesomeIcon icon={icon} className={styles.socialIcon} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
