import Friend from "./Friend";

export default function List({ frList, handleSelectedFr, selectedFr }) {
  return (
    <>
      <ul className="friend-list">
        {frList.map((friend, i) => (
          <Friend
            obj={friend}
            index={i}
            key={friend.id}
            handleSelectedFr={handleSelectedFr}
            selectedFr={selectedFr}
          ></Friend>
        ))}
      </ul>
    </>
  );
}
