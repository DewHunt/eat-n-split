/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../button/Button";

const AddFriendForm = ({ saveFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const submitFormData = (e) => {
    e.preventDefault();
    if (!name || !image) {
      return;
    }
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image,
      balance: 0,
    };
    saveFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <>
      <div className="card">
        <div className="card-header text-center">
          <h4>Add Friend</h4>
        </div>
        <div className="card-body">
          <form onSubmit={(e) => submitFormData(e)}>
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                <div className="form-group">
                  <label htmlFor="name" className="mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                <div className="form-group">
                  <label htmlFor="image-url" className="mb-1">
                    Image Url
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2 text-end">
                <div className="form-group">
                  <Button btnClass="btn btn-outline-info">Save</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddFriendForm;
