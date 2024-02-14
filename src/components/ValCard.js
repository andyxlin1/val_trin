import "./ValCard.css"
import React from "react";
import val_image from "../resources/val_image.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ValCard() {
    const navigate = useNavigate();
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
        navigate("/date")
    }
    return (
        <>
            <div>
                <img src={val_image} alt="Will you be my Valentine?" />
                <div>
                    <button style = {{marginRight: '100px'}}className="button-42" onClick={onClickYes}> Yes </button>
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