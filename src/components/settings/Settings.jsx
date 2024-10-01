import './settings.scss';
import { useState } from 'react';

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aici poți adăuga logica pentru procesarea setărilor (validare, trimitere la server etc.)
    if (password !== confirmPassword) {
      alert('Parolele nu coincid!');
      return;
    }
    alert('Setările au fost salvate!');
  };

  return (
    <div className='settings'>
      <h1>Settings</h1>
      <form className='settings-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='emailNotifications'>Notificări prin email:</label>
          <input
            type='checkbox'
            id='emailNotifications'
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Schimbă parola:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Introdu noua parolă'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='confirmPassword'>Confirmă parola:</label>
          <input
            type='password'
            id='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirmă noua parolă'
          />
          <button type='submit'>Salvează setările</button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
