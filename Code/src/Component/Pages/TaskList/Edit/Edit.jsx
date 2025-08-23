import axios from "axios";
import { useEffect, useState } from "react";
import Update from "./Update";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [list, setList] = useState(null);

  const fetchList = async () => {
    try {
      let response = await axios.get(
        `https://685c4d07769de2bf085c58e4.mockapi.io/Task/${id}`
      );
      setList(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return <>{list && <Update list={list} />}</>;
};

export default Edit;
