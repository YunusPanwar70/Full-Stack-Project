import React from 'react';
import Layout from '../components/Layout';
import UserMenu from '../components/UserMenu';

function Orders() {
    return (
        <Layout title={'Your Orders'}>
            <div className="container-fluid p-3 m-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>All Orders</h1>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default Orders;