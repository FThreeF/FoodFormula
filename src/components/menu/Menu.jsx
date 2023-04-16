import React, { useState } from 'react';
import cl from './Menu.module.css';
import MyLink from '../UI/myLink/MyLink';
import MyText from '../UI/myText/MyText';
import MyLogo from '../UI/myLogo/MyLogo';
import MyTextLogo from '../UI/myTextLogo/MyTextLogo';
import SectionMenu from '../sectionMenu/SectionMenu';

const Menu = ({ status, setStatus }) => {
  const [section, setSection] = useState([
    {
      id: 0,
      title: 'Основное',
      links: [
        { id: 0, title: 'Профиль', href: '/' },
        { id: 1, title: 'Рецепты', href: '/recipes' },
        { id: 2, title: 'Новости', href: '/news' },
      ],
    },
    {
      id: 2,
      title: 'Мои рецепты',
      links: [
        { id: 0, title: 'Понравившиеся', href: '/' },
        { id: 1, title: 'Мои рецепты', href: '/' },
        { id: 2, title: 'Добавить рецепт', href: '/' },
      ],
    },
  ]);

  return (
    <div className={[cl.menu, status && cl.active].join(' ')}>
      <div className={cl.main}>
        <MyTextLogo />
        <div className={cl.group}>
          {section.map((el) => (
            <SectionMenu key={el.id} section={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
