import { useEffect, useRef, useState } from "react";

import styles from "../styles/Sections.module.css";

export function Sections() {
    const [selected, setSelected] = useState(0);

    const sections = [useRef(), useRef(), useRef(), useRef()];
    const [sec1, sec2, sec3, sec4] = sections;

    useEffect(() => {
        sections[selected].current.style = "height: 60vh";
        sections.forEach((sec, i) => {
            if (i !== selected) {
                sec.current.style = "height: 80px";
            }
        });
    }, [selected]);

    return (
        <>
            <section
                onClick={() => setSelected(0)}
                ref={sec1}
                className={styles.first}
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
            <section
                onClick={() => setSelected(1)}
                ref={sec2}
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
            <section
                onClick={() => setSelected(2)}
                ref={sec3}
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
            <section
                onClick={() => setSelected(3)}
                ref={sec4}
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
        </>
    );
}
