import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { GlobalContext } from "../../context/GlobalContext";
import { contact, toasts } from "../../data/siteContent";
import Section from "../Section/Section";
import styles from "./Contact.module.css";

export default function Contact() {
  const form = useRef();
  const { testLanguage } = useContext(GlobalContext);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 4000);

    emailjs
      .sendForm(
        "service_9yxy738",
        "template_5ju8ki6",
        form.current,
        "7GvJ-ZrUv_EAk8fxe"
      )
      .then(
        () => toast.success(testLanguage(toasts.success)),
        () => toast.error(testLanguage(toasts.error))
      );
  };

  return (
    <Section id="contact">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <h2 className={styles.title}>{testLanguage(contact.title)}</h2>
          <p className={styles.lead}>{testLanguage(contact.lead)}</p>
          <div className={styles.links}>
            <a className={styles.primaryLink} href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <div className={styles.row}>
              {contact.links.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryLink}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="user_name">{testLanguage(contact.form.name)}</label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              className={styles.input}
              required
              autoComplete="name"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="user_email">{testLanguage(contact.form.email)}</label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              className={styles.input}
              required
              autoComplete="email"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="message">{testLanguage(contact.form.message)}</label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              rows={6}
              required
            />
          </div>
          <div className={styles.submitWrap}>
            {!isSent && (
              <button type="submit" className={styles.submit}>
                {testLanguage(contact.form.send)}
              </button>
            )}
            {isSent && (
              <Image
                className={styles.plane}
                src="/assets/images/paperPlane.svg"
                alt=""
                width={28}
                height={28}
              />
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}
