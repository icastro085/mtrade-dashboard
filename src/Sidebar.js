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
          <a href="/#/">Home</a>
        </li>
        <li className={classNames({ selected: isSelected(location, '/category') })}>
          <a href="/#/category">Category</a>
        </li>
        <li className={classNames({ selected: isSelected(location, '/product') })}>
          <a href="/#/product">Product</a>
        </li>
      </ul>
    </section>
  );
}
