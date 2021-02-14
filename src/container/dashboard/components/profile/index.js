import React from "react";
import { makeStyles, Grid, Typography, Button, Paper, Avatar, Divider, IconButton, Box } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    avatar: {
        height: 100,
        width: 100,
        margin: "30px auto",
    },
    container: {
        padding: theme.spacing(2),
        overflow: "auto",
        backgroundColor: 'white',
        height:'100vh'
    },
    centerAlign: {
        textAlign: "center",
    },
}));

export default function Profile(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <Grid container  >
                <Grid item xs={12} sm={3} md={3} lg={3}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={12}>
                            <Avatar
                                alt="Remy Sharp"
                                className={classes.avatar}
                                src="https://uifaces.co/our-content/donated/VUMBKh1U.jpg"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={9} md={9} lg={9}>
                    <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box display="flex">
                        <IconButton >
                            <ArrowBackIosIcon size="small"/>
                        </IconButton>
                        <Typography variant="h6" style={{margin:'auto 5px'}}>
                                Personel Information
                      </Typography></Box>
                            <Divider light />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Typography variant="h6">SHAHNAD S</Typography>
                            <Typography variant="subtitle1">shahnad@yopmail.com</Typography>
                            <Typography variant="subtitle1">+91 859 293 2234</Typography>
                            <Typography variant="subtitle1">Male / 25</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Typography variant="subtitle1">777 Brockton Avenue</Typography>
                            <Typography variant="subtitle1"> Abington MA 2351</Typography>
                            <Typography variant="subtitle1"> United States of America</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>Company Details</Typography>
                            <Divider light />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Typography variant="subtitle1">ATeam India</Typography>
                            <Typography variant="subtitle1">Technopark, Trivandrum</Typography>
                            <Typography variant="subtitle1">Kerala</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>Membership Details</Typography>
                            <Divider light />
                         </Grid>
                       <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Typography variant="subtitle1">Full-time Member</Typography>
                            <Typography variant="subtitle1">Subscription End On : 25/06/2022 </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
