import { PageViewCounter } from "../components/PageViewCounter";

export default () => (
	<div>
		<h1 className="text-2xl">Hey there!</h1>
		<p>Welcome to my site!</p>
        <PageViewCounter views={10} />
	</div>
);
