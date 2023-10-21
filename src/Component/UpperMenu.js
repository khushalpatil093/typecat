import React from "react";
import { useTestMode } from "../Context/TestModeContext";

const UpperMenu = ({countdown}) => {

    const {setTestTime} = useTestMode();

    const countDown = (e)=> {
        setTestTime(Number(e.target.id));
    }

    return (
        <div className="upper-menu">
            <div className="counter">
                {countdown}
            </div>
            <div className="modes">
                <div className="time-mode" id={15} >15s</div>
                <div className="time-mode" id={30} >30s</div>
                <div className="time-mode" id={60} >60s</div>
            </div>

        </div>
    )
}

export default UpperMenu;