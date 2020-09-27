import {Grid, Button,Card ,CardActions, CardContent, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { Details } from '@material-ui/icons';
import React,{useState, useEffect, Fragment} from 'react';
import { getMatchDetails } from '../api/Api';

const MyCard=({match})=>{

const [details,setDetails]=useState({});
const [open,setOpen]=useState(false);
 const handleClick=(id)=>{
getMatchDetails(id).then((data)=>{console.log("MATCH DATA",data)
setDetails(data);
handleOpen()
})
.catch(error=>console.log(error))
}
    const getMatchCard=()=>{
    return(
        <Card style={{marginTop: 20}}>
            <CardContent>
            <Grid container justify="center" alignItems="center" spacing={4}>
                <Grid item>
                    <Typography variant="h5">{match["team-1"]}</Typography>
                </Grid>

                 <Grid item>
                    <img style={{width:185}} src={require("../img/vs.png")} />
                 </Grid>
                 <Grid item>
                     <Typography variant="h5">{match["team-2"]}</Typography>
                 </Grid>
                 
            </Grid>
            
            </CardContent>
            <CardActions>
               <Grid container justify="center">
               <Button onClick={()=>{
                   handleClick(match.unique_id)
               }} variant="contained" color="primary" >Show Details </Button>
                <Button style={{marginLeft:5}} variant="contained" color="primary" >Start Time {new Date(match.dateTimeGMT).toLocaleDateString()}</Button>

               </Grid>
            </CardActions>
        </Card>
    );
};


const handleClose=()=> {
setOpen(false)
}
const handleOpen=()=> {
setOpen(true)
}
const getDialog=()=>(
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{"Match Details..."}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                    <Typography>{details.stat}</Typography>
                    <Typography>
                        Match
                         <span style={{fontStyle:"italic",fontWeight:"bold"}}>
                        {details.matchStarted ? "Started" : "Still not Start"}
                        </span>
                    </Typography>


                    <Typography>
                        Score
                         <span style={{fontStyle:"italic",fontWeight:"bold"}}>
                        {details.score}
                        </span>
                    </Typography>

            </DialogContentText>
        </DialogContent>
        <DialogActions>

            <Button onClick={handleClose} close="primary" autoFocus>
                Close
            </Button>
        </DialogActions>
    </Dialog>
)

return (
    <Fragment>
    {getMatchCard()}
    {getDialog()}
    </Fragment>
    );
};
export default MyCard;