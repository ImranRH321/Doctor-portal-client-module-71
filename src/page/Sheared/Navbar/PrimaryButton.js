import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
              <button class="btn btn-primary text-white uppercase bg-gradient-to-r from-secondary to-primary">
            {children}
          </button>
        </div>
    );
};

export default PrimaryButton;