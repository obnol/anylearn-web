import { Card, CardContent, CardHeader, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const OfferCard = ({offer}) =>
{
    const classes=useStyles();
    return(
        <div className='flex flex-col justify-center items-center pt-24 text-2xl font-medium'>            
            <Card   className={classes.root} container spacing={3}>
            <CardMedia
                className={classes.media}
                component="img"
                image={offer.image}
                alt="BASED"
                />
            <CardContent>
                <Typography variant="title">
                    {offer.title}
                </Typography>
            </CardContent>
            </Card>
        </div>
    );
}

export default OfferCard;