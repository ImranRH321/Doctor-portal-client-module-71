import React from 'react';
import Info from '../../Info/Info/Info';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Contect from '../Contect/Contect';
import Footer from '../Footer/Footer';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import Testmonials from '../Testmonials/Testmonials';
import TetchServices from '../TetchServices/TetchServices';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <ServiceInfo></ServiceInfo>
            <TetchServices></TetchServices>
            <Appointment></Appointment>
            <Testmonials></Testmonials>
            <Contect></Contect>
            <Footer></Footer>

        </div>
    );
};
 
export default Home; 