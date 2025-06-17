import React from 'react';
import Layout from '../components/Layout';
import AdminMenu from '../components/AdminMenu';
function AdminDashboard() {
    return (
        <Layout>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="card">

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default AdminDashboard;

// 14-15 video waps kanri h