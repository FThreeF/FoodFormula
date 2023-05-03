import React, { useState } from 'react';
import cl from './Autorization.module.css';

const Autorization = ({ status, setProfile }) => {
  const [input, setInput] = useState({ name: '', email: '' });

  return (
    <div className={cl.autorization}>
      <div className={cl.block}>
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
          type='text'
        />
        <button onClick={() => setProfile(input)} className={cl.button}>
          Войти
        </button>
      </div>
    </div>
  );
};

export default Autorization;
