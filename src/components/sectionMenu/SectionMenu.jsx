import React from 'react';
import cl from './SectionMenu.module.css';
import MyLink from '../UI/myLink/MyLink';
import MyText from '../UI/myText/MyText';

const SectionMenu = ({ section }) => {
  return (
    <div className={cl.sectionMenu}>
      <MyText style={{ fontWeight: '900' }}>{section.title}</MyText>
      <div className={cl.items}>
        {section.links.map((el) => (
          <MyLink key={el.id} href={el.href}>
            {el.title}
          </MyLink>
        ))}
      </div>
    </div>
  );
};

export default SectionMenu;
