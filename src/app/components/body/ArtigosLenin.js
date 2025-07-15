import { IoIosPaper } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillTag } from "react-icons/ai";

const ArtigosLenin = () => {
  return (
    <div id="artigos" className="flex flex-col p-20 bg-[#D9D9D9] gap-10 max-lg:p-4 max-lg:gap-6">
      <div className="flex justify-center w-full text-black text-4xl max-lg:text-2xl">
        <h1 style={{ fontFamily: "'Girassol', cursive" }}>Artigos Recentes</h1>
      </div>
      <div className="flex items-center justify-start w-full text-black text-2xl gap-20 pl-30 max-lg:flex-col max-lg:gap-4 max-lg:pl-0 max-lg:text-base">
        <div className="flex gap-3 items-center">
          <IoIosPaper />
          <a
            href="https://www.jusbrasil.com.br/artigos/entendendo-a-importancia-da-pericia-no-processo-penal/2165507970?_gl=1*1eucd28*_gcl_aw*R0NMLjE3NDQxMzQyNTYuQ2p3S0NBandrdE9fQmhCckVpd0FWNzBqWGh5U1pGemdxYlNzNVhJZDFpWXNzWGx1cEZMUC1ldlFTQVo2dk9Wcks2Zi1pRkJNRURVNnlob0NtLWtRQXZEX0J3RQ..*_gcl_au*MTg4Mzk4OTc2OC4xNzQ0MTMzMzA4LjU0Mjk3NTgyLjE3NDc2NjU4OTguMTc0NzY2NTg5Nw..*_ga*Njg1MjUwNjkzLjE3Mjc3OTM5NjM.*_ga_QCSXBQ8XPZ*czE3NDc2NzkxNzgkbzIwOCRnMSR0MTc0NzY3OTE5MyRqNDUkbDAkaDAkZG5ySDM3eDVtRmg4azE0bmFab0U2WHZNMV9MeTRMa2haTlE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline"
            style={{ fontFamily: "'Balthazar', serif" }}
          >
            Entendendo a Importância da Perícia no Processo Penal
          </a>
        </div>
        <div className="flex gap-3 items-center">
          <FaCalendarAlt />
          <p style={{ fontFamily: "'Balthazar', serif" }}>09/02/2024</p>
        </div>
        <div className="flex gap-3 items-center">
          <AiFillTag />
          <p style={{ fontFamily: "'Balthazar', serif" }}>Direito Penal</p>
        </div>
      </div>
    </div>
  );
};

export default ArtigosLenin;
