import '../styles/globals.css';
import { Header } from '../components';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

function MyApp({ Component, pageProps }) {
    const [session, setSession] = useState(null);

    useEffect(() => {
        setSession(supabase.auth.session());

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <>
            <Header />
            <Component session={session} {...pageProps} />
        </>
    );
}

export default MyApp;
