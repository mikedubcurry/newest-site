export default function SampleCard({ sample }) {
	return (
		<li>
			<header>{sample.title}</header>
			<p>{sample.summary}</p>
		</li>
	);
}
