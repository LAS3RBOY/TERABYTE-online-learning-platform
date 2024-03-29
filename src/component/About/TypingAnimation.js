import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Learn HTML',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Learn CSS',
                1000,
                'Learn JavaScript',
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.8rem', display: 'inline-block' }}
            repeat={Infinity}
        />
    )
}

export default TypingAnimation