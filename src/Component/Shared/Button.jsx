import React, { version } from "react";
import propTypes from "prop-types";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function Button({children,version="primary",type="button",isDisabled=false}){
    return(
        <button type={type} className={`btn btn-${version}`}> {children}</button>

    )
}

Button.propTypes={
    childern: propTypes.node.isRequired,
    version:propTypes.string,
    type:propTypes.string,
    isDisabled:propTypes.bool,
    
}
export default Button;