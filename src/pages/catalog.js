import React from 'react';
import "./catalog.css";
import GridComponent from "./GridComponent"
// import ethicalheader from './assets/ethicalheader.png';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import {
    Button,
    Form,
    TextBox,
    CheckBox,
} from 'react-form-elements';
 
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia, 
    Typography,
    Grid
} from "@material-ui/core";
 
// https://10xn41w767.codesandbox.io/#objects
import { Multiselect } from 'multiselect-react-dropdown';
 
const Catalog = () => {
    var tagOptions = [{key: "ASUC", id: 0},
    {key: "Business", id: 1},
    {key: "CalGreek", id: 2},
    {key: "Community Service", id: 3},
    {key: "Computer Science", id: 4},
    {key: "Consulting", id: 5},
    {key: "Cultural", id: 6},
    {key: "Design", id: 7},
    {key: "Engineering", id: 8},
    {key: "Environment & Sustainability", id: 9},
    {key: "Health & Wellness", id: 10},
    {key: "Media & Publication", id: 11},
    {key: "Religious & Spiritual", id: 12},
    {key: "Performing Arts", id: 13},
    {key: "Political", id: 14},
    {key: "Sciences", id: 15},
    {key: "Sports & Recreation", id: 16},
    {key: "Social Good", id: 17},
    {key: "Technology", id: 18}];
 
    var appplicationOptions = ["Requires app", "No app required"];
    var memberOptions = ["Looking for members", "Not looking for members"];
 
    const useStyles = makeStyles({
        root: {
            minWidth: 200,
        },
        media: {
          height: 140,
        },
      });
 
    const classes = useStyles();
  return (
      
      <div className="App">
        <div className="header">
          <a href="/" class="logo">sproul.club</a>
          <div className="header-right">
            <a href="catalog">Catalog</a>
            <a href="login">Club sign in</a>
            <a className="active" href="add">Add a club</a>
          </div>
        </div>
        <div className="content">
            <div className="sidebar">
            <Accordion allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Search
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        <Form>
                            <TextBox name="name" label="" placeholder="Search by name" />
                            <Button>Search</Button>
                        </Form>
                    </p>
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
                    <Multiselect options={tagOptions} selectionLimit="3" displayValue="key" showCheckbox={true} />
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Application Requirements
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    <Form>
                        <CheckBox
                        label="Requires app"
                        isChecked={false}
                        name="checkbox"
                        value="checkbox value"
                        />
                        <CheckBox
                        label="No app required"
                        isChecked={false}
                        name="checkbox"
                        value="checkbox value"
                        />
                    </Form>
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Member Status
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    <CheckBox
                        label="Looking for members"
                        isChecked={false}
                        name="checkbox"
                        value="checkbox value"
                        />
                        <CheckBox
                        label="Not looking for members"
                        isChecked={false}
                        name="checkbox"
                        value="checkbox value"
                        />
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion>
            </div>
            <div className="cards">
                <GridComponent classes={classes}/>
            </div>
        </div>
      </div>
    );
};
 
export { Catalog };
