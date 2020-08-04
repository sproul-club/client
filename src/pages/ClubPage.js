import React from "react"
import './ClubPage.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';

const testList = ['1','2','3','4']


const accordList = testList.map((string) =>
    <Accordion allowZeroExpanded >
        <AccordionItem key={string}>
            <AccordionItemHeading>
                <AccordionItemButton> 
                    test
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                test2
            </AccordionItemPanel>
        </AccordionItem>
    </Accordion>)
    
function ClubPage(props) {

    const tagList = props.data.tags.map((tag) =>
        <div className="tag"> {tag} </div>
    )

    const appReq = props.data.reqApp ? 
        <div className="tag" id="app-req">✎ Requires App</div> : 
        <div className="tag" id="app-not-req">😊 No App Required</div>

    const clubOpen = props.data.open ?
        <div className="tag" id="open-tag">✓ Taking New Members</div> :
        <div className="tag" id="not-open-tag">✗ Not Taking New Members</div>

    return(
        <div>
            <div className="header-img">
            </div>

            <div className="flex-container-left">
                <div className="logo-box">
                    <img className="logo" src={require("./assets/ethicalLogo.jpg")}/>
                    <div className="club-info-flex">
                        <div className="club-title">
                            {props.data.name}
                        </div>
                        <div className="tags-flex">
                            {tagList}
                        </div>
                        <div className="app-flex">
                            {appReq}
                            {clubOpen}
                        </div>
                        
                    </div>      
                </div>
                <div className="desc-box">
                    <p>Description</p>
                    <body className="desc-text">
                        {props.data.desc}
                    </body>
                </div>
                <div className="events-box">
                    <p>Events</p>
                    {accordList}
                </div>
            </div>

            <div className="flex-container-right">
                <div className="contact-box">
                    <p>Contact Us</p>
                    <div className="link-flex">
                        <img className="link-image" src={require('./assets/linkImages/webLink.png')}/>
                        <img className="link-image" src={require('./assets/linkImages/emailLink.png')}/>
                        <img className="link-image" src={require('./assets/linkImages/igLink.png')}/>
                        <img className="link-image" src={require('./assets/linkImages/fbLink.png')}/>
                        <img className="link-image" src={require('./assets/linkImages/twtLink.png')}/>
                    </div>
                </div>
                <div className="resources-box">
                    <p>Resources</p>
                </div>
            </div>            
        </div>
    );
}
 
export default ClubPage;
