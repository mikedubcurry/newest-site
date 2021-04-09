---
title: thing 2
slug: sections
summary: The Sections component that make up the home page
---

```
function Page() {
  const [selected, setSelected] = useState(0);
  return (
  		<>
        <Section
          hasMounted={hasMounted}
          noAnime={reducedMotion}
          selected={selected === 0}
        >
        <h2
        	onKeyDown={(e) => {
						if (e.key === 'Enter') {
							setSelected(0);
						}
					}}
					tabIndex="1"
        >Section Title</h2>
        <div>Section Content</div>
        </Section>
      </>
  )
}

function Section({ children, noAnime, hasMounted, selected }) {
	const [vh, setVh] = useState(0);

	useEffect(() => {
		setVh(window.innerHeight - window.innerHeight * 0.1);
	}, []);

	const props = useSpring({
		// from: { height: anime ? '80px' : `${vh * 0.75}px` },
		from: { height: '50px' },
		to: { height: selected ? `${vh - 180}px` : '50px' },
		immediate: hasMounted && noAnime,
	});

	return (
		<animated.section style={props}>
			<div>
				{children[0]}
				<div>{selected && children.slice(1)}</div>
			</div>
		</animated.section>
	);
}
```