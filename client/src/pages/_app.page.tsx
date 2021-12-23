import '../../styles/globals.css';
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Head from 'next/head';
import { ProviderComposer, provider } from '../lib/providers';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';


function MyApp( { Component, pageProps }: AppProps ) {
	const client = new ApolloClient( {
		uri  : 'http://localhost:4000/graphql',
		cache: new InMemoryCache()
	} );
	return (
		<Fragment>
			<Head>
				<title>Pouya App</title>
				<meta
					name='viewport'
					content='width=device-width,
					minimum-scale=1, maximum-scale=1, initial-scale=1,
					user-scalable=no, viewport-fit=cover'
				/>
			</Head>
			<ProviderComposer
				providers={[
					provider( ApolloProvider, { client: client } )
				]}>
				<Component {...pageProps} />
			</ProviderComposer>
		</Fragment>

	)
}

export default MyApp
