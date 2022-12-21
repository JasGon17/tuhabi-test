import React from "react";
import { GrTooltip } from 'react-icons/gr';

const ToolTip = () =>{
    const SyledToolTip = {color: "#000", fontSize: "24px" }
    return(
            <GrTooltip styled={SyledToolTip}/>
    )
}

export default ToolTip;