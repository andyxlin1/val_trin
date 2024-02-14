import React from "react";
import "./Final.css"; // Import CSS file for styling
import dinner from "../resources/SamHoWon_PChang_2123.jpg"
import view from "../resources/Twin_Peaks.JPG"
import sunset from "../resources/ocean_beach.jpg"
import dessert from "../resources/dessert.jpeg"
import activity from "../resources/golfing.jpg"
import ending from "../resources/ending_thanks.gif"
function Final() {
  return (
    // if ur looking at this in depth, this is bad coding. you should make a different component called card and pass in the image, title, and description as
    //props. then you can have multiple <Card image"path" Title = "text" Description = "text"> instead of having to repeat the same html over and over. 
    <>
        <h1 style={{color: "purple"}}>HERE'S THE PLAN :)</h1>
        <div className="card-container">
            <div className="card">
                    <img
                        src={activity}
                        alt="Minigolf"
                        className="card-image"
                    />
                    <div className="card-text">
                        <h2>Activity</h2>
                        <p>Mini Golf</p>
                    </div>
            </div>
            <div className="card">
                <img
                    src={sunset}
                    alt="Ocean Beach"
                    className="card-image"
                />
                <div className="card-text">
                    <h2>Sunset</h2>
                    <p>Ocean Beach</p>
                </div>
            </div>
            <div className="card">
                <img
                    src={dinner}
                    alt="Sam Ho Won"
                    className="card-image"
                />
                <div className="card-text">
                    <h2>Dinner</h2>
                    <p>Sam Ho Won</p>
                </div>
            </div>

            <div className="card">
                <img
                    src={dessert}
                    alt="U Dessert"
                    className="card-image"
                />
                <div className="card-text">
                    <h2>Dessert</h2>
                    <p>U Dessert Story</p>
                </div>
            </div>

            <div className="card">
                <img
                    src={view}
                    alt="Twin Peaks"
                    className="card-image"
                />
                <div className="card-text">
                    <h2>View Point</h2>
                    <p>Twin Peaks</p>
                </div>
            </div>
        </div>
        <img style={{height: "400px"}}src={ending}></img>
    </>
  );
}

export default Final;