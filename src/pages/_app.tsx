import CustomCursor from "@/components/customCursor";
import "@/styles/globals.css";
import '@/styles/header.css'
import '@/styles/home.css'
import '@/styles/about.css'
import '@/styles/project.css'
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Component {...pageProps} />;
  <CustomCursor />
  
  </> 
}
