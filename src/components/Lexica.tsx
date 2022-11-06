import useSwr from "swr";
import { Fragment } from "react";
import Spinner from "./Spinner";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
import { LexicaTypes } from "../types/LexicaTypes";

type PropsTypes = {
  prompt?: string;
  data: LexicaTypes[] | undefined;
};

const Lexica = ({ data }: PropsTypes) => {
  return (
    <>
      <div className="grid grid-cols-5 gap-2">
        {data?.map((search: any) => (
          <Fragment key={search.id}>
            <div className="">
              <img src={search.src} alt={search.prompt} />
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Lexica;
