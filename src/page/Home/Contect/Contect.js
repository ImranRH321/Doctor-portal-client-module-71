import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contect = () => {
    return (
      <div className='mt-40'>
       
        <div 
        style={{
            background: `url(${appointment})`
        }}
        class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div class="card-body">
                <div>
                <h2 className='text-success font-bold text-center'>Context us</h2>
              <h2 className='text-3xl text-white my-2'> Stay connected with us</h2>
                </div>
              <div class="form-control">
                <input type="text" placeholder="Enter Your Email" class="input input-bordered" />
              </div>
              <div class="form-control">
                <input type="text" placeholder="Subject" class="input my-5 input-bordered" />
            
                <textarea class="rounded p-2"  name="" placeholder='Your messages' id="" cols="30" rows="5"></textarea>
              </div>
              <div class="form-control mt-6 w-25">
                <button className='btn btn-primary' type='submit'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Contect;