import Head from 'next/head';
import React from 'react';
import useSWR from 'swr';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

import { fetcher } from '../utils';

export default function Home() {
	const { data, error } = useSWR('/api/blog', fetcher);
	console.log(data);
	if (error) return <div>Error!</div>;
	if (!data) return <div>loading...</div>;
	return (
		<>
			<Head>
				<title>Mike_Curry_dev</title>
			</Head>
			<main className={styles.main}>
				<Header />
			</main>
		</>
	);
}
