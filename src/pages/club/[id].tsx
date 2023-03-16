import Club from '../../models/club/Club';
import styles from './Club.module.scss';
interface Props {
  club: Club;
}

export default function Club({ club }: Props) {
  return <div className={styles.container}></div>;
}

interface StaticParams {
  params: {
    id: string;
  };
}

export async function getStaticPaths() {
  // Return a list of possible club ids
  const paths: string[] = [];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: StaticParams) {
  // Fetch necessary data for the blog post using params.id
  const clubData = null; // getPostData(params.id);
  return {
    props: {
      club: clubData,
    },
  };
}
