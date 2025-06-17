import React from 'react';
import Layout from '../components/Layout';
import AdminDashboard from '../admin/AdminDashboard';
function Dashboard() {
    return (
        <Layout title={'Dashboard - Ecommerce'}>
            <div><AdminDashboard /></div>
        </Layout>
    );
}
export default Dashboard;