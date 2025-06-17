import React from 'react';
import { NavLink, Link } from 'react-router-dom';
function AdminMenu() {
    return (
        <>
            <div className="text-centet">
                <div class="list-group">
                    <h4>Admin Panel</h4>
                    <Link to='/dashboard/admin/create-category' class="list-group-item list-group-item-action">Create Category</Link>
                    <Link to='/dashboard/admin/create-product' class="list-group-item list-group-item-action">Create Product</Link>
                    <Link to='/dashboard/admin/create-users' class="list-group-item list-group-item-action">Users</Link>
                </div>
            </div>
        </>
    );
}
export default AdminMenu;