import react from "react";
import styles from '/styles/Home.module.css'

function Header() {
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className="logo">
                    <span> Conecta Dev</span>
                </div>
                <div>
                    <button>Novo Post</button>
                    <span>img1</span>
                    <span>img1</span>
                </div>
            </nav>
        </header>
    );
}

export default Header