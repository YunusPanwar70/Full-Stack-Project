import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
function PageNotFound() {
    return (
        <Layout title={'go back- page not found'}>
            <div className="pnf">
                <h1 className="pnf-tittle">404</h1>
                <h2 className="png-heading">Oops ! Page Not Found</h2>
                <Link to="/" className='pnf-btn'>Go Back</Link>
            </div>
        </Layout>
    );
}
export default PageNotFound;