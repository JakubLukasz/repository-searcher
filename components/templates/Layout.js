import React from 'react'
import NavBar from '../NavBar';
import { ApolloProvider } from '@apollo/client';
import {client} from '../../apollo/client'
import Head from 'next/head';

const Layout = ({children}) => {
    return (
        <ApolloProvider client={client}>
            <Head>
                <title>Repository Searcher</title>
                <meta name="author" content="Jakub Łukaszewski" />
                <meta name="keywords" content="Github repository searcher" />
                <link rel="shortcut icon" href="githublogo.svg" />
            </Head>
            <NavBar />
            <main className="main">
                {children}
            </main>
        </ApolloProvider>
    )
}

export default Layout;
