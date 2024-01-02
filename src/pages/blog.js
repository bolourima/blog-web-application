import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { BlogPosts } from "@/components/BlogPosts";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <BlogPosts />
      </main>
      <Footer />
    </>
  );
}
