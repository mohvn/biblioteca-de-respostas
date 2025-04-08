import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, ArrowLeft, ArrowRight, BookOpen, ChevronRight, InfoIcon, LibraryIcon, Link, Plus } from "lucide-react";
import BookIcon from "@/assets/icons/book";
import QuestionIcon from "@/assets/icons/question";

const spreadsheets = [
  {
    subject: "Empreendedorismo, WEB e POO",
    url: "https://docs.google.com/spreadsheets/d/1GrDVaYFPdSoaRSxF8ubZLHjVaBNkKbq5Kt85nIEoazw/edit?usp=sharing",
    color: "#eef3f5"
  },
  {
    subject: "Arq. e Org. de Comp., PHC e SO",
    url: "https://docs.google.com/spreadsheets/d/1FKPqKAwvJR6PPovQ5bvnR03mai8M4f1ytq7z0gZ48lo/edit?usp=sharing",
    color: "#d2e0e8"
  },
  {
    subject: "Algoritmos e Lógica Matemática",
    url: "https://docs.google.com/spreadsheets/d/1NaZbUYTKWdb9zEsiSUb_z6FJoKIMEUBrcQyPDbQp6EU/edit?usp=sharing",
    color: "#d0dfe9"
  },
  {
    subject: "Qualidade e Int. de Sistemas",
    url: "https://docs.google.com/spreadsheets/d/1p2bSp6CqA-AGHSIkaUyNsnZnwfXy2NXtzEYxYW5xXk8/edit?usp=sharing",
    color: "#b3cbdb"
  },
  {
    subject: "Arq. de Sistemas e Segurança",
    url: "https://docs.google.com/spreadsheets/d/19hVgODnICKf_0LPXBPG9GhQTnQjygxd9EOSOLVpA2XY/edit?usp=sharing",
    color: "#aec8d9"
  },
  {
    subject: "Sustentabilidade, BDD e Estrutura de D.",
    url: "https://docs.google.com/spreadsheets/d/1UIHoWizOVWntV8_xAvp6cA4p2a7VoAS0XVE48Lc-qvU/edit?usp=sharing",
    color: "#93b6cc"
  },
  {
    subject: "Redes, Big Data e Pensamento Comp.",
    url: "https://docs.google.com/spreadsheets/d/170twsMnsjKt6-b8ft1dkCd1FziFeSYMRxPUK22BIytc/edit?usp=sharing",
    color: "#8bb0c7"
  },
  {
    subject: "IHC e Mapeamento",
    url: "https://docs.google.com/spreadsheets/d/1QmrxDBCthIbh-boqeqIu55sYGg77b-i2KgavMbme3ic/edit?usp=sharing",
    color: "#719fbd"
  },
  {
    subject: "Engenharia e Backend",
    url: "https://docs.google.com/spreadsheets/d/1N0kT8-RVKeLBKOJNYIgH8Qr7mtHBe3m4SZZa0KqP9Og/edit?usp=sharing",
    color: "#6a99b7"
  },
  {
    subject: "Dev. Mobile e Dev Metodologias Ageis",
    url: "https://docs.google.com/spreadsheets/d/1_-3UtcPmYcroO7etilmRlZIKYvCUEWBPk4TaddUwk-I/edit?usp=sharing",
    color: "#5087ab"
  },
  {
    subject: "Arquitetura TCP/IP e Comun. de Dados",
    url: "https://docs.google.com/spreadsheets/d/13Wkoid10wuf99ED3Ye23czPBddSdyj-hZgcm5SUcZbg/edit?usp=sharing",
    color: "#4e84a7"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-24">
        <div className="flex items-center justify-center mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M8.672 7.542h6.656c3.374 0 5.062 0 6.01.987s.724 2.511.278 5.56l-.422 2.892c-.35 2.391-.525 3.587-1.422 4.303s-2.22.716-4.867.716h-5.81c-2.646 0-3.97 0-4.867-.716s-1.072-1.912-1.422-4.303l-.422-2.892c-.447-3.049-.67-4.573.278-5.56s2.636-.987 6.01-.987M8 18c0-.414.373-.75.833-.75h6.334c.46 0 .833.336.833.75s-.373.75-.833.75H8.833c-.46 0-.833-.336-.833-.75" clipRule="evenodd"></path><path fill="currentColor" d="M8.51 2h6.98c.233 0 .41 0 .567.015c1.108.109 2.014.775 2.399 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.099 2 8.278 2 8.51 2" opacity={0.4}></path><path fill="currentColor" d="M6.31 4.723c-1.39 0-2.53.84-2.91 1.953l-.024.07a8 8 0 0 1 1.232-.253c1.08-.138 2.446-.138 4.032-.138h6.892c1.586 0 2.952 0 4.032.138c.42.054.834.133 1.232.253l-.023-.07c-.38-1.114-1.52-1.953-2.911-1.953z" opacity={0.7}></path></svg>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-center">Biblioteca de Planilhas de Respostas</h1>

        <div className="flex bg-zinc-800/50 text-zinc-200 border-zinc-700 mb-8 p-6 rounded-lg">
          <AlertCircle className="w-6 h-6 mr-2" />
          As planilhas estão organizadas em grupos de duas à três disciplinas, no qual são
          apresentadas trimestralmente.
        </div>

        <Table>
          <TableHeader className="bg-transparent hover:bg-zinc-800/50">
            <TableRow className="border-b border-zinc-700">
              <TableHead className="font-semibold text-zinc-400">
                <div className="flex items-center">
                  <BookIcon className="w-5 h-5 mr-2" />
                  Matérias
                </div>
              </TableHead>
              <TableHead className="font-semibold text-zinc-400">
                <div className="flex items-center">
                  <Link strokeWidth={3} className="w-4 h-4 mr-2" />
                  Link
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {spreadsheets.map((item, index) => (
              <TableRow
                key={index}
                className={`hover:bg-zinc-800/50 ${index < spreadsheets.length - 1 ? 'border-b border-zinc-700' : ''}`}
              >
                <TableCell>
                  <div className="flex items-center">
                    <BookIcon className="w-5 h-5 mr-2" color={item.color} />
                    <span className="font-medium">
                      {item.subject}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <a
                    href={item.url}
                    className="text-zinc-400 hover:underline truncate block"
                  >
                    {item.url}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center mt-12">
          <QuestionIcon className="w-10 h-10 mr-3 text-zinc-300" />
          <h1 className="text-4xl font-bold text-zinc-200">FAQ</h1>
        </div>

        <div className="flex items-start mt-6 bg-zinc-800/50 p-4 rounded-md ">
          <ChevronRight className="w-6 h-6 mt-0.5 mr-3 text-green-400 flex-shrink-0" />
          <p className="text-zinc-200">
            As planilhas de respostas servem tanto para as Atividades Avaliativas 1, 2 e 3 e a Prova Institucional.
          </p>
        </div>

        <div className="flex flex-col mt-4">
          <div className="flex flex-col items-start bg-zinc-800/50 p-4 rounded-md">
            <div className="flex w-full mb-4">
              <ChevronRight className="w-6 h-6 mt-0.5 mr-3 text-green-400 flex-shrink-0" />
              <p className="text-zinc-200">
                Dentro da planilha, as questões são divididas em suas devidas pastas como é mostrado abaixo.
              </p>
            </div>

            <img
              src="https://img.notionusercontent.com/s3/prod-files-secure%2F59c12550-484b-4f26-902a-c2b6ab6ca52e%2Fe3f6eeb2-51a6-432a-b263-6b438b014031%2FDesign_sem_nome.png/size=w=1860?exp=1744241282&sig=wOXJlBvx6BUCW9UK8rFrYJjFkf1-fKEf6-oQD_TJst4&id=1cf83eb3-99b5-81ec-a1d0-cf855f1a3cb1&table=block&userId=bb80b431-7c4a-428d-95c3-64b58d90b43e"
              alt="Organização de pastas na planilha"
              className="rounded-lg shadow-lg border border-zinc-700/50 w-full mx-auto"
            />
          </div>
        </div>

        <div className="flex items-start mt-4 bg-zinc-800/50 p-4 rounded-md">
          <ChevronRight className="w-6 h-6 mt-0.5 mr-3 text-green-400 flex-shrink-0" />
          <p className="text-zinc-200">
            <strong>Importante:</strong> Apenas as respostas que contém fundo <span className="text-green-400">verde</span> e estão em <em>itálico</em> são respostas confirmadas com Gabarito, as demais considerar apenas como possíveis respostas.
          </p>
        </div>
      </div>
    </main>
  );
}
