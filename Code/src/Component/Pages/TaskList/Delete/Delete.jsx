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
        className="bg-red-600 text-white px-4 py-2 transition-all duration-300 hover:bg-red-700"
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
