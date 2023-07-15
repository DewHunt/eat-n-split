/* eslint-disable react/prop-types */
import Friend from "./Friend";
import "./friends.css";

const FriendLists = ({ friendLists, friendSelection, selectedFriend }) => {
  return (
    <>
      {friendLists.map((friend) => (
        <Friend
          friend={friend}
          selectedFriend={selectedFriend}
          saveSelection={friendSelection}
          key={friend.id}
        />
      ))}
    </>
  );
};

export default FriendLists;
