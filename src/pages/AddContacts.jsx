import React, { useState } from "react";
import { useForm } from "react-hook-form";


function AddContacts() {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");
  const onSubmit = (data) => {
    fetch("https://task-backend-iota.vercel.app/api/v1/contact/create-contact", {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((res) => setMessage(res.message));
  };
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Contact</h2>
      <div className="flex items-center justify-center" style={{ height: "80vh" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center gap-5">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block w-full max-w-xl text-center mb-2 text-sm font-medium text-gray-600"
              >
                profile Photo
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                {...register("profilePicture", {
                  required: true
                })}
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Phone Number
              </label>
              <input
                {...register("phoneNumber", { required: true })}
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Address
              </label>
              <input
                type="text"
                {...register("Address", { required: true })}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Add Contact
          </button>
          {message.length > 0 && <b className="text-center">{message}</b>}
        </form>
      </div>
    </>
  );
}

export default AddContacts;
