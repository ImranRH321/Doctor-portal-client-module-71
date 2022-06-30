import React from 'react';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Banner from '../Banner/Banner';
import Contect from '../Contect/Contect';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import Testmonials from '../Testmonials/Testmonials';
import TetchServices from '../TetchServices/TetchServices';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <TetchServices></TetchServices>
            <MakeAppointment></MakeAppointment>
            <Testmonials></Testmonials>
            <Contect></Contect>
            <Footer></Footer>

        </div>
    );
};
 
export default Home; 