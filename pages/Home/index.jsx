import react from "react";
import styles from '/styles/Home.module.css'
import Header from "./components/header";

function Home() {
    return(
        <div>
            <Header></Header>
            <main className={styles.main}>
                <div className={styles.navbar}>navbar</div>
                <div className={styles.feed}>feed</div>
            </main>
        </div>
    )
}

export default Home;