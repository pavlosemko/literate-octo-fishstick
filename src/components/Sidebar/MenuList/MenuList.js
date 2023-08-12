import React from "react";
import MenuItem from "./MenuItem/MenuItem";

function MenuList({ menuItems }) {
  return (
    <nav className="my-4">
      <ul>
        {menuItems.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </ul>
    </nav>
  );
}

export default MenuList;
