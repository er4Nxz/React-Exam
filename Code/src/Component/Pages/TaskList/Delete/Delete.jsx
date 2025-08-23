import axios from "axios";

const Delete = ({ id }) => {
  const deleteList = () => {
    axios.delete(`https://685c4d07769de2bf085c58e4.mockapi.io/Task/${id}`).then(() => {
      axios.get("https://685c4d07769de2bf085c58e4.mockapi.io/Task");
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
