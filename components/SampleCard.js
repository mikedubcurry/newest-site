export function SampleCard({ content }) {
	return (
		<li>
			<header>{content.title}</header>
			<p>{content.summary}</p>
		</li>
	);
}
