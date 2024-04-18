import React, { useState } from 'react'
import { useActionData } from 'react-router-dom'

const Admin= () => {
  const[menuItems,setMenuItems]=useState([]);
  const handleMenuItemAdd = () => {

  };
  const handleMenuItemDelete = (itemId) => {

  };
  return (
    <div>
        <h1>Admin Panel</h1>
    <div>
      <h2>Add New Menu Item</h2>
      <button onClick={handleMenuItemAdd}>Add New Item</button>
      </div>
      <div>
        <h2>Menu Items</h2>
        <ul>
          {menuItems.map(item=>( 
            <li key={item._id}>
              {item.name}-{item.price}
              <button onClick={()=>handleMenuItemDelete(item._id)}>Delete</button>
            </li>

          ))}
        </ul>
        </div>
         </div>
  );
};

export default Admin;