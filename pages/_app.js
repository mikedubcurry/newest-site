import { Layout } from '../components/Layout';
import '../styles/global.css';

export default ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};
