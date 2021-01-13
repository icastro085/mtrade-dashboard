import React from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { t } from 'locale';

interface IIsSelected {
  pathname: string;
}

const isSelected = ({ pathname }: IIsSelected, path: string): boolean => (
  pathname.split('/')[1] === path.split('/')[1]
);

const items: string[][] = [
  [
    'fas fa-home',
    'home',
    '/',
  ],
  [
    'fas fa-sitemap',
    'category',
    '/category',
  ],
  [
    'fas fa-gift',
    'product',
    '/product',
  ],
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <section className="sidebar">
      <ul>
        {
          items.map(([icon, key, link]) => (
            <li
              key={key}
              className={classNames({ selected: isSelected(location, link) })}>
              <a href={`/#${link}`}>
                <i className={classNames('mr-2', icon)} />
                {t(`sidebar.${key}`)}
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
