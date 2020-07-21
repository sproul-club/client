import React from 'react';
import './catalog.css';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import { Form } from 'react-bootstrap';

const Catalog = () => {
    return (
        <div className="App">
        <div className="header">
          <a href="/" class="logo">sproul.club</a>
          <div className="header-right">
            <a href="catalog">Catalog</a>
            <a href="login">Club sign in</a>
            <a className="active" href="signup">Add a club</a>
          </div>
        </div>
        <Accordion allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Search
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <Form>
                        <Form.Group controlId="search">
                            <Form.Control type="search" placeholder="Search" />
                        </Form.Group>
                    </Form>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Club Tags
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Club tags here
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Application Requirement
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Application requirement here
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Membership Status
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Membership status here
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
    );
};

  export { Catalog };