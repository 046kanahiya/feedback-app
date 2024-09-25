import React from "react";
import PropTypes from "prop-types";
function Header({text="This is default header",bgColor="red",textColor="yellow"}) {
    const headerStyle={
        background:bgColor, 
        color:textColor,
    }
    return (
        <header style={headerStyle}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}
// this is no longer using ---> instead directly pass value in argument 
// Header.defaultProps = {
//     text:'This is default header',
//     bgColor:'red',
//     color:'yellow',
// }
Header.propTypes = {
    text: PropTypes.any,
}
export default Header;