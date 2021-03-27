import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import { useHasMounted, usePrefersReducedMotion } from '../hooks';

import styles from '../styles/Sections.module.css';

export function Sections() {
	const [selected, setSelected] = useState(0);
	const hasMounted = useHasMounted();
	const reducedMotion = usePrefersReducedMotion();
	return (
		<>
			<ExpandableSection
				hasMounted={hasMounted}
				noAnime={reducedMotion}
				selected={selected === 0}
			>
				<section className={styles.first} onClick={() => setSelected(0)}>
					<h2
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								setSelected(0);
							}
						}}
						tabIndex="1"
					>
						Work Experience
					</h2>
				</section>
			</ExpandableSection>
			<ExpandableSection
				hasMounted={hasMounted}
				noAnime={reducedMotion}
				selected={selected === 1}
			>
				<section onClick={() => setSelected(1)} className={styles.second}>
					<h2
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								setSelected(1);
							}
						}}
						tabIndex="2"
					>
						Code Samples
					</h2>
				</section>
			</ExpandableSection>
			<ExpandableSection
				hasMounted={hasMounted}
				noAnime={reducedMotion}
				selected={selected === 2}
			>
				<section onClick={() => setSelected(2)} className={styles.third}>
					<h2
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								setSelected(2);
							}
						}}
						tabIndex="3"
					>
						Cat Pictures
					</h2>
				</section>
			</ExpandableSection>
			<ExpandableSection
				hasMounted={hasMounted}
				noAnime={reducedMotion}
				selected={selected === 3}
			>
				<section onClick={() => setSelected(3)} className={styles.fourth}>
					<h2
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								setSelected(3);
							}
						}}
						tabIndex="4"
					>
						Blog Posts
					</h2>
					{selected === 3 && (
						<p>
							Minim elit esse incididunt magna ullamco. Ea ea proident ex
							commodo id. Pariatur ipsum velit velit proident. Excepteur eiusmod
							eu fugiat sint labore qui minim magna exercitation laborum irure
							aliqua. Officia sit labore exercitation esse et excepteur
							voluptate amet aute aute eiusmod. Anim consectetur reprehenderit
							cupidatat amet fugiat labore non sunt occaecat. Consectetur aliqua
							laboris adipisicing nulla labore commodo sit labore incididunt.
							Fugiat nostrud duis aliquip velit deserunt. Cupidatat proident
							occaecat nostrud dolore ex magna tempor ex. Aute velit Lorem duis
							veniam. Cillum elit deserunt ut veniam do consectetur. Excepteur
							est ea nisi anim quis aliquip culpa est in nulla dolore eiusmod.
							Magna ad aliqua non aliqua. Nisi labore consequat laborum anim
							elit nulla aliqua proident cupidatat labore occaecat eiusmod.
							Eiusmod consequat dolor labore esse. Consectetur Lorem ullamco
							duis ad. Aute incididunt ipsum eiusmod cupidatat proident velit
							nulla do nulla est sunt. Exercitation pariatur ex reprehenderit
							proident proident sint aliquip. Minim proident mollit nulla
							cupidatat et magna ea laboris eiusmod cupidatat mollit dolore
							pariatur voluptate. Irure elit commodo in nulla veniam officia
							voluptate cillum excepteur cupidatat eiusmod incididunt elit
							fugiat. Voluptate mollit deserunt eu sit aliqua veniam sunt sit
							nostrud ipsum tempor. Aliqua reprehenderit non commodo duis
							excepteur fugiat eu quis pariatur minim commodo sunt commodo. Ea
							tempor cupidatat laborum eu deserunt eiusmod ex ipsum sunt ullamco
							quis ad elit. Laborum cupidatat est aliqua commodo consequat id
							elit elit consequat elit irure tempor. Consectetur labore enim id
							do mollit consectetur aute culpa. Ut occaecat consequat proident
							nulla cillum ad. Irure sunt nulla dolore esse elit in nulla. Duis
							sunt et amet eu voluptate fugiat. Dolor culpa anim ipsum ullamco
							labore excepteur est enim pariatur elit qui officia dolor nostrud.
							Ullamco voluptate sunt consectetur pariatur incididunt ullamco
							exercitation minim nostrud. Adipisicing qui eiusmod dolor laboris
							excepteur aliqua amet culpa ea eiusmod minim est magna. Est
							deserunt consequat labore velit nulla nisi ad sunt exercitation
							dolore quis eiusmod. Amet nisi nisi elit ullamco veniam. Irure ex
							aliqua in quis pariatur consequat ipsum eiusmod do. Non ullamco
							Lorem nisi sit. Nulla aute duis aliqua id anim mollit fugiat esse
							aliquip qui. Do nisi cillum fugiat consequat labore. Duis
							exercitation in excepteur adipisicing. Id non sint cupidatat
							officia cillum sint irure ullamco ad mollit. Lorem tempor laborum
							reprehenderit aliqua nostrud commodo. Non adipisicing ut mollit
							voluptate aute deserunt incididunt reprehenderit pariatur mollit
							labore eiusmod. Eiusmod sunt incididunt Lorem qui voluptate.
							Voluptate occaecat mollit dolor esse ea nostrud irure velit. Ut
							non ipsum aliquip nisi velit. Nisi quis occaecat voluptate aute
							anim voluptate excepteur sint nulla. Aute adipisicing non aute
							dolore Lorem consectetur adipisicing sunt in non Lorem. Non ut
							proident sit non ipsum in mollit excepteur commodo. Magna enim
							deserunt irure aliqua duis adipisicing veniam eu.
						</p>
					)}
				</section>
			</ExpandableSection>
		</>
	);
}

function ExpandableSection({ selected, children, hasMounted, noAnime }) {
	const [vh, setVh] = useState(0);
	useEffect(() => {
		setVh(window.innerHeight);
	});

	const props = useSpring({
		from: { height: '80px' },
		to: { height: selected ? `${vh * 0.8}px` : '80px' },
		immediate: noAnime,
	});
	return <animated.div style={props}>{children}</animated.div>;
}
