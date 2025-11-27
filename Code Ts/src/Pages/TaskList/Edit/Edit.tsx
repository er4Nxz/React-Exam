import { useEffect, useState, type FC } from "react";
import { useParams } from "react-router-dom";
import Update from "./Update";
import useApi from "../../../Components/Hooks/useApi";
import type { task } from "../../../Components/Hooks/Hooks.types";

const Edit: FC = () => {
  const { id } = useParams();
  const [list, setList] = useState<task | null>(null);

  const { data } = useApi<task>(`/mockapi/Task/${id}`);
  useEffect(() => {
    setList(data);
  }, [data]);
  return <>{list && <Update list={list} />}</>;
};

export default Edit;
