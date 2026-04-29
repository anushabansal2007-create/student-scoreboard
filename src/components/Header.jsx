import React from 'react';

const Header = () => {
  const headerStyle = {
    color: '#E0E7FF', 
    fontSize: '52px',
    fontWeight: '800',
    letterSpacing: '1px',
    margin: '30px 0 10px 0',
    display: 'flex',
    alignItems: 'baseline',
    gap: '15px'
  };

  const scoreboardStyle = {
    color: '#00F3C3', 
    fontWeight: '700',
   
    textShadow: `
      0 0 5px #00F3C3,   /* Inner soft glow */
      0 0 10px #00F3C3,  /* Medium glow */
      0 0 20px #00CBA7,  /* Wide magenta/cyan glow */
      0 0 30px #00CBA7   /* Farthest glow */
    `
  };

  const versionStyle = {
    fontSize: '12px',
    color: '#525C67', 
    marginLeft: 'auto', 
    fontWeight: '400',
    letterSpacing: '2px',
    fontFamily: 'monospace' 
  };

  return (
    <div className="header-wrapper" style={{ display: 'flex', alignItems: 'center', width: '100%', borderBottom: '1px solid #333', paddingBottom: '20px', marginBottom: '30px' }}>
      <h1 style={headerStyle}>
        STUDENT 
        <span style={scoreboardStyle}>SCOREBOARD</span>
      </h1>
      <span className="version-tag" style={versionStyle}>ACADEMIC TERMINAL V2.0</span>
    </div>
  );
};

export default Header;