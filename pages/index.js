import Head from 'next/head';
import React from 'react';
import useSWR from 'swr';
import { Header, Sections } from '../components';
// import {  } from '../components/Sections';
import styles from '../styles/Home.module.css';

import { fetcher } from '../utils';

export default function Home() {
	const { data: posts } = useSWR('/api/blog', fetcher);
	const { data: samples } = useSWR('/api/samples');
console.log(samples);
	if (!posts) return <div>loading...</div>;
	return (
		<>
			<Head>
				<title>Mike_Curry_dev</title>
			</Head>
			<main className={styles.main}>
				<Header />
				<Sections data={{ posts, samples }} />
			</main>
		</>
	);
}
