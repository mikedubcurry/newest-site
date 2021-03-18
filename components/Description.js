import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";

const descriptions = [
    ({ style }) => (
        <animated.span style={style}>JavaScript developer</animated.span>
    ),
    ({ style }) => <animated.span style={style}>Guitarist</animated.span>,
    ({ style }) => (
        <animated.span style={style}>Motorcycle rider</animated.span>
    ),
    ({ style }) => <animated.span style={style}>Cat-Person</animated.span>,
];

export function Description() {
    const [idx, setIdx] = useState(0);

    const transitions = useTransition(idx, (p) => p, {
        from: { opacity: 0, marginLeft: "30px" },
        enter: { opacity: 1, marginLeft: "0px" },
        leave: { opacity: 0, marginLeft: "-100px" },
        config: { duration: 300 },
    });

    useEffect(() => {
        const t = setTimeout(() => {
            setIdx((idx + 1) % descriptions.length);
        }, 6000);

        return () => {
            clearTimeout(t);
        };
    }, [idx]);
    return (
        <p>
            {transitions.map(({ item, props, key }) => {
                const Desc = descriptions[item];
                return <Desc key={key} style={props} />;
            })}
        </p>
    );
}
