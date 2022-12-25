import React from 'react';

const Skills = ({ data, title }) => {
    return (
        data ?
            <div className="profile-description">
                <h2>{title}</h2>
                {data && data.map((info, index) => (
                    <a className='skills-btn' href="/" key={index}>{info}</a>
                ))
                }
            </div > : ''
    );
}

export default Skills;