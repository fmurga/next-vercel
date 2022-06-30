import Head from "next/head";
import { FC } from "react";
import { NavBar } from "../NavBar";
import styles from "./MainLayout.module.css";

interface Props {
  children: React.ReactNode
}

export const MainLayout: FC<Props> = ({children}) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - Facu</title>
            <meta
              name="description"
              content="Pagina principal primer app de next"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* Eventualemnte uno podria definir 2 Heads que van a ir complementandose si yo quisiera cambiar solo parte del head original */}
          <NavBar />
          <main className={styles.main}>
            {children}
          </main>
        </div>
      );
}
