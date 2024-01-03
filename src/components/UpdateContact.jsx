import React, { useEffect, useState } from "react";

function UpdateContact({ findData ,refetch}) {
  const [formData, setFormData] = useState({
    profilePicture: findData.profilePicture,
    name: findData.name,
    email: findData.email,
    phoneNumber: findData.phoneNumber,
    Address: findData.Address,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://task-backend-iota.vercel.app/api/v1/contact/${findData._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result)
        if(result.statusCode === 200){
          alert('update successfull')
          refetch()
        }
        // Update state or perform any other actions upon successful update
        setMessage("Contact updated successfully");
      } else {
        console.error("Failed to update contact. Server response:", response.statusText);
        // Handle error scenarios
      }
    } catch (error) {
      console.error("Error updating contact:", error);
      // Handle general errors
    }
  };

  useEffect(() => {
  }, [findData]);

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-center text-lg">Update Data</h3>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="profilePicture"
              className="block text-sm font-medium text-gray-600"
            >
              Photo Url
            </label>
            <input
              type="text"
              placeholder="Image Url"
              className="file-input file-input-bordered text-gray-600 px-2 max-w-xl w-full"
              name="profilePicture"
              defaultValue={findData.profilePicture}
              onChange={handleChange}
            />

            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              defaultValue={findData.name}
              onChange={handleChange}
            />

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              name="email"
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              defaultValue={findData.email}
              onChange={handleChange}
            />

            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>
            <input
              name="phoneNumber"
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              defaultValue={findData.phoneNumber}
              onChange={handleChange}
            />

            <label
              htmlFor="Address"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <input
              type="text"
              name="Address"
              className="mt-1 p-2 w-full border rounded-md"
              defaultValue={findData.Address}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white p-2 rounded-md"
            >
              Update Contact
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <div className="flex">
                <button className="btn">Close</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default UpdateContact;
