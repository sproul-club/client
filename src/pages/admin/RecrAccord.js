import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
 
import "./RecrAccord.css";
import '../EventAccord.css';
 
function RecrAccord({data}) {
    return (
        <div id="recr-wrap">
            <Accordion className="accordion" allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemButton>
                        <div className="event-container">
                            <div className="event-flex-left"> Event Name</div>
                            <div className="event-flex-right"></div>
                        </div>
                        <div className="accordion__button-club"></div>
                    </AccordionItemButton>
                    <AccordionItemPanel>
                        <hr style={{width: "103%", marginLeft: "-2.5%"}}></hr>
                        <div style={{display: "flex", flexDirection:"row"}}>
                            {/*LEFT SIDE INPUTS*/}
                            <div style={{width: "50%"}}>
                                Name of event *
                                <div>
                                    <input
                                        type="text"
                                        className="recr-input"
                                        id="recr-name-input"
                                        placeholder="Event name"
                                    >
                                    </input>
                                </div>
                                Start *
                                <div className="recr-date-row">
                                    <input
                                        type="date"
                                        className="recr-input"
                                        id="recr-date-input"
                                    >
                                    </input>
                                    <input 
                                        type="time"
                                        className="recr-input"
                                        id="recr-date-input"
                                    >
                                    </input>
                                    <select
                                        className="recr-input"
                                        id="recr-date-input"
                                    >
                                        <option selected disabled hidden>Time zone</option>
                                        <option>PST</option>
                                        <option>EST</option>
                                        <option>GMT</option>
                                    </select>
                                </div>
 
                                End 
                                <div className="recr-date-row">
                                    <input
                                        type="date"
                                        className="recr-input"
                                        id="recr-date-input"
                                    >
                                    </input>
                                    <input 
                                        type="time"
                                        className="recr-input"
                                        id="recr-date-input"
                                    >
                                    </input>
                                    <select
                                        className="recr-input"
                                        id="recr-date-input"
                                    >
                                        <option selected disabled hidden>Time zone</option>
                                        <option>PST</option>
                                        <option>EST</option>
                                        <option>GMT</option>
                                    </select>
                                </div>
                                Link(s)
                                <div>
                                    <select
                                        className="recr-input"
                                        id="recr-link-sel"
                                    >
                                        <option selected disabled hidden>Select link type</option>
                                        <option>Zoom</option>
                                        <option>GCal</option>
                                        <option>FB Event</option>
                                    </select>
                                    <input
                                        type="text"
                                        className="recr-input"
                                        id="recr-link"
                                    >
                                    </input>
                                    <button className="link-del" id="link-remove">x</button>
                                </div>
                                <button className="link-del">+ Add another link</button>
                            </div>
                            {/*RIGHT SIDE INPUTS*/}
                            <div id="recr-right-inp">
                                Description *
                                <div>
                                    <textarea
                                        type="text"
                                        className="recr-input"
                                        id="recr-desc-input"
                                    >
                                    </textarea>
                                </div>
                                <div id="recr-char">
                                    150 characters remaining 
                                </div>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input
                                    type="checkbox"
                                >
                                </input>
                                <p id="inv-only">
                                    Invite Only Event
                                </p>
                                
                                
                            </div>
                            <div id="recr-forge-holder">
                                    <button className="recr-forge">
                                        <img className="recr-img" src={require('../assets/recrDup.PNG')}></img>     
                                    </button>
                                    <button className="recr-forge" >
                                        <img className="recr-img" src={require('../assets/recrOop.PNG')}></img>     
                                    </button>
                                </div>
                            </div>
                        </div>
                    </AccordionItemPanel>
                    
                </AccordionItem>
            </Accordion>
            
        </div>
    );
}
 
export default RecrAccord;