import styles from './Footer.module.css'

const Footer = () => {
    return(
        <div className={styles.footerContainer}>
            <div className={styles.footerParent}>
                <img className={styles.footerImage} src={"/assets/images/shape-bg.png"} alt="Shape"/>
            </div>
        </div>
    )
}

export default Footer