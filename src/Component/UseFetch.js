
import { useState } from 'react'

// import data from '/db.json'
// console.log(data)

const useFetch = () => {

    const [data] = useState(
        {
            "data": {
                "profile": {
                    "image1": "https://www.paragyte.com/img/React_Banner.png",
                    "image2": "/image/profile_pic.jpg",
                    "name": "Abdul Majed",
                    "curjob": "Inventory Controler & Junior Accountent",
                    "country": "pakistan"
                },

                "about": {
                    "title": "About",
                    "description": "Alhamdulillah I have been working with Baitul ilm Publisher for one year as an Inventory Controller and Junior Accountant. Apart from this I am also doing an internship in TECHWARD for front end development۔ As far as my education is concerned, I have completed Alhamdulillah Dars- Nizami course from a madrassa(from Jamia Binori Town, Karachi) based on which I have been awarded the equivalent of MA islamiat by HEC and Karachi University.Also I have studied up to Regular Intermediate and intend to study further."
                },
                "experience": {
                    "title": "Experience",
                    "data": [
                        {
                            "image": "/image/mbi.webp",
                            "company": "Maktabah Bait-ul-ilm (Al -Badar School)",
                            "name": "Inventory Controller and Junior Accountant of WareHouse",
                            "dateRange": "May 2021 - Present"

                        }
                    ]
                },
                "education": {
                    "title": "Education",
                    "data": [
                        {
                            "image": "/image/college.jpg",
                            "company": "Goverment Boys Degree College",
                            "name": "Intermediat",
                            "dateRange": "2021 - 2022"
                        },
                        {
                            "image": "/image/binori_town.jpg",
                            "company": "Jmaia Binori Town",
                            "name": "Darse - Nizami",
                            "dateRange": "2012 - 2020"
                        }
                    ]
                },
                "skills": {
                    "title": "Skills",
                    "skillsData": ["FrontEnd Web Development", "Javascript (Intermediat)", "ReactJs (Intermediat)", "ReactJs (Intermediat)", "Microsoft Office", "inPage", "Adobe illustrator"]
                },
                "sidebar": {
                    "title": "people you may know",
                    "sidebarData": [
                        {
                            "image": "https://img.freepik.com/free-vector/creative-idea_23-2147493661.jpg?size=338&ext=jpg&ga=GA1.2.986354211.1669272779&semt=sph",
                            "name": "Hashir",
                            "Designation": "Bait-ul-ilm Publishers (Al -Badar School)"
                        },
                        {
                            "image": "https://img.freepik.com/free-vector/creative-idea_23-2147493661.jpg?size=338&ext=jpg&ga=GA1.2.986354211.1669272779&semt=sph",
                            "name": "Hashir",
                            "Designation": "Bait-ul-ilm Publishers (Al -Badar School)"
                        },
                        {
                            "image": "https://img.freepik.com/free-vector/creative-idea_23-2147493661.jpg?size=338&ext=jpg&ga=GA1.2.986354211.1669272779&semt=sph",
                            "name": "Hashir",
                            "Designation": "Bait-ul-ilm Publishers (Al -Badar School)"
                        }

                    ]
                }

            }
        }

    )

    return data;
}

export default useFetch;

    // useEffect(() => {
    //     fetch(' http://localhost:8000/data').then(res => {
    //         if (!res.ok) {
    //             throw Error('could not fetch the data for that resource')
    //         } return res.json()
    //     }).then(data => {
    //         setData(data)
    //     }).catch((err) => console.log(err))
    // }, [])