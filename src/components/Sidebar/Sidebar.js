import React from "react";
import "./sidebar.css";
import MenuList from "./MenuList/MenuList";

function Sidebar() {
  const menuItems = [
    {
      id: 1,
      title: "Головна",
      link: "/",
    },
    {
      id: 2,
      title: "Про нас",
      link: "/about",
    },
    {
      id: 3,
      title: "Послуги",
      link: "/services",
    },
    {
      id: 4,
      title: "Контакти",
      link: "/contact",
    },
  ];
  return (
    <aside className="sidebar">
      <MenuList menuItems={menuItems} />
    </aside>
  );
}

export default Sidebar;
