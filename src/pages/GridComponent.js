import React from "react"
import { 
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia, 
    Typography,
    Grid
} from "@material-ui/core";
 
const testList = ["EthiCAL Apparel", "AFX Dance", "Codeology"]
 
function GridComponent(props) {
    
    const GridList = testList.map((string) => 
        <Grid item xs={12} sm={6} md={4}>  
            <Card className={props.classes.root}>
            <CardActionArea>
                <CardMedia
                    style ={{ height: 0, paddingTop: '56%'}}
                    classname={props.classes.media}
                    image={require ("./assets/ethicalheader.png")}
                    title="EthiCAL Apparel Header"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {string}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        tags go here
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Grid>
    )
    return(
        <Grid container spacing={4}>
            {GridList}
        </Grid>
    )
}
export default GridComponent