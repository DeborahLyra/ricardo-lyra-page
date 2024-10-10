import { useState } from "react";
import { AboutMe } from "../../components/about me/AboutMe";
import { Banner } from "../../components/banner/Banner";
import { Contact } from "../../components/contact/Contact";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/Header/Header";
import Navbar from "../../components/navbar/Navbar";
import { Specialization } from "../../components/specialization/Specialization";
import { Surgeries } from "../../components/surgeries/Surgeries";
import { ModalQuestions } from "../../components/modalQuestions/ModalQuestions";

export function HomePage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleQuestionnaire = () => setModalOpen((prev) => !prev);

  return (
    <>
      <Header />
      <Navbar openQuestionnaire={toggleQuestionnaire} />
      {isModalOpen && <ModalQuestions closeModal={toggleQuestionnaire} />}
      <Banner />
      <AboutMe />
      <Specialization />
      <Surgeries />
      <Contact />
      <Footer />
      <button
        className="lg:hidden md:hidden fixed bottom-8 right-8 bg-sky-900 text-white hover:bg-sky-700 rounded-md px-4 py-3 text-md font-medium"
        onClick={toggleQuestionnaire}
      >
        Teste Sua Função Erétil
      </button>
    </>
  );
}
