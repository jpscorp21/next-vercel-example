import styles from '../styles/Home.module.css'
import {useEffect} from "react";
import Link from "next/link";
import {MainLayout} from "../components/layouts/MainLayout";

function ContactPage(){

    useEffect(() => {
        console.log("Hola 23")
    }, [])

    return (
        <MainLayout>
            <h1 className={styles.title}>
                <Link href="/">Volver</Link>
            </h1>

            <p className={styles.description}>
                Contactos
                <code className={styles.code}>pages/contact.jsx</code>
            </p>
        </MainLayout>
    )
}

export default ContactPage;
