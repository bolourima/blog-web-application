import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { BlogPosts } from "@/components/BlogPosts";
import { Hero } from "@/components/Hero";
import { Trending } from "@/components/Trending";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Trending />
        <BlogPosts />
        <Footer />
      </main>
    </>
  );
}
