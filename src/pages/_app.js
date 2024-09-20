import Home from "@/components/layouts/Home";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Home>
        <Component {...pageProps} />
      </Home>
    </ThemeProvider>
  );
}
