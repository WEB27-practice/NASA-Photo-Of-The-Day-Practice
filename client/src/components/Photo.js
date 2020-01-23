import React from "react";

const Photo = (props) => {
    console.log(props);

    return(
        <div className="photo-box">
            <p>I am the photo box</p>
            <p>{props.data.data.copyright}</p>
            <img className="photo-background" alt="Daily photograph from NASA" src={props.data.data.url}/>
        </div>
    )
};

export default Photo;