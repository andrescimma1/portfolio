import styles from './Navbar.module.css'
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const Navbar = () => {
    const { handleButtonClick } = useContext(GlobalContext)
    const [navColor, setNavColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const navbarHeight = 93.59;
        const threshold = 10;
  
        // Calcula la posición del scroll y cambia el color del Navbar según sea necesario
        if (scrollPosition > navbarHeight) {
          setNavColor(`rgba(22, 0, 42, ${Math.min((scrollPosition - navbarHeight) / threshold, 1)})`); // Cambio gradual del color
        } else {
          setNavColor('transparent'); // Color transparente cuando el scroll está en la parte superior del Navbar
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return(
        <div className={styles.navbar} style={{ backgroundColor: navColor}}>
           <div style={{display:'flex', justifyContent: 'space-between', width:'900px', alignItems:'center'}}>
                <h1>
                    Andres Cimma
                </h1>
                <div className={styles.navButton} onClick={() => handleButtonClick(document.getElementById('homeId'))}>Home</div>
                <div className={styles.navButton} onClick={() => handleButtonClick(document.getElementById('aboutMeId'))}>About me</div>
                <div className={styles.navButton}>Resume</div>
                <div className={styles.navButton}>Contact me</div>
            </div> 
        </div>
    )
}

export default Navbar