import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchClubs } from '../actions/catalog';
import './catalog.css';

const Catalog = ({ searchClubs }) => {
  const [name, setName] = useState('');
  const [tags, setTags] = useState('');
  const [appReq, setAppReq] = useState('');
  const [status, setStatus] = useState('');

  const searchAllClubs = () => {
    const tagsArray = tags.split(',');
    const searchParams = { name, tagsArray, appReq, status };

    searchClubs(searchParams);
  };

  return (
    <div className="catalog">
      <input
        type="text"
        placeholder="Club Name"
        className="text-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tags"
        className="text-input"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <div className="radio">
        <label>
          <input
            type="radio"
            value="accepting"
            checked={status === 'accepting'}
            onChange={() => setStatus('accepting')}
          />
          Accepting Apps
        </label>
        <label>
          <input
            type="radio"
            value="not-accepting"
            checked={status === 'not-accepting'}
            onChange={() => setStatus('not-accepting')}
          />
          Not Accepting Apps
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="required"
            checked={appReq === 'required'}
            onChange={() => setAppReq('required')}
          />
          App Required
        </label>
        <label>
          <input
            type="radio"
            value="not-required"
            checked={appReq === 'not-required'}
            onChange={() => setAppReq('not-required')}
          />
          No App Required
        </label>
      </div>

      <button onClick={searchAllClubs}>Search Clubs</button>
      <div>
        {Object.keys(catalogData).map((clubId, i) => {
          const { name, tags, req_app, status } = catalogData[clubId];

          return (
            <div key={i} className="club">
              <div>{name}</div>
              <div>{tags}</div>
              <div>{status ? 'Accepting Apps' : 'Not Accepting Apps'}</div>
              <div>{req_app ? 'Requires App' : 'Does not require app'}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(null, { searchClubs })(Catalog);

const catalogData = {
  1: {
    name: 'EthiCal',
    tags: ['Business', 'Design', 'Environment'],
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
};
