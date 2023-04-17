import React, { useState } from 'react';
import styles from './Discover.module.scss';

export interface DropdownProps {
  appOpen: string;
  setAppOpen: (value: string) => void;
  appRequired: string;
  setAppRequired: (value: string) => void;
  tag: string;
  setTag: (value: string) => void;
}

export const Dropdowns: React.FC<DropdownProps> = ({
  appOpen,
  setAppOpen,
  appRequired,
  setAppRequired,
  tag,
  setTag,
}) => {
  const handleAppOpenChange: (e: any) => void = (e) => {
    setAppOpen(e.target.value);
  };

  const handleAppRequiredChange: (e: any) => void = (e) => {
    setAppRequired(e.target.value);
  };

  const handleTagChange: (e: any) => void = (e) => {
    setTag(e.target.value);
  };

  return (
    <div className={styles.droprow}>
      <div className={styles.dropdown}>
        <select
          id="appOpen"
          value={appOpen.toString()}
          onChange={handleAppOpenChange}
        >
          <option value="any">Recruiting</option>
          <option value="app-open">Open</option>
          <option value="app-closed">Closed</option>
        </select>
      </div>
      <div className={styles.dropdown}>
        <select
          id="appRequired"
          value={appRequired.toString()}
          onChange={handleAppRequiredChange}
        >
          <option value="any">Application</option>
          <option value="app-needed">App Needed</option>
          <option value="no-app">No Application</option>
        </select>
      </div>
      <div className={styles.dropdown}>
        <select id="tag" value={tag.toString()} onChange={handleTagChange}>
          <option value="any">Tags</option>
          <option value="Tech">Tech</option>
          <option value="Development">Development</option>
          <option value="Undergrad">Undergrad</option>
        </select>
      </div>
    </div>
  );
};
