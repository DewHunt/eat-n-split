/* eslint-disable react/prop-types */
import "./friends.css";

const Friend = ({ friend, saveSelection, selectedFriend }) => {
  let isSelected = selectedFriend?.id === friend.id ? true : false;
  return (
    <div>
      <div className="card mb-1">
        <div className="card-body px-2 py-2">
          <div className="d-flex">
            <div className="px-1 mw-100">
              <img
                className="list-img img-fluid rounded"
                src={friend.image}
                alt={friend.name}
              />
            </div>
            <div className="px-1 flex-grow-1">
              <div className="firend-name">{friend.name}</div>
              {friend.balance < 0 && (
                <div className="msg text-danger">
                  You owe {friend.name} {friend.balance}৳
                </div>
              )}

              {friend.balance > 0 && (
                <div className="msg text-success">
                  {friend.name} owe You {friend.balance}৳
                </div>
              )}

              {friend.balance == 0 && (
                <div className="msg">You and {friend.name} are even</div>
              )}
            </div>
            <div className="px-1 mw-100 align-self-center">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={() => saveSelection(friend)}>
                {isSelected ? "Close" : "Select"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
