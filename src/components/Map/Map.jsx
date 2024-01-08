import React from "react";
import GoogleMapReact from "google-map-react";
import {Paper,Typography,useMediaQuery} from "@material-ui/core";   
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"; 
import Rating from "@material-ui/lab";   

import useStyles from "./styles";
const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');


    return (
        
        <div className={classes.mapContainer}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: '983401e460msh98965f9fe8c5d51p11a1bbjsnad940eeff281', }}
        defaultCenter={{ lat: 0, lng: 0 }}
        center={{ lat: 0, lng: 0 }}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}


        onChildClick={''}
        >
        </GoogleMapReact>
        </div>
    );
}
export default Map;