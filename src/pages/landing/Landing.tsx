import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import ClubCard from "../../components/ClubCard";

import styles from "./Landing.module.scss";

export const Home: NextPage = () => {
  return (
    <div className={styles["landing"]}>
      <div className={styles["content"]}>
        <div className={styles["text"]}>
          <h3>Find your community at Berkeley</h3>
          <p>
            sproul.club helps you discover student clubs, organizations, and
            communities on campus - built by students, for students!
          </p>
          <div className={styles["buttons"]}>
            <Link href="/catalog">
              <a>Explore clubs</a>
            </Link>
            <Link href="/signup">
              <a>Add a club</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
