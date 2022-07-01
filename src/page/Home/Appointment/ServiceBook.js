import React from 'react';

const ServiceBook = ({service}) => {
    const {name, slots} = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 className='text-center text-success font-bold text-xl'>{name}</h2>
          <p>{slots.length ? <span>{slots[0]}</span>: <span className='text-error'>Try Another date </span>}</p>
          <p>{slots.length} {slots.length > 1 ? 'spaces': 'spaces Not'} Available</p>
           <div class="card-cations text-center">
            <button
            disabled={slots.length===0} className="btn btn-success ">BOOK APPOINTMENT</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceBook;