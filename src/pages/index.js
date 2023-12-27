import Image from "next/image";
import { Inter } from "next/font/google";
import { Head } from "next/document";
import { Header } from "@/components/Header";
import { BlogPosts } from "@/components/BlogPosts";
import { Hero } from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    {/* <Head>
       <title>Web Blog Posts</title>
    </Head> */}
     <main>
     
      <Header />
      <Hero />
      <BlogPosts />
    </main>
    </>
   
  );
}
