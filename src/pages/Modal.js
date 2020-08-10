import React from "react";
import { withRouter } from "react-router-dom";
import './modal.css';
import ClubPage from './ClubPage.js';

const data = {name: "EthiCAL Apparel", 
              desc: "We are a student-run social enterprise that provides affordable, high-quality screen printing and free design services on ethically-made clothing. We help create custom designs for organizations and sell our own clothing and sticker line through our online shop. Our profits are directed to a variety of social good initiatives, from Kiva microloans to disadvantaged entrepreneurs to partnerships with local organizations. Members develop their design skills, business knowledge, and social awareness.",
              tags: ["Business", "Design", "Environmental"],
              reqApp: true,
              open: true,
              events: 
              [{name: "Infosession #1", time: "Tues, Jul 22, 6:30 - 7:30 PT"},
              {name: "Infosession #2", time: "Thurs, Jul 22, 8:00 - 9:30 PT"},
              {name: "General Meeting", time: "Tues, Jul 22, 4:30 - 6:30 PT"},
              {name: "Social Night", time: "Mon, Jul 22, 9:30 - 10:30 PT"} ],
              resources: 
              [{name:"Design Workshop Slides", link:"https://www.coolmathgames.com/"},
              {name:"Infosession Slides", link:"https://www.poptropica.com/"},
              {name:"Infosession Recording", link:"https://www.target.com/"}],
              socials:
              [{web: "https://www.pokemon.com/us/", email: "https://www.pokemon.com/us/", ig:"https://www.pokemon.com/us/", fb:"https://www.pokemon.com/us/", twt:"https://www.pokemon.com/us/"}]}

const Modal = ({ match, history }) => {
  const back = e => {
    e.stopPropagation();
    history.push(`/catalog`);
  };
  return (
    <div> 

      <div onClick={back} className="modal-wrapper"/>

      <div className="modal">
        <span class="modal-close" onClick={back}>&times;</span>
        {/* <h1>{match.params.id}</h1> */}
        <ClubPage data={data} />
      </div>

      
    
    </div>
    
  );
};
export default withRouter(Modal);
