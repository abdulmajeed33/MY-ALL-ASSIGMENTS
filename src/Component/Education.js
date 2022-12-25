
// import React, { useState } from 'react';
// import uuid from 'react-uuid';

// const Education = () => {
//     const [education] = useState([{
//         image: 'https://lh3.googleusercontent.com/p/AF1QipM6rtJpy04pgXQ51ipRY67J1v9dI_jjkVqrGNMI=s680-w680-h510',
//         name: 'Goverment Boys Degree College',
//         course: 'Intermediat',
//         years: '2021 - 2022',
//     },
//     {
//         image: 'https://lh5.googleusercontent.com/p/AF1QipNjYOBwlFlPRF8x4FvoJnKOsbTa31DOCHYkwL6S=w141-h176-n-k-no-nu',
//         name: 'Jmaia Binori Town',
//         course: 'Darse - Nizami',
//         years: '2021 - 2022'
//     }
//     ])


//     return (
//         <div className="profile-description">
//             <h2>Education</h2>

//             {education.map((info) => {
//                 return (
//                     <div className="profile-desc-row" key={uuid()}>
//                         < img src={info.image} alt="" />
//                         <div>
//                             <h3>{info.name}</h3>
//                             <b>{info.course}</b>
//                             <b>{info.years}</b>
//                             <hr />
//                         </div>
//                     </div>
//                 )
//             })}
//         </div>
//     );
// }

// export default Education;
//     {/* <div className="profile-desc-row">
//     <img src="https://lh5.googleusercontent.com/p/AF1QipNjYOBwlFlPRF8x4FvoJnKOsbTa31DOCHYkwL6S=w141-h176-n-k-no-nu" alt="" />
//     <div>
//     <h3>Jmaia Binori Town</h3>
//     <b>Darse-Nizami</b>
//     <b>2012 - 2020</b>
//     </div>
// </div> */}