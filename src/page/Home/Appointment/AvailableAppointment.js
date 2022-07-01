import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ServiceBook from './ServiceBook';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('servcies.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    console.log(services);
    return (
        <div>
            <h1 className='text-center text-success font-bold text-xl'>Your have selected: {format(date, "PP")}.</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(servcie => <ServiceBook id={servcie._id}
                    service={servcie}
                    ></ServiceBook>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;