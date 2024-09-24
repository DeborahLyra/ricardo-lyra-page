
import { useState } from "react";
import { AboutMe } from "../../components/about me/AboutMe";
import { Banner } from "../../components/banner/Banner";
import { Contact } from "../../components/contact/Contact";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/Header/Header";
import Navbar from "../../components/navbar/Navbar";
import { Specialization } from "../../components/specialization/Specialization";
import { Surgeries } from "../../components/surgeries/Surgeries";
import {ModalQuestions} from "../../components/modalQuestions/ModalQuestions"

export function HomePage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openQuestionnaire = () => setModalOpen(true);
  const closeQuestionnaire = () => setModalOpen(false);
  return (
    <>
      <Header />
      <Navbar openQuestionnaire={openQuestionnaire}/>
      {isModalOpen && <ModalQuestions closeModal={closeQuestionnaire} />}
      <Banner />
      <AboutMe/>
      <Specialization/>
      <Surgeries/>
      <Contact/>
      <Footer/>
    </>
  )
}
