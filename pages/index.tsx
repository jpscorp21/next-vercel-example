import styles from '../styles/Home.module.css'
import {useEffect} from "react";
import Link from "next/link";
import {MainLayout} from "../components/layouts/MainLayout";

function HomePage(){

    useEffect(() => {
        console.log("Hola")
    }, [])

  return (
      <MainLayout>
          <h1 className={styles.title}>
              Ir a
              <Link href={"/about"}>Acerca de</Link>
          </h1>
          {/* reemplazar permite reemplazar una página por otra*/}

          <p className={styles.description}>
              Ver contactos <Link className={styles.title}
                                  href={{
                                      pathname: "/contact",
                                      // query: "/about"
                                  }}
          >Contacto</Link>
              <code className={styles.code}>pages/index.jsx</code>
          </p>
      </MainLayout>
  )
}

export default HomePage;
