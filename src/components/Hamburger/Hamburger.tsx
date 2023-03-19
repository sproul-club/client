import styles from './MenuIcon.module.scss';

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

const Hamburger = ({ onClick, isOpen }: Props) => {
  return (
    <label htmlFor="check" className={styles.label}>
      <input type="checkbox" id="check" onChange={onClick} checked={isOpen} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default Hamburger;
