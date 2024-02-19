import Image from "next/image";
import { Navbar } from "./component/Navbar";
import { Hero } from "./component/Hero";
import { Features } from "./component/Features";
import { Faq } from "./component/Faq";
import { Pricing } from "./component/Pricing";
import { Cta } from "./component/Cta";
import { Footer } from "./component/Footer";

export default function Home() {
  return (
   <>
<Navbar/>
<Hero/>
<Features/>
<Faq/>
<Pricing/>
<Cta/>
<Footer/>
   </>
  );
}
