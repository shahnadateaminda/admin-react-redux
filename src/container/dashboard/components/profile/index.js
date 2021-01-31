import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    header: {
     padding:20
    }
}));

export default function Profile(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const ProfileHeader = () => {
        return (
            <div className={classes.header}>
                   <Typography variant="h5">
                        SHAHNAD SHARAFUDEEN</Typography>
              </div>
        )
    }


    return (
        <Card className={classes.root} variant="outlined">
            <ProfileHeader />
        </Card>
    );
}
