import { useEffect, useRef, useState } from 'react';

export const PageViewCounter = () => {
	const [views, setViews] = useState(0);

	let viewsChars = views ? ('' + views).split('') : ['0'];
	if (viewsChars.length < 5) {
		viewsChars = [...Array.from(Array(5 - viewsChars.length)).map((n) => '0'), ...viewsChars];
	}

	let nextNum = views + 1;
	const ref = useRef();
	useEffect(() => {
		if (ref && ref.current) {
			ref.current.classList.add('top-0');
		}

        return () => {
            if(ref.current) {
                ref.current.classList.add('top-12')
            }
        }
	}, );

	const handleClick = () => {
		setViews(views + 1);
	};

	const renderNumber = (num, i) => {
		return (
			<span key={i} className="border-black border px-1 py-2 m-1 text-lg relative z-10 bg-white">
				{num}
			</span>
		);
	};

	return (
		<div className="overflow-hidden p-3">
			{viewsChars.map(renderNumber)}
			<span
				ref={ref}
				className="border-black border  px-1 py-2 m-1 text-lg  relative -left-7 -top-12 z-20 bg-white transition-all duration-500 ease"
			>
				{nextNum}
			</span>

			<button onClick={handleClick}>click me</button>
		</div>
	);
};
