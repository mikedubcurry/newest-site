import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }) => {
	return (
		<div className="bg-primary min-h-screen h-full">
			<Header />
			<main className="flex flex-col relative z-10 pt-24 items-start px-2 prose prose-stone">
				{children}
			</main>
			<Footer />
		</div>
	);
};
