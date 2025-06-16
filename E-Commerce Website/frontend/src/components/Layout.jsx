import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
function Layout({ children, title, description, keywords, author }) {
    return (
        <div>
            <Helmet>
                <div>
                    <meta charSet='utf-8' />
                    <meta name='description' content={description} />
                    <meta name='keywords' content={keywords} />
                    <meta name={author} content='John Doe' />
                    <title>{title}</title>
                </div>
            </Helmet>
            <Header />
            <main style={{ minHeight: '70vh' }}>{children}</main>
            <Footer />
        </div>
    );
}

Layout.defaultProps = {
    title: "Ecommerce app",
    descriptionL: "Mern stack project",
    keywords: "mern,react,node,mongodb",
    author: "Techinfoyt"
};
export default Layout;