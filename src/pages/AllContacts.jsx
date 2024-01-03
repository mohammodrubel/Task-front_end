import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import "../Style/AllCard.css";
import DeleteContact from "../components/DeleteContact";
import UpdateContact from "../components/UpdateContact";

function AllContacts() {
  const [deleteId, setDeleteId] = useState("");
  const [findData, setFindData] = useState({});

  const {
    isLoading: isPending,
    error,
    data,
    refetch,
  } = useQuery({
    queryKey: ["contact"],
    queryFn: () =>
      fetch("https://task-backend-silk.vercel.app/api/v1/contact/").then((res) => res.json()),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Ensure that 'data' is defined before mapping over it
  if (!data) {
    return null; // or handle the absence of data in another way
  }

  
  const toggleFvrt = (id,status)=>{
  fetch(`https://task-backend-silk.vercel.app/api/v1/contact/toggle/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isFavorite: status,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      refetch();
    })
    .catch((error) => {
      console.error('Error toggling favorite status', error);
    });
};
  

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {data.data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={item.profilePicture}
              alt="User Image"
              className="w-auto object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform origin-top hover:scale-110"
            />
            <div className="flex justify-between items-center">
              <div className="p-8">
                <p className="text-gray-600 font-medium">{item.name}</p>
                <p className="text-gray-600 font-medium">{item.email}</p>
                <p className="text-gray-600 font-medium">{item.phoneNumber}</p>
                <p className="text-gray-600 font-medium">{item.Address}</p>
                {item.isFavorite === false && <button onClick={()=>toggleFvrt(item._id,true)} className="btn btn-sm text-black font-bold">
                  Like
                </button>}
                {item.isFavorite === true && <button onClick={()=>toggleFvrt(item._id,false)} className="btn btn-sm text-black font-bold">
                  Favorite
                </button>}
              </div>
              <div>
                <div
                  className="mt-4 p-2"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  <button
                    onClick={() => setFindData(item)}
                    className="btn btn-sm"
                  >
                    Update
                  </button>
                </div>
                <div
                  className="mt-4 p-2"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  <button
                    onClick={() => setDeleteId(item._id)}
                    className="btn btn-sm "
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <DeleteContact id={deleteId} refetch={refetch} />
      <UpdateContact findData={findData} refetch={refetch} />
    </div>
  );
}

export default AllContacts;
