"use client";

import { Singer } from "@prisma/client";
import { useEffect, useState } from "react";

//Fetch de la BDD
//LOCAL
// async function getSingers(): Promise<Singer[]> {
//   const response = await fetch("http://localhost:3000/api/singers");
//   const data = await response.json();
//   return data;
// }

async function getSingers(): Promise<Singer[]> {
  const response = await fetch(
    "https://soluciones-star-test-ivan-trejo-h5uo7b7u9-ivantrejoc-s-team.vercel.app//api/singers"
  );
  const data = await response.json();
  return data;
}

//Borrar Cantante
//LOCAL
// async function deleteSinger(id: number) {
//   const response = await fetch(`http://localhost:3000/api/singers/${id}`, {
//     method: "DELETE"
//   });
//   const data = await response.json();
//   console.log("MENSAJE DE API BORRADO: ", data);
//   return data;
// }

async function deleteSinger(id: number) {
  const response = await fetch(
    `https://soluciones-star-test-ivan-trejo-h5uo7b7u9-ivantrejoc-s-team.vercel.app//api/singers/${id}`,
    {
      method: "DELETE"
    }
  );
  const data = await response.json();
  console.log("MENSAJE DE API BORRADO: ", data);
  return data;
}

export default function Table() {
  const [singersData, setSingersData] = useState<Singer[]>([]);

  async function getData() {
    try {
      const response = await getSingers();
      console.log("ESTO ES RESPONSE:", response);

      return response;
    } catch (error) {
      console.error("Something went wrong:", error);
      throw error;
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setSingersData(data);
      } catch (error) {
        console.error("Something went wrong:", error);
        throw error;
      }
    }
    fetchData();
  }, []);

  //Borrar nota
  const removeSinger = async (id: number) => {
    try {
      const response = await deleteSinger(id);
      console.log("ESTO ES RESPONSE:", response);
      if (response) {
        //si recibe un status 200 envía alert de registro exitoso, caso contrario alerta de un error
        alert("Singer Deleted");
        window.location.reload();
      }
      return response;
    } catch (error) {
      console.error("Something went wrong:", error);
      throw error;
    }
  };

  return (
    <section className="antialiased font-sans bg-gray-200">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">
              Singers List
            </h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      id
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Age
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Genre
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {singersData.map((singer) => (
                    <tr key={singer.id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {singer.id}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {singer.name}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {singer.age}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {singer.genre}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <a
                          key={singer.id}
                          href={`/edit/${singer.id}`}
                          className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                        >
                          Update
                        </a>
                        <button
                          onClick={() => removeSinger(singer.id)}
                          className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <div className="inline-flex mt-2 xs:mt-0">
                  <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
