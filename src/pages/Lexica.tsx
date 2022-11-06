import LexicaC from '../components/Lexica';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LexicaTypes } from '../types/LexicaTypes';
const Lexica = () => {
  const [searchTerm, setSearchTerm] = useState({
    prompt: '',
    nsfw: false,
    grid: false,
    limit: '',
  });
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<LexicaTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(searchTerm);

    const { prompt, nsfw, grid, limit } = searchTerm;

    if ([searchTerm.prompt, searchTerm.limit].includes('')) {
      setError(true);
      return;
    }

    setLoading(true);
    const url = `https://api-projects-production.up.railway.app/lexica/search?prompt=${prompt}&width=512&height=51&grid=false&nsfw=${nsfw}&limit=${limit}&guidance=40`;
    // console.log(url);
    const response = await axios.get<LexicaTypes[]>(url);
    // console.log(response.data);
    setData(response.data);
    setLoading(false);
  };

  return (
    <>
      <div className="my-20">
        <h1 className="font-bold text-4xl mb-12">
          Busca entre miles de imágenes generadas con IA{' '}
        </h1>
        {error && (
          <p className="text-lg text-red-600">Debes introduccir una Termino de busqueda</p>
        )}
        {/* {loading && <p>Cargando ...</p>} */}

        <form onSubmit={handlerSubmit} className="">
          <div className="">
            <input
              value={searchTerm.prompt}
              onChange={(e) =>
                setSearchTerm({ ...searchTerm, prompt: e.target.value })
              }
              type="text"
              className="bg-slate-100 border border-slate-300 p-2 w-96 mr-2 rounded"
            />
            <button
              type="submit"
              className={`${
                loading === true
                  ? 'bg-black/60 text-white py-2 px-3 rounded'
                  : 'bg-black text-white py-2 px-7 rounded'
              }`}
              disabled={loading}
            >
              {loading === true ? 'Buscando...' : 'Buscar'}
            </button>
          </div>

          <div className="flex justify-center gap-4">
            <div>
              <label className="mr-2" htmlFor="">
                Solo nsfw
              </label>
              <input
                type="checkbox"
                value="true"
                name="nsfw"
                // checked={searchTerm.nsfw }
                defaultChecked={searchTerm.nsfw}
                onChange={(e) =>
                  setSearchTerm({
                    ...searchTerm,
                    nsfw: e.target.checked,
                  })
                }
              />
            </div>
            <select
              name=""
              id=""
              onChange={(e) =>
                setSearchTerm({ ...searchTerm, limit: e.target.value })
              }
            >
              <option value="">Mostrar</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
        </form>
      </div>
      {data.length >= 1 ? (
        <LexicaC data={data} />
      ) : (
        <p>Empieza Buscando algo :)</p>
      )}
    </>
  );
};

export default Lexica;
