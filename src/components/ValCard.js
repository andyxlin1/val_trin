import "./ValCard.css"
import React from "react";
import val_image from "../resources/val_image.png"
import { useState } from "react";

function ValCard() {

    const [buttonStyle, setButtonStyle] = useState({
        position: 'relative',
        left: 0,
        top: 0
    });


    const teleportButton = () => {
        const randomLeft = Math.random() * 400; // 
        const randomTop = Math.random() * 200; 

        setButtonStyle({
            ...buttonStyle,
            left: randomLeft,
            top: randomTop
        });
    };

    const onClickYes = () => {
        // handle routing to go to different endpoint
    }
    return (
        <>
            <div>
                <img src={val_image} alt="Will you be my Valentine?" />
                <div>
                    <button style = {{marginRight: '100px'}}className="button-42"> Yes </button>
                    <button
                    className="no-button"
                    style={buttonStyle}
                    onMouseEnter={teleportButton}>
                    No
                    </button>
                </div>
        </div>
        </>
    )
}


export default ValCard;