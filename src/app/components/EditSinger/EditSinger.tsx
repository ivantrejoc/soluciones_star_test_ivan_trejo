"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

export const SingerEditSchema = z.object({
  id: z
    .string()
    .regex(new RegExp(/^\d*$/), "ID must have only numbers")
    .min(1, "ID is required"),
  name: z
    .string()
    .regex(
      new RegExp(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/),
      "Name must have only letters"
    )
    .min(1, "Name is required"),
  age: z
    .string()
    .regex(new RegExp(/^\d*$/), "Age must have only numbers")
    .min(1, "Age is required"),

  genre: z.string().min(1, "Genre is required")
});

const EditSinger = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof SingerEditSchema>>({
    resolver: zodResolver(SingerEditSchema)
  });

  const router = useRouter();

  // envío de formulario. Funcíon asíncrona que hace un fetch a /api/user para envíar los datos contenidos en FormSchema
  const createSinger = async (values: z.infer<typeof SingerEditSchema>) => {
    console.log("ESTO ES LO QUE ESTÁ LLEGANDO A createSinger", values);
    const { id, name, age, genre } = SingerEditSchema.parse(values);
    const ageToNum = Number(age);
    console.log("TIPO DE DATO AGE: ", typeof ageToNum);
    const response = await fetch(`http://localhost:3000/api/singers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
        name: name,
        age: ageToNum,
        genre: genre
      })
    });

    if (response.ok) {
      //si recibe un status 200 envía alert de registro exitoso, caso contrario alerta de un error
      alert("Successful Update");
      router.push("/");
    } else {
      alert("Update failed");
      console.error("Update failed", errors);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Update Singer
        </h4>
        <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Enter the singer details.
        </p>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(createSinger)}
        >
          <div className="mb-4 flex flex-col gap-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full text-[13px] font-normal leading-tight text-blue-gray-400 transition-all">
                Name
              </label>
              <input
                id="id"
                type="number"
                className="mt-3 peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="2..."
                {...register("id")}
              />
              {errors?.id?.message && (
                <p className="text-xs text-gray-800">{errors.id.message}</p>
              )}
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full text-[13px] font-normal leading-tight text-blue-gray-400 transition-all">
                Name
              </label>
              <input
                id="name"
                className="mt-3 peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Joaquin Sabina..."
                {...register("name")}
              />
              {errors?.name?.message && (
                <p className="text-xs text-gray-800">{errors.name.message}</p>
              )}
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full text-[13px] font-normal leading-tight text-blue-gray-400 transition-all">
                Age
              </label>
              <input
                id="age"
                type="number"
                className="mt-3 peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="25"
                {...register("age")}
              />
              {errors?.age?.message && (
                <p className="text-xs text-gray-800">{errors.age.message}</p>
              )}
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full text-[13px] font-normal leading-tight text-blue-gray-400 transition-all">
                Genre
              </label>
              <input
                id="genre"
                className="mt-3 peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Reggaeton..."
                {...register("genre")}
              />
              {errors?.genre?.message && (
                <p className="text-xs text-gray-800">{errors.genre.message}</p>
              )}
            </div>
          </div>
          <div className="inline-flex items-center"></div>
          <button
            className="mt-6 block w-full select-none rounded-lg bg-blue-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-400/20 transition-all hover:shadow-lg hover:shadow-blue-400/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            data-ripple-light="true"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditSinger;
