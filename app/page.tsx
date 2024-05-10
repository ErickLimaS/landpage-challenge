import Link from "next/link";
import TalkToSpecialistForm from "./components/FormTalkToSpecialist";
import SvgArrowRight from "@/public/assets/svg/arrow-right.svg"

export default function Home() {
  return (

    <main>

      {/* HERO */}
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

          <div
            id="form"
            className="m-2 sm:max-md:mr-4 sm:max-md:ml-4 pt-8 pb-8 pl-4 pr-4 sm:pl-12 md:max-lg:pl-4 sm:pr-12 md:max-lg:pr-4 rounded-xl bg-white text-primary flex flex-col gap-12"
          >

            <h2 className="text-2xl font-bold ">Informe seus dados para falar com um especialista:</h2>

            <TalkToSpecialistForm />

          </div>

        </div>

      </section>

      {/* SERVICOS */}
      <section>

        <h2 className="w-fit m-auto text-3xl font-bold text-primary mt-12 relative top-5">
          SERVIÇOS
        </h2>

        <div className="bg-blue-50">

          <ol className="container max-xl:px-2 grid sm:max-md:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-36 m-auto pt-44 pb-28">

            <li className="space-y-1 bg-white px-10 pt-20 pb-8 shadow-md rounded-xl relative">

              <h3 className="size-32 m-auto flex items-center justify-center text-5xl text-white rounded-full bg-gradient-to-b from-dark-purple to-primary absolute -top-16 left-2/4 -translate-x-2/4">
                1
              </h3>

              <p className="text-lg font-semibold text-center">
                Prover suporte para a avaliação de novos produtos e tecnologias
              </p>

            </li>

            <li className="space-y-1 bg-white px-6 pt-20 pb-8 shadow-md rounded-xl relative">

              <h3 className="size-32 m-auto flex items-center justify-center text-5xl text-white rounded-full bg-gradient-to-b from-dark-purple to-primary absolute -top-16 left-2/4 -translate-x-2/4">
                2
              </h3>

              <p className="text-lg font-semibold text-center">
                Reduzir riscos na utilização de novos produtos e tecnologias
              </p>

            </li>

            <li className="space-y-1 bg-white px-6 pt-20 pb-8 shadow-md rounded-xl relative">

              <h3 className="size-32 m-auto flex items-center justify-center text-5xl text-white rounded-full bg-gradient-to-b from-dark-purple to-primary absolute -top-16 left-2/4 -translate-x-2/4">
                3
              </h3>

              <p className="text-lg font-semibold text-center">
                Orientar o mercado na escolha de novos produtos e tecnologias
              </p>

            </li>

            <li className="space-y-1 bg-white px-6 pt-20 pb-8 shadow-md rounded-xl relative">

              <h3 className="size-32 m-auto flex items-center justify-center text-5xl text-white rounded-full bg-gradient-to-b from-dark-purple to-primary absolute -top-16 left-2/4 -translate-x-2/4">
                4
              </h3>

              <p className="text-lg font-semibold text-center">
                Estimular o processo de inovação tecnológica
              </p>

            </li>

            <li className="space-y-5 bg-white px-6 pt-16 pb-8 shadow-md rounded-xl relative">

              <h3 className="size-32 m-auto flex items-center justify-center text-5xl text-white rounded-full bg-gradient-to-b from-dark-purple to-primary absolute -top-16 left-2/4 -translate-x-2/4">
                5
              </h3>

              <p className="text-lg font-semibold text-center">
                Buscar a concessão de uma aprovação técnica, com base em um documento de avaliação técnica
              </p>

            </li>

          </ol>

        </div>

        <Link
          href={"#form"}
          className="block m-auto max-sm:w-[90%] max-w-md text-center text-2xl font-bold text-primary bg-[#fbd34d] rounded-lg mb-12 py-4 px-2 relative bottom-8 hover:scale-105 transition-all"
        >
          Fale com um especialista
        </Link>

      </section>

    </main>

  );
}
