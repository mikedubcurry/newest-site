export const Footer = () => {
	const links = [
		[
			{ link: '/', text: 'Home' },
			{ link: '/games', text: 'Games' },
			{ link: '/blog', text: 'Blog' },
		],
		[
			{ link: 'https://github.com/mikedubcurry', text: 'GitHub' },
			{ link: 'https://twitter.com/mikedubcurry', text: 'Twitter' },
			{ link: '#', text: 'Random Link?' },
		],
	];
	return (
		<footer className="pt-12 pb-6 bg-gradient-to-t from-gray-400 to-transparent grid grid-cols-2 justify-items-center">
			{links.map((ul, i) => {
				return (
					<ul key={i} className="">
						{ul.map(({ link, text }, i) => {
							return (
								<li key={i}>
									<FooterLink link={link} text={text} />
								</li>
							);
						})}
					</ul>
				);
			})}
		</footer>
	);
};

function FooterLink({ link, text }) {
	return <a href={link}>{text}</a>;
}
