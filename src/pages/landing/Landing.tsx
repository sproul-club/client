import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

export const Home: NextPage = () => {
  return (
    <div className="landing">
      <div className="content">
        <div className="text">
          <h3>Find your community at Berkeley</h3>
          <p>
            sproul.club helps you discover student clubs, organizations, and
            communities on campus - built by students, for students!
          </p>
          <div className="buttons">
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
