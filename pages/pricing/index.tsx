import {MainLayout} from "../../components/layouts/MainLayout";
import {DarkLayout} from "../../components/layouts/DarkLayout";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export const PricingPage = () => {
    return (
        <>
            <h1 className={styles.title}>
                <Link href="/">Volver</Link>
            </h1>

            <p className={styles.description}>
                Pricing
                <code className={styles.code}>pages/contact.jsx</code>
            </p>
        </>
    )
}

PricingPage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}

export default PricingPage
