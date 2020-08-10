export const catalogTestApi = (searchInput) => {
  const { name, tags, app_req, status } = searchInput;
  console.log('searched: ', name, tags, app_req, status);

  const filtered = Object.keys(catalogData)
    .map((key) => catalogData[key])
    .filter((club) => club.name === name);

  console.log(filtered);
  return filtered;
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
