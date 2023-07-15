import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./App.css";
import AddFriendForm from "./components/AddFriendForm/AddFriendForm";
import SplitBillForm from "./components/SplitBillForm/SplitBillForm";
import Button from "./components/button/Button";
import FriendLists from "./components/friends/FriendLists";
import Header from "./components/header/Header";

const MySwal = withReactContent(Swal);

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [friendLists, setFriendLists] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const showAddFriendForm = () => {
    setShowForm((showForm) => !showForm);
    setSelectedFriend(null);
  };

  const saveFriend = (friend) => {
    console.log("friend: ", friend);
    setFriendLists((friendLists) => [...friendLists, friend]);
    MySwal.fire(
      "Saved",
      "Your friend information saved successfully!",
      "success"
    );
  };

  const saveSelectedFriend = (friend) => {
    setSelectedFriend((selectedFriend) =>
      selectedFriend?.id === friend.id ? null : friend
    );
    setShowForm(false);
  };

  const saveBill = (billData) => {
    console.log("billData: ", billData);
    setFriendLists((friendLists) =>
      friendLists.map((friend) => {
        if (friend.id === selectedFriend?.id) {
          if (billData.whoIsPaying === "user") {
            friend.balance += billData.paidBill;
          } else {
            friend.balance -= billData.paidBill;
          }
        }
        return friend;
      })
    );
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col">
            <div className="card">
              <div className="card-header text-end">
                <Button
                  btnClass={
                    showForm ? "btn-outline-danger" : "btn-outline-info"
                  }
                  onClick={showAddFriendForm}>
                  {showForm ? "Close" : "Add New Friend"}
                </Button>
              </div>
              <div className="card-body">
                <FriendLists
                  friendLists={friendLists}
                  friendSelection={saveSelectedFriend}
                  selectedFriend={selectedFriend}
                />
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col">
            {showForm && <AddFriendForm saveFriend={saveFriend} />}
            {selectedFriend && (
              <SplitBillForm
                selectedFriend={selectedFriend}
                saveBill={saveBill}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
