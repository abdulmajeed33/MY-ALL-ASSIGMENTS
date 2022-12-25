
import React from 'react';


const ProfileDescription = ({ title, data }) => {

    // const [profiledesc] = useState([{
    //     image: "https://img.freepik.com/free-vector/watercolor-literature-illustration_52683-81540.jpg?size=626&ext=jpg&ga=GA1.2.986354211.1669272779&semt=sph",
    //     Distination: 'Inventory Controller and Junior Accountant of WareHouse',
    //     Company: 'Bait-ul-ilm Publishers (Al -Badar School)',
    //     Duration: 'May 2021 - Present'

    // }])

    // const abc = profiledesc.map(info => console.log(info.Duration))

    return (
        data ?
            < div className="profile-description" >
                <h2>{title}</h2>
                {
                    data && data.map((info, index) => (
                        < div key={index}>
                            < div className="profile-desc-row" key='1' >
                                <img className='publisher-img' src={info.image} alt="" />
                                <div>
                                    <h3>{info.company}</h3>
                                    <b>{info.name}</b>
                                    <b> {info.dateRange} </b>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            : ''

    );


}

export default ProfileDescription;