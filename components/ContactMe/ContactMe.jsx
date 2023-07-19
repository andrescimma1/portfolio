import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactMe.module.css'
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { GlobalContext } from '../../context/GlobalContext';
import { CONTACT_ME, MESSAGE, NAME } from '../../utils/constants';

const ContactMe = () => {
  const form = useRef();
  const {testLanguage} = useContext(GlobalContext)

  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSent(true);

     // Restablecer el estado después de cierto tiempo (opcional)
     setTimeout(() => {
      setIsSent(false);
    }, 4000); // Restablecer el estado después de 4 segundos (tiempo de duración de la animación)

    emailjs.sendForm('service_9yxy738', 'template_5ju8ki6', form.current, '7GvJ-ZrUv_EAk8fxe')
      .then(() => {
          toast.success('Tu formulario ha sido enviado con éxito.');
      }, () => {
          toast.error('Ocurrió un error. Completa bien tus datos y vuelve a intentar.');
      });
  };

  return (
    <div id="contactMeId" className={styles.container}>
      <h1 style={{marginBottom: '20px'}}>{testLanguage(CONTACT_ME)}</h1>
      <div className={styles.card}>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.box}>
            <label>{testLanguage(NAME)}</label>
            <input type="text" name="user_name" className={styles.roundedInput} style={{color: '#fff'}}/>
          </div>
          <div className={styles.box}>
          <label>Email</label>
          <input type="email" name="user_email" className={styles.roundedInput}/>
          </div>
          <div className={styles.box}>
          <label>{testLanguage(MESSAGE)}</label>
          <textarea style={{height:'180px'}} name="message" className={styles.roundedInput}/>
          <div style={{height: '30px', margin: '2rem 0 0 0'}}>
          {!isSent && <button className={`${isSent ? styles['send-button-animation'] : ''} ${styles['custom-button']}`} type="submit">
            <Image src={'/assets/images/paperPlane.svg'} alt="Airplane" width={30} height={30} />
          </button>}
          </div>

          </div>
          {isSent && <Image className={styles['airplane-animation']} src={'/assets/images/paperPlane.svg'} alt="Airplane" width={30} height={30} />}
        </form>
        <div className={styles.separatorContainer}>
          <hr className={styles.separatorLine} />
          <hr className={styles.separatorLine} />
        </div>
      </div>
    </div>
  );
};

export default ContactMe