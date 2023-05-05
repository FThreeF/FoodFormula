import React, { useState } from 'react';
import cl from './Autorization.module.css';

const Autorization = ({ status, setStatus, setProfile }) => {
  const [input, setInput] = useState({ name: '', email: '' });


  const handler = (e) => {
    e.stopPropagation();
  }

  const onAutorizationHandler = () => {
    setProfile(input);
    setStatus(false);
    setInput({ name: '', email: '' })
  }
  return (
    <div onClick={() => setStatus(false)} className={[cl.autorization, status && cl.active].join(' ')}>
      <div onClick={handler} className={[cl.block, status && cl.active].join(' ')}>
        <input
          value={input.name}
          onChange={(e) => {
            setInput({ ...input, name: e.target.value });
          }}
          placeholder='Имя'
          className={cl.input}
          type='text'
        />
        <input
          value={input.email}
          onChange={(e) => {
            setInput({ ...input, email: e.target.value });
          }}
          placeholder='Почта'
          className={cl.input}
          type='email'
        />
        <button onClick={onAutorizationHandler} className={cl.button}>
          Войти
        </button>
      </div>
    </div>
  );
};

export default Autorization;
