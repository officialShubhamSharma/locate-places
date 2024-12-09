import React from 'react';

const Loading = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <h2 style={styles.blinkingText}>Loading...</h2>
    </div>
  );
};

// Define styles including the blinking animation
const styles = {
  blinkingText: {
    fontSize: '2rem',
    animation: 'blink 1.5s infinite', // Blinking effect
    color: 'black'
  }
};

// Inject keyframes into CSS using JavaScript
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes blink {
    0% { opacity: 1; color: black; }
    50% { opacity: 0.3; color: grey; }
    100% { opacity: 1; color: black; }
  }
`, styleSheet.cssRules.length);

export default Loading;
