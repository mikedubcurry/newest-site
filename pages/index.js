import Head from 'next/head';
import React from 'react';
import useSWR from 'swr';
import styles from '../styles/Home.module.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
	const { data, error } = useSWR('/api/blog', fetcher);
	console.log(data);
	if(error) return <div>Error!</div>
	if(!data) return <div>loading...</div>
	return (
		<div>
			<Head>
				<title>Mike_Curry_dev</title>
			</Head>
			<div dangerouslySetInnerHTML={data.posts[0]}/>
		</div>
	);
}
