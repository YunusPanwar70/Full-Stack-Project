import React from 'react';
import { NavLink } from 'react-router-dom';

function UserMenu() {
    return (
        <div className="text-center">
            <div class="list-group">
                <h4>Dashboard</h4>
                <NavLink to='/dashboard/user/profile' className="list-group-item list-group-item-action">Profile</NavLink>
                <NavLink to='/dashboard/user/orders' class="list-group-item list-group-item-action">Orders</NavLink>
            </div>
        </div>
    );
}
export default UserMenu;