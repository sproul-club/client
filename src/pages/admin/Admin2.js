import React, { useEffect, useState } from 'react';
import './Admin2.css';
import { loadProfile } from '../../actions/profile';
import { connect } from 'react-redux';

const Admin2 = ({ profile, events, resources, loadProfile }) => {
  useEffect(() => {
    if (profile && profile.link_name && profile.link_name.length === 0) loadProfile();
  }, [loadProfile, profile]);

  const [tab, setTab] = useState('overview')
 
  return (
      <div className="container">
        <div className="admin-header">
          <div className="admin-header-image">
            <img src="" alt="Admin image"/>
          </div>
          <div className="header-info">
            <div className="header-toprow">
              <img src="" alt=""/>
              <div className=""></div>
            </div>
            <div className="header-nav">
              <span onClick={()=>setTab('overview')}>Overview</span>
              <span onClick={()=>setTab('recruitment')}>Recruitment</span>
              <span onClick={()=>setTab('events')}>Events</span>
            </div>
          </div>

          {tab === 'overview' &&
            <div>Overview</div>
          }
          {tab === 'recruitment' &&
            <div>Recruitment</div>

          }
          {tab === 'events' &&
            <div>Events</div>

          }

        </div>
      </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  events: state.profile.events,
  resources: state.profile.resources,
});

export default connect(mapStateToProps, { loadProfile })(Admin2);
