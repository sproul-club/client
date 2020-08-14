export const catalogTestApi = (searchInput) => {
  const { name, tags, app_req, status } = searchInput;
  console.log('searched: ', name, tags, app_req, status);

  const filtered = Object.keys(catalogData)
    .map((key) => catalogData[key])
    .filter((club) => club.name === name);

  console.log(filtered);
  return filtered;
};

export const profileData = {
  events: [
    {
      title: 'Event Title Extravaganza',
      start: 'Nov 30, 2020',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ducimus libero, soluta natus fuga ipsum at eaque commodi, consequuntur, quas enim hic cumque. Officiis, perferendis quaerat a minima, accusantium animi voluptatum eum et distinctio, nam rerum dolorum ratione id odit nesciunt? Necessitatibus, explicabo! Pariatur quae in, blanditiis voluptates dolor incidunt.',
    },
    {
      title: 'Cool Fun Party',
      start: 'Nov 30, 2020',
      text:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quasi, dolores at accusamus recusandae magnam. Explicabo adipisci qui culpa soluta error, quos libero incidunt, placeat labore alias odio. Excepturi eligendi soluta officia. Autem officiis soluta veniam fugiat pariatur cupiditate culpa, quod molestias beatae eum est ducimus facere nulla eveniet recusandae!',
    },
    {
      title: "Let's have a great time",
      start: 'Nov 18, 2020',
      text:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit aut odit dolores nulla nobis earum exercitationem nesciunt quisquam. Est odit quam recusandae ullam nulla deserunt velit veniam praesentium. Fugiat dolor natus esse explicabo excepturi voluptas impedit fugit error maiores. Quod beatae voluptates provident blanditiis nostrum facilis pariatur similique accusantium veniam.',
    },
    {
      title: "Let's have a great time",
      start: 'Nov 18, 2020',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus',
    },
  ],
};

export const catalogData = {
  1: {
    name: 'EthiCal',
    tags: ['Business', 'Design', 'Environmental'],
    req_app: true,
    status: true,
  },
  2: {
    name: 'BlockChain at Berkeley',
    tags: ['Computer Science', 'Technology'],
    req_app: true,
    status: false,
  },
  3: {
    name: 'Phi Beta Lambda',
    tags: ['Business'],
    req_app: false,
    status: true,
  },
  4: {
    name: 'Kanye West Fanclub',
    tags: ['Political', 'Yeezy'],
    req_app: false,
    status: true,
  },
  5: {
    name: 'DiversaTech',
    tags: ['Technology', 'Consulting'],
    req_app: false,
    status: true,
  },
  6: {
    name: 'Society of Women Engineers',
    tags: ['Social', 'Engineering'],
    req_app: false,
    status: true,
  },
  7: {
    name: 'Blueprint',
    tags: ['Technology', 'Computer Science', 'Consulting'],
    req_app: false,
    status: true,
  },
};

export const events = [
  {
    title: 'Event Title Extravaganza',
    start: 'Nov 30, 2020',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ducimus libero, soluta natus fuga ipsum at eaque commodi, consequuntur, quas enim hic cumque. Officiis, perferendis quaerat a minima, accusantium animi voluptatum eum et distinctio, nam rerum dolorum ratione id odit nesciunt? Necessitatibus, explicabo! Pariatur quae in, blanditiis voluptates dolor incidunt.',
  },
  {
    title: 'Cool Fun Party',
    start: 'Nov 30, 2020',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quasi, dolores at accusamus recusandae magnam. Explicabo adipisci qui culpa soluta error, quos libero incidunt, placeat labore alias odio. Excepturi eligendi soluta officia. Autem officiis soluta veniam fugiat pariatur cupiditate culpa, quod molestias beatae eum est ducimus facere nulla eveniet recusandae!',
  },
  {
    title: "Let's have a great time",
    start: 'Nov 18, 2020',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit aut odit dolores nulla nobis earum exercitationem nesciunt quisquam. Est odit quam recusandae ullam nulla deserunt velit veniam praesentium. Fugiat dolor natus esse explicabo excepturi voluptas impedit fugit error maiores. Quod beatae voluptates provident blanditiis nostrum facilis pariatur similique accusantium veniam.',
  },
  {
    title: "Let's have a great time",
    start: 'Nov 18, 2020',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus',
  },
];
