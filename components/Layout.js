import { Header } from './Header';

export const Layout = ({ children }) => {
	return (
		<div className='bg-primary min-h-screen'>
			<Header />
			<main className='flex flex-col items-start px-2'>{children}</main>
		</div>
	);
};
