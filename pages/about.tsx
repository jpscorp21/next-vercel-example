import styles from '../styles/Home.module.css'
import React, {useEffect} from "react";
import Link from "next/link";
import {MainLayout} from "../components/layouts/MainLayout";
import {DarkLayout} from "../components/layouts/DarkLayout";

function AboutPage(){

    useEffect(() => {
        console.log("Hola 23")
    }, [])

    return (
        <>
            <h1 className={styles.title}>
                <Link href="/">Volver</Link>
            </h1>

            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/index.jsx</code>
            </p>
        </>
    )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}

export default AboutPage;
