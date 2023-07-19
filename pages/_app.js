import { ContextProvider } from "../context/GlobalContext";
import "../styles/globals.css";
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Toaster position="bot-right" />
      <Component {...pageProps} />
    </ContextProvider>
  );
}
