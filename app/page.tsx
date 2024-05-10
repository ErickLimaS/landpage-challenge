import TalkToSpecialistForm from "./components/HomePage/FormTalkToSpecialist";
import SvgArrowRight from "@/public/assets/svg/arrow-right.svg"

export default function Home() {
  return (

    <main>

      <section className="pt-16 pb-16 bg-gradient-to-b from-primary to-dark-purple  flex items-center justify-center">

        <div className="sm:ml-4 sm:mr-4 flex flex-col md:flex-row gap-10 xl:gap-32 items-center md:max-w-7xl">

          <div className="p-2 md:p-0 flex flex-col sm:max-md:gap-16 gap-8 md:gap-12 text-white font-bold">

            <h1 className="text-4xl text-center md:text-start">Desenvolvimento e gestão de serviços tecnológicos!</h1>

            <ul className="text-lg flex flex-col gap-1">

              <li className="flex gap-2 items-center sm:hover:scale-105 xl:hover:scale-110 transition-all">
                <SvgArrowRight fill={"#49dd80"} /> Gestão técnica de Programas Setoriais da Qualidade
              </li>

              <li className="flex gap-2 items-center sm:hover:scale-105 xl:hover:scale-110 transition-all">
                <SvgArrowRight fill={"#49dd80"} /> Avaliação de produtos inovadores para construção civil
              </li>

              <li className="flex gap-2 items-center sm:hover:scale-105 xl:hover:scale-110 transition-all">
                <SvgArrowRight fill={"#49dd80"} /> Realização de ensaios de materiais de construção
              </li>

            </ul>

          </div>

          <div className="m-2 sm:max-md:mr-4 sm:max-md:ml-4 pt-8 pb-8 pl-4 pr-4 sm:pl-12 md:max-lg:pl-4 sm:pr-12 md:max-lg:pr-4 rounded-xl bg-white text-primary flex flex-col gap-12">

            <h2 className="text-2xl font-bold ">Informe seus dados para falar com um especialista:</h2>

            <TalkToSpecialistForm />

          </div>

        </div>

      </section>

    </main>

  );
}
