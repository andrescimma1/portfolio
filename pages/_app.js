import { Inter } from "next/font/google";
import { ContextProvider } from "../context/GlobalContext";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className} ${inter.variable}`}>
      <ContextProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "var(--bg-elevated)",
              color: "var(--fg)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-md)",
            },
          }}
        />
        <Component {...pageProps} />
      </ContextProvider>
    </div>
  );
}
