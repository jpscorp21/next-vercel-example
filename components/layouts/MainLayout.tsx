import React, {PropsWithChildren} from "react";
import Head from "next/head";
import {Navbar} from "../Navbar";
import styles from "./MainLayout.module.css";

export const MainLayout = ({children}: PropsWithChildren<any>) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Inicio - Jean Saucedo 2</title>
                <meta name="description" content="Generated 23 by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                {children}
            </main>

        </div>
    )
}

