import React from 'react';


const HeaderOptions = ({ Icons, title }) => {

    return (

        < div className="header_options" >
            <Icons></Icons>
            <span>{title}</span>
        </div >
    );


}

export default HeaderOptions;