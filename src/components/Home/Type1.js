import React from 'react';
import Typewriter from "typewriter-effect";

const Type1 = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    'comming soon....',
                    'You will get react.js related content',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 20,
            }}
        />
    );
};

export default Type1;