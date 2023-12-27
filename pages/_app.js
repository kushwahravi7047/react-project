import "bootstrap/dist/css/bootstrap.min.css";
// import '@/styles/globals.css'
import "@/styles/custom.css";
import "@/styles/theme.min.css";

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
