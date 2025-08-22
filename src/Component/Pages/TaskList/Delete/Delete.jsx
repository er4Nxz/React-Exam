import axios from "axios";

const Delete = ({ id }) => {
  const deleteList = () => {
    axios.delete(`http://localhost:3000/List/${id}`).then(() => {
      axios.get("http://localhost:3000/List");
    });
  };
  return (
    <>
      <button
        className="btn btn-danger"
        onClick={() => {
          deleteList();
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Delete;
