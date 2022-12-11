import React from 'react';
import Type1 from '../Home/Type1';
import Particle from '../Particle';

const Blogs = () => {
    return (

        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <h2 style={{ color: '#fff', }}> <Type1 /></h2>

            <Particle />
        </div>
    );
};

export default Blogs;