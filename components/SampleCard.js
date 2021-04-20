import Link from 'next/link';

export function SampleCard({ content }) {
	return (
		<li>
			<Link  href="/">
				<a tabIndex={2}>
					<header>{content.title}</header>
					<p>{content.summary}</p>
				</a>
			</Link>
		</li>
	);
}
