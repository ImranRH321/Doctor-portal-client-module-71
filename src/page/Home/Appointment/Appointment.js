import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Sheared/Navbar/PrimaryButton';

const Appointment = () => {
    return (
        <section
        style={{
            background: `url(${appointment})`
        }}
         className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-110px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-3'>
                <h2 className='text-primary text-xl'>Appointment</h2>
                <p className='my-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus explicabo laudantium officia itaque architecto voluptatem optio sequi adipisci totam enim numquam saepe perspiciatis, at placeat quia! Sint fugit dignissimos vel doloremque, velit accusamus quam, voluptatum incidunt laborum recusandae accusantium doloribus.</p>
                <PrimaryButton>Get Status</PrimaryButton>
            </div>
        </section>
    );
};

export default Appointment;