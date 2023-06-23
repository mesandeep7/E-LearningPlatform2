// import ControlledCarousel from './components/CarouselCode/CarouselSection';
// import { HoverNavbarDemo } from './components/HoverNavbarComponentFile/HoverNavbar';
import NavbarSection from './components/FrontPage/NavbarAshmithaCode/NavbarTuition.jsx';
import ContentPage from './components/FrontPage/ContentPage/ContentPage.jsx';
import CoursesCard from './components/FrontPage/secondPage/CoursesCard';
import Card from './components/FrontPage/ThirdPage/MainContent';
// import Login from './components/FrontPage/secondPage/Demo';
// import Footer from './components/Footer/Footer'
import './SecondApp.css';

function SecondApp() {
    return (
        <>
            <div className='frontPageSec'>
                <NavbarSection/>
                <ContentPage />
                <CoursesCard/>
                <Card/>
                {/* <Login/> */}
                {/* <Footer/> */}
            </div>
            {/* <div className='Demo'>
                <ControlledCarousel />
                <div className='MovingCode'>
                    <HoverNavbarDemo />
                </div>
            </div> */}


        </>
    );
}

export default SecondApp;