import React from 'react'



const MainProfile = ({ data }) => {

    return (

        data ?
            <div>
                {
                    data &&
                    <div >
                        <div className="profile_container" key='1'>
                            <img src={data.profile.image1} alt="" width='100%' height='' />
                        </div>
                        <div className="profile_container_inner">
                            <img className='profile-pic' src={data.profile.image2} alt="" />
                            <h1>{data.profile.name}</h1>
                            <b>{data.profile.curJob} </b>
                            <p>{data.profile.country} <a href="/"> contact info</a></p>
                        </div>
                    </div>

                }
            </div >
            : ""
    );
}

export default MainProfile;


// return (

//     data ?
//         <div>
//             {
//                 data && data.map((M, index) => (
//                     <div key={index}>
//                         <div className="profile_container" key='1'>
//                             <img src={basicInfo[0].image} alt="" width='100%' height='100%' />
//                         </div>

//                         <div className="profile_container_inner">
//                             <img className='profile-pic' src="https://img.freepik.com/free-vector/creative-idea_23-2147493661.jpg?size=338&ext=jpg&ga=GA1.2.986354211.1669272779&semt=sph" alt="" />
//                             <h1>{basicInfo[0].name}</h1>
//                             <b>{basicInfo[0].curJob} </b>
//                             <p>{basicInfo[0].country} <a href="/"> contact info</a></p>
//                         </div>
//                     </div>
//                 ))
//             }
//         </div >
//         : ""
//  );
// }
