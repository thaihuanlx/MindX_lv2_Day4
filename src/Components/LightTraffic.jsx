import React, { useState } from "react";
import "./LightTraffic.css";

function LightTraffic() {
    const [light, setLight] = useState("red");

    const onClickButton = () => {
        setLight((prevLight) => {
            if (prevLight === "red") {
                return "green";
            } else if (prevLight === "green") {
                return "yellow";
            } else if (prevLight === "yellow") {
                return "red";
            }
        });
    };
    return (
        <div className="container">
            <button className="btn" onClick={onClickButton}>
                Next Traffic Light
            </button>
            <div className={`traffic ${light}`}>
                <div className="light red"></div>
                <div className="light yellow"></div>
                <div className="light green"></div>
            </div>
        </div>
    );
}

export default LightTraffic;
