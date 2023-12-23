import React, { useContext } from "react";
import { AuthContext } from "../../Hooks/AuthContext";
import { BASE } from "../../Hooks/axios/axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteTrans = ({ onSuccess }) => {
  const { token } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const URI = `transaction/${id}`;

  const handleDelete = async () => {
    try {
      await BASE.delete(URI, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Trigger the onSuccess function passed from the parent component
      alert("Deleted");
      navigate("/AdminDashboard");
      onSuccess();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="flex  flex-col h-[50vh] justify-center text-center">
      <div className="">
        <p>Are you sure you want to delete?</p>
        <button
          className="bg-btn text-background px-5 py-2"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteTrans;
