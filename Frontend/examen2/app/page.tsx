import Image from "next/image";
import PromedioCategoria from "./(general)/page"

export default function Home() {
  return (
    <div>
      <h1>Grafico de Promedio por Categoría</h1>

      <PromedioCategoria />
    </div>
  );
}
