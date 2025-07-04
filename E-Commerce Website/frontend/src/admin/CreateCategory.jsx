import React from 'react';
import Layout from '../components/Layout';
import AdminMenu from '../components/AdminMenu';

function CreateCategory() {
    return (
        <Layout title={'Dashboard - Create Category'}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-3">
                        <h1>Create Category</h1>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default CreateCategory;