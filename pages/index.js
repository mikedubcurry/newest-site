import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import dynamic from 'next/dynamic';
import { MDXRemote } from 'next-mdx-remote';

export default ({ source, frontMatter }) => {
	let components = {
		BioPicker: dynamic(() => import('../components/BioPicker')),
	};
	return <MDXRemote {...source} components={components}></MDXRemote>;
};

export const getStaticProps = async ({ params }) => {
	// fetch markdown file for index page from R2 storage
	const filePath = path.join(path.join(process.cwd(), 'markdown'), `index.mdx`);
	const source = fs.readFileSync(filePath);
	const { content, data: scope } = matter(source);
	const mdxSource = await serialize(content, { scope });

	return {
		props: {
			source: mdxSource,
			frontMatter: scope,
		},
	};
};
