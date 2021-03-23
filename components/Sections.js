import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import styles from "../styles/Sections.module.css";

export function Sections() {
    const [selected, setSelected] = useState(0);

    return (
        <>
            <ExpandableSection selected={selected === 0}>
                <section
                    className={styles.first}
                    onClick={() => setSelected(0)}
                >
                    <h2
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setSelected(0);
                            }
                        }}
                        tabIndex="1"
                    >
                        Work Experience
                    </h2>
                </section>
            </ExpandableSection>
            <ExpandableSection selected={selected === 1}>
                <section
                    onClick={() => setSelected(1)}
                    className={styles.second}
                >
                    <h2
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setSelected(1);
                            }
                        }}
                        tabIndex="2"
                    >
                        Code Samples
                    </h2>
                </section>
            </ExpandableSection>
            <ExpandableSection selected={selected === 2}>
                <section
                    onClick={() => setSelected(2)}
                    className={styles.third}
                >
                    <h2
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setSelected(2);
                            }
                        }}
                        tabIndex="3"
                    >
                        Cat Pictures
                    </h2>
                </section>
            </ExpandableSection>
            <ExpandableSection selected={selected === 3}>
                <section
                    onClick={() => setSelected(3)}
                    className={styles.fourth}
                >
                    <h2
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setSelected(3);
                            }
                        }}
                        tabIndex="4"
                    >
                        Blog Posts
                    </h2>
                </section>
            </ExpandableSection>
        </>
    );
}

function ExpandableSection({ selected, children }) {
    const [vh, setVh] = useState(0);
    useEffect(() => {
        setVh(window.innerHeight);
    });
    const props = useSpring({
        from: { height: "80px" },
        to: { height: selected ? `${vh * 0.6}px` : "80px" },
    });
    return <animated.div style={props}>{children}</animated.div>;
}
