import React, { useState } from 'react'


const About = ({ data }) => {

    return (
        data ?
            <div className="profile-description">
                {
                    <div>
                        <h2>{data.about.title}</h2>
                        <p>{data.about.description}</p>
                    </div>
                }
            </div> : ''

    );
}

export default About;