import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

console.log('Auth0', process.env.AUTH0_CLIENT_ID);

export default NextAuth({
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER,
        }),
    ],
});
