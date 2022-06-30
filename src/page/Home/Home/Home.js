import React from 'react';
import Info from '../../Info/Info/Info';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Contect from '../Contect/Contect';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import TetchServices from '../TetchServices/TetchServices';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <ServiceInfo></ServiceInfo>
            <TetchServices></TetchServices>
            <Appointment></Appointment>
            <Contect></Contect>
        </div>
    );
};
 
export default Home; 