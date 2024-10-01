import './settings.scss';
import { useState } from 'react';

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

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
          <label htmlFor='emailNotifications'>Email notification:</label>
          <input
            type='checkbox'
            id='emailNotifications'
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Change password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter new password'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='confirmPassword'>Confirm password:</label>
          <input
            type='password'
            id='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm new password'
          />
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
