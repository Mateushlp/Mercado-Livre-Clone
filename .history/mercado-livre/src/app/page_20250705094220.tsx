/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import BarraSuperior from "./components/BarraSuperior";
import { Menu } from "lucide-react";
import BarraNavegacao from "./components/BarraNavegacao";
import GaleriaProdutos from "./components/GaleriaProdutos";

export default function Home() {
  return (
    <div>
      <header className="bg-amber-300">
        <BarraSuperior />
        <BarraNavegacao />
      </header>
      <main>
        <GaleriaProdutos />
      </main>
    </div>  
  );
}
