import React, { useState } from 'react';

const Register = () => {
  const [userType, setUserType] = useState('Joueur');

  return (
    <div style={{ backgroundColor: '#4D2672', padding: '20px', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
      <img src="/front/components/images/logo-transparent-svg.svg" alt="Logo" style={{ width: '100px', height: '100px', marginBottom: '20px' }} />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <button style={{ backgroundColor: '#FAEBD7', padding: '10px 20px', borderRadius: '20px', border: 'none', marginRight: '10px', cursor: 'pointer' }} onClick={() => setUserType('Joueur')}>Joueur</button>
        <button style={{ backgroundColor: '#FAEBD7', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer' }} onClick={() => setUserType('Studio')}>Studio</button>
      </div>
      {userType === 'Joueur' && (
        <div>
          <input type="text" placeholder="Username" style={{ marginBottom: '10px', padding: '5px', borderRadius: '5px', border: 'none' }} />
          <input type="password" placeholder="Password" style={{ marginBottom: '10px', padding: '5px', borderRadius: '5px', border: 'none' }} />
          <input type="password" placeholder="Confirm Password" style={{ marginBottom: '10px', padding: '5px', borderRadius: '5px', border: 'none' }} />
        </div>
      )}
      {userType === 'Studio' && (
        <div>
          <input type="text" placeholder="Studio Name" style={{ marginBottom: '10px', padding: '5px', borderRadius: '5px', border: 'none' }} />
        </div>
      )}
      <button style={{ backgroundColor: '#FAEBD7', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>Sign Up</button>
      <p style={{ marginTop: '10px', color: '#FAEBD7', cursor: 'pointer' }}>Already have an account? Click here!</p>
    </div>
  );
}

export default Register;
