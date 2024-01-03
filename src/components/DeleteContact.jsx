import React, { useEffect } from "react";

function DeleteContact({id,refetch}) {

    const deleteData = (id)=>{
        fetch(`https://task-backend-ecru-two.vercel.app/api/v1/contact/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => refetch())
    }
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">are you sure ? want to delete data? </h3> 
          <div className="modal-action">
            <form method="dialog" >
              <div className="flex justify-between">
              <button onClick={()=>deleteData(id)} className="btn">Delete Data</button>
              <button className="btn">Close</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default DeleteContact;
