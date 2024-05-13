import CardProjectRight from "./Projects.cards/card_project_right";
import CardProjectLeft from "./Projects.cards/card_project_left";

export default function Projects() {
  return (
    <div id="projetos" className="w-3/5 mx-auto px-7 my-12">
      <div>
        <h2 className="container font-semibold text-2xl leading-10 text-green-blue pt-10 pb-2  ">
          PROJETOS:
        </h2>
        <p className="container font-medium text-lg text-gray-text leading-9 w-full h-full pb-10">
        Os projetos listados abaixo foram desenvolvidos para atender necessidades reais de empresas, sendo executados tanto no âmbito comercial quanto acadêmico.
        </p>
      </div>
      <div className="flex flex-col items-center grid-rows-3 gap-4 w-full justify-between xlm:flex-row my-12">
        <CardProjectRight
          titulo={"Site de acompanhamento de metas - Norte Auto Peças"}
          texto={
            "Este site foi feito com intuito de ajudar a empresa a acompanhar as metas de cada loja e vendedor. Foi usado nesse projeto tecnologias como React para o front-end, Node Js para o back-end e para o banco de dados, foi usado o Oracle para extração de dados do sistema ERP da empresa."
          }
          video={"https://www.youtube.com/embed/9cHxN26XiSg?si=j6o685JJyPq1JmbB"}
        />
      </div>
      <div className="flex flex-col items-center grid-rows-3 gap-4 w-full justify-between xlm:flex-row ">
        <CardProjectLeft
          titulo={"Site de Apresentação - Norte Auto Peças"}
          texto={
            "Um dos objetivos deste site é fornecer aos clientes informações sobre localização e contatos comerciais das lojas de acordo com a cidade e estado em que se encontram. Isso torna a experiência do usuário mais intuitiva e eficiente."
          }
          link={"https://norteautopecas.com.br/home/"}
          tituloLink={"Clique aqui para visualizar o projeto."}
          video={"https://www.youtube.com/embed/_lp-aVkA8iQ?si=nsJpYDnbTGc4WiIp"}
        />
      </div>
    </div>
  );
}
