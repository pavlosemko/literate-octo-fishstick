import React from "react";
import "./menu-item.css";
function MenuItem({ item }) {
  return (
    <li key={item.id}>
      <a className="menu-item" href={item.link}>
        {item.title}
      </a>
    </li>
  );
}

export default MenuItem;
