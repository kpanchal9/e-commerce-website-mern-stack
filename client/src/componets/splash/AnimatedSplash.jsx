// AnimatedSplash.js

import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useLocation } from 'react-router-dom';
import './AnimatedSplash.css'; // Your CSS file for styling

const AnimatedSplash = () => {
    const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  const splashAnimation = useSpring({
    from: { opacity: 1 },
    to: { opacity: showSplash ? 1 : 0 },
    config: { duration: 1000 },
    onRest: () => setShowSplash(false),
  });

  useEffect(() => {
    // Hide the splash screen after a certain time or on route change
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <animated.div className="animated-splash" style={splashAnimation}>
      {/* Your animated splash screen content */}
      <h1>Welcome to Our E-commerce Site</h1>
      {/* Add any other elements or animations here */}
    </animated.div>
  );
};

export default AnimatedSplash;
