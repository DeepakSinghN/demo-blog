import Image from "next/image";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Blog from "./components/Blog/Blog";

export default function Home() {
  return (
   <div className=" h-auto">
    <Header/>
    <Categories/>
    <Blog/>
   </div>
  );
}
