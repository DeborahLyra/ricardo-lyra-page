
import { AboutMe } from "../../components/about me/AboutMe";
import { Banner } from "../../components/banner/Banner";
import { Contact } from "../../components/contact/Contact";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/Header/Header";
import Navbar from "../../components/navbar/Navbar";
import { Specialization } from "../../components/specialization/Specialization";
import { Surgeries } from "../../components/surgeries/Surgeries";


export function HomePage() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <AboutMe/>
      <Specialization/>
      <Surgeries/>
      <Contact/>
      <Footer/>
    </>
  )
}
