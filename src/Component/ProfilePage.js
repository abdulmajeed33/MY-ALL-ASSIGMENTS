
import ".././css/Profile.css"
import About from './About';
import MainProfile from './MainProfile';
import ProfileDescription from './ProfileDescription';
import ProfileFooter from "./ProfileFooter";
// import ProfileSidebar from './ProfileSidebar';
import Skills from "./Skills";
import useFetch from "./UseFetch";









const ProfilePage = () => {
    const { data } = useFetch()
    return (
        <div className='container'>
            <div className="profile_main">
                {data ?
                    <div>
                        <MainProfile data={data} />
                        <About data={data} />
                        <ProfileDescription data={data.experience.data} title={data.experience.title} />
                        <ProfileDescription data={data.education.data} title={data.education.title} />
                        <Skills data={data.skills.skillsData} title={data.skills.title} />
                        <ProfileFooter />
                    </div>
                    : ''}
            </div>
            {/* <div>{data ?
                    <ProfileSidebar data={data.sidebar.sidebarData} title={data.sidebar.title} />
                    : ''}
                </div> */}
        </div >

    );
}

export default ProfilePage;