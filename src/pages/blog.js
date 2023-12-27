import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { BlogPosts } from "@/components/BlogPosts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <BlogPosts />
      </main>
    </>
  );
}
