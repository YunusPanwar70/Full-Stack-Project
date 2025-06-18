import React from 'react';
import { NavLink } from 'react-router-dom';
function AdminMenu() {
    return (
        <>
            <div className="text-centet">
                <div class="list-group">
                    <h4>Admin Panel</h4>
                    <NavLink to='/dashboard/admin/create-category' className="list-group-item list-group-item-action"></NavLink>
                    <NavLink to='/dashboard/admin/create-product' class="list-group-item list-group-item-action">Create Product</NavLink>
                    <NavLink to='/dashboard/admin/create-users' class="list-group-item list-group-item-action">Users</NavLink>
                </div>
            </div>
        </>
    );
}
export default AdminMenu;