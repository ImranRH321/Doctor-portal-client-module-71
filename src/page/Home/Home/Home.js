import React from 'react';
import Info from '../../Info/Info/Info';
import Banner from '../Banner/Banner';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import TetchServices from '../TetchServices/TetchServices';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <ServiceInfo></ServiceInfo>
            <TetchServices></TetchServices>
        </div>
    );
};
 
export default Home; 