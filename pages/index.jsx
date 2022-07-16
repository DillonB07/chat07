import Head from 'next/head';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { Account, Auth } from '../components';

const Home = ({ session }) => {
    return (
        <div>
            <Head>
                <title>Chat07</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className="container"
                style={{ padding: '50px 0 100px 0' }}
            ></div>
        </div>
    );
};

export default Home;
