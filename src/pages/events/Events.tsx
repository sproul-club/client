import styles from './Events.module.scss';
import Link from 'next/link';

export default function Events() {
  return (
    <div>
      <h1 className="Events">
        <button>
          <Link href="/landing">Landing</Link>
        </button>
      </h1>
    </div>
  );
}
