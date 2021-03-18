import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Description } from "../components/Description";
import { Sections } from "../components/Sections";

export default function Home() {
    return (
        <div className={styles.container}>
            <header>
                <h1>
                    Mike <span className={styles.lastname}>Curry</span>
                </h1>
                <Description />
            </header>
            <Sections />
        </div>
    );
}
