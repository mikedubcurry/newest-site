import { useEffect, useRef, useState } from "react";

export function Sections() {
    const [selected, setSelected] = useState(0);

    const sections = [useRef(), useRef(), useRef(), useRef()];
    const [sec1, sec2, sec3, sec4] = sections;

    useEffect(() => {
        sections[selected].current.style = "height: 60vh";
        sections.forEach((sec, i) => {
            if (i !== selected) {
                sec.current.style = "height: unset";
            }
        });
    }, [selected]);

    return (
        <>
            <section
                onClick={() => setSelected(0)}
                ref={sec1}
                className="closed"
            >
                Work Experience
            </section>
            <section
                onClick={() => setSelected(1)}
                ref={sec2}
                className="closed"
            >
                Code Samples
            </section>
            <section
                onClick={() => setSelected(2)}
                ref={sec3}
                className="closed"
            >
                Cat Pictures
            </section>
            <section
                onClick={() => setSelected(3)}
                ref={sec4}
                className="closed"
            >
                Blog Posts
            </section>
        </>
    );
}
