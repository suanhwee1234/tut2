import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import { IconButton } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({

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
});

const CoffeeCard = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { avatarSrc, title, subtitle, description, imgSrc } = props

    return (
        <Card >
            <CardHeader
                avatar={
                    <Avatar src={avatarSrc} />}
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardMedia
                style={{ height: "150px" }}
                image={imgSrc}

            />

            <CardContent>
                <Typography variant="body2" components="p">
                    {description}
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            <Button size="small">Buy now</Button>
            <Button size="small">offer</Button>
        </Card>
    );
};

export default CoffeeCard;