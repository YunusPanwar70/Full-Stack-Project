import React from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../context/auth.js';
function HomePage() {
    const [auth] = useAuth();
    return (
        <Layout title={'Best Offers'}>
            <h1>Home page</h1>
            <pre>{JSON.stringify(auth, null, 4)}</pre>
        </Layout>
    );
}
export default HomePage;