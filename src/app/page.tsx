import Figma from "./components/Figma/Figma";
import Table from "./components/Table/Table";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl font-bold text-gray-900 justify-center text-center mt-6 mb-2">Figma Layout Design</h1>
      <Figma />
      <Table />
    </main>
  );
}
