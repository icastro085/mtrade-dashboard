import React from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

const isSelected = ({ pathname }, path) => pathname === path;

export default function Sidebar() {
  const location = useLocation();

  return (
    <section className="sidebar">
      <ul>
        <li className={classNames({ selected: isSelected(location, '/') })}>
          <a href="/#/"><i className="fas fa-home mr-2" /> Home</a>
        </li>
        <li className={classNames({ selected: isSelected(location, '/category') })}>
          <a href="/#/category"><i className="fas fa-sitemap mr-2" /> Category</a>
        </li>
        <li className={classNames({ selected: isSelected(location, '/product') })}>
          <a href="/#/product"><i className="fas fa-gift mr-2" /> Product</a>
        </li>
      </ul>
    </section>
  );
}
