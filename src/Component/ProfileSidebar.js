import React from 'react';

const ProfileSidebar = ({ data, title }) => {
    // console.log(data)
    return (
        data ?
            < div className="profile_sidebar" >
                {data && data.map((info, index) => (

                    < div className="sidebar-people">
                        <h3>{title}</h3>
                        <div className='sidebar-people-row'>
                            <img src={info.image} alt="" />
                            <h2>{info.names}</h2>
                            <p>{info.Designation}</p>
                            <a href="/">Connect</a>
                        </div>
                    </div>
                ))
                }
            </div > : ''


        // profile footer


    );
}

export default ProfileSidebar;