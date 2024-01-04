import "@/styles/globals.css";
import { SearchProvider } from "@/Context/SearchContext";

export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Component {...pageProps} />
    </SearchProvider>
  );
}
