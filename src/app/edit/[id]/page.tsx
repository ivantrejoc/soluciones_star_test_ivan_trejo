import { Singer } from "@prisma/client";
import EditSinger from "../../components/EditSinger/EditSinger";

//Fetch de la BDD
async function getSingerById(id: Singer): Promise<Singer[]> {
  const response = await fetch(`http://localhost:3000/api/singers/${id}`);
  const data = await response.json();
  return data;
}

async function Edit({ params: { id } }: { params: { id: Singer } }) {
  const singer = await getSingerById(id);

  console.log("DATOS DE SINGER: ", singer);
  return (
    <main>
      <EditSinger data={singer} />
    </main>
  );
}

export default Edit;
