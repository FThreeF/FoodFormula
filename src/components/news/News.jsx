import React from 'react';
import cl from './News.module.css';

const News = () => {
  return (
    <div className={cl.news}>
      <iframe
        className={cl.iframe}
        src='https://ria.ru/tag_eda/'
        width='100%'
        height='100%'
        frameborder='0'
      ></iframe>
    </div>
  );
};

export default News;
