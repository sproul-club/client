import React, { useState, useEffect } from 'react';
import './Searchbar.css';

import resetFilters from './../../../pages/catalog/Catalog.js'
import formDetails from './../../../pages/catalog/Catalog.js'

import GridComponent from './../../../components/layout/grid/GridComponent.js';
import { connect } from 'react-redux';
import {
  searchClubs,
  clearOrganization,
  loadMoreOrgs,
  setFormDetails,
  loadMoreClubs,
} from './../../../redux/actions/catalog';
import ReactGA from 'react-ga';

// const eventsLoadedAtOnce = 18;

// const Catalog = ({
//   admin,
//   clearOrganization,
//   tagOptions,
//   sizeOptions,
//   loadMoreClubs,
//   num_clubs,
//   formDetails,
//   setFormDetails,
//   num_displayed,
// }) => {
//   const [showStatusDD, setShowStatusDD] = useState(false);
//   const [showAppDD, setShowAppDD] = useState(false);
//   const [showTagsDD, setShowTagsDD] = useState(false);
//   const [showMembersDD, setShowMembersDD] = useState(false);
//   const [showSortDD, setShowSortDD] = useState(false);

  // const {
  //   name,
  //   tags,
  //   appReq,
  //   noAppReq,
  //   recruiting,
  //   notRecruiting,
  //   sort,
  //   members,
  // } = formDetails;

//   // clearing organization to be viewed every time navigate back to club page
//   useEffect(() => {
//     clearOrganization();
//   }, [clearOrganization]);

//   // Listener for when scroll reaches bottom, call the function to load more clubs
//   useEffect(() => {
//     const onScroll = () => {
//       if (
//         window.innerHeight + window.pageYOffset >=
//           document.body.offsetHeight - 0.5 &&
//         num_displayed < num_clubs
//       ) {
//         loadMoreClubs(eventsLoadedAtOnce);
//       }
//     };
//     window.addEventListener('scroll', onScroll);

//     return () => window.removeEventListener('scroll', onScroll);
//   }, [num_displayed, num_clubs, loadMoreClubs]);

//   const resetFilters = () => {
//     setFormDetails({ name: 'name', value: '' });
//     setFormDetails({ name: 'tags', value: 'reset' });
//     setFormDetails({ name: 'appReq', value: false });
//     setFormDetails({ name: 'noAppReq', value: false });
//     setFormDetails({ name: 'recruiting', value: false });
//     setFormDetails({ name: 'notRecruiting', value: false });
//     setFormDetails({ name: 'members', value: 'reset' });
//     setFormDetails({ name: 'sort', value: 'Fresh' });
//   };

//   const toggleTag = (tagLabel) => {
//     setFormDetails({ name: 'tags', value: tagLabel });
//   };

//   const toggleMembers = (tagLabel) => {
//     console.log(tagLabel);
//     console.log(formDetails.members);
//     setFormDetails({ name: 'members', value: tagLabel });
//   };

//   function toggleAppReq() {
//     setFormDetails({ name: 'appReq', value: !appReq });
//     setFormDetails({ name: 'noAppReq', value: false });
//   }

//   function toggleNoAppReq() {
//     setFormDetails({ name: 'appReq', value: false });
//     setFormDetails({ name: 'noAppReq', value: !noAppReq });
//   }

//   function toggleRecruiting() {
//     setFormDetails({ name: 'recruiting', value: !recruiting });
//     setFormDetails({ name: 'notRecruiting', value: false });
//   }

//   function toggleNotRecruiting() {
//     setFormDetails({ name: 'recruiting', value: false });
//     setFormDetails({ name: 'notRecruiting', value: !notRecruiting });
//   }

//   function toggleSort(e) {
//     setFormDetails({ name: 'sort', value: e });
//   }

  function changeSearch(e) {
    setFormDetails({ name: 'name', value: e.target.value })
  }

//   ReactGA.initialize('UA-176775736-1');
//   ReactGA.pageview('/catalog');

            // {/* Search Bar */}
            // <div className="filter search-filter">
            //   <i className="fas fa-search"></i>
            //   <input
            //     type="text"
            //     placeholder="Search"
            //     value={name}
            //     onChange={(e) => changeSearch(e)}
            //     className="search-input"
            //   />
            //   <span className="reset-filters" onClick={() => resetFilters()}>
            //     reset filters
            //   </span>
            // </div>

const Searchbar = () => {
	return (
    <div className="filter search-filter">
      <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search"
          value={formDetails.name}
          onChange={(e) => changeSearch(e)}
          className="search-input"
        />
        <span className="reset-filters" onClick={() => resetFilters()}>
            reset filters
        </span>
    </div>
  );
};


export default Searchbar;

