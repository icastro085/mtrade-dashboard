import React from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

const isSelected = ({ pathname }, path) => pathname === path;
const items = [
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
                {__(`sidebar.${key}`)}
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
