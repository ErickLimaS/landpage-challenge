import Link from "next/link";
import TalkToSpecialistForm from "./components/FormTalkToSpecialist";
import SvgArrowRight from "@/public/assets/svg/arrow-right.svg"

export async function generateMetadata() {

  return {
    title: "TESIS | Início",
    description: `Seja bem-vindo à TESIS, onde a engenharia e a inovação tecnológica se unem em prol de uma visão holística dos negócios.
     Nossa missão é ir além, incorporando expertise técnica à compreensão abrangente das necessidades empresariais.`,
  }

}

export default function Home() {
  return (

    <main>

      {/* HERO */}
      <section className="flex items-center justify-center py-16 bg-gradient-to-b from-primary to-dark-purple">

        <div className="container flex flex-col items-center sm:max-lg:mx-4 md:flex-row gap-10 md:max-xl:gap-6 xl:gap-32">

          <div className="flex flex-col max-sm:gap-24 sm:max-md:gap-16 md:gap-12 p-2 max-sm:p-1 md:p-0 text-white font-bold">

            <h1 className="text-4xl text-center md:text-start max-md:mt-12">
              Desenvolvimento e gestão de serviços tecnológicos!
            </h1>

            <ul className="flex flex-col gap-1 text-lg">

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
            className="flex flex-col gap-12 m-2 sm:max-md:mx-4 py-8 px-4 sm:px-12 md:max-lg:px-4 rounded-xl bg-white text-primary"
          >

            <h2 className="text-2xl font-bold">Informe seus dados para falar com um especialista:</h2>

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
