import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage = `https://images.unsplash.com/photo-1556156653-e5a7c69cc263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80`;

const styles = theme => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
    },
    button: {
        minWidth: 200,
    },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
        },
    },
    more: {
        marginTop: theme.spacing(2),
    },
});

function ProductHero(props) {
    const {classes} = props;


    return (
        <ProductHeroLayout backgroundClassName={classes.background}>
            <img style={{display: 'none'}} src={backgroundImage} alt="increase priority"/>
            <Typography color="inherit" align="center" variant="h2" marked="center">
                Save time on permit corrections
            </Typography>
            <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                Run your blueprints through an automated test framework
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                className={classes.button}
                onClick={props.goToResults}
            >
                Start
            </Button>
            <Typography variant="body2" color="inherit" className={classes.more}>
                Upload your blueprint
            </Typography>
        </ProductHeroLayout>
    );
}

ProductHero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
