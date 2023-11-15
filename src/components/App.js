import { useState } from "react";
import "../App.css";
import AddFriend from "./AddFriend";
import BillSection from "./BillSection";
import List from "./List";
import Button from "./button";

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

export default function App() {
  const [selectedFr, setSelectedFr] = useState(null);
  const [isAddFr, setIsAddFr] = useState(false);
  const [frList, setFrList] = useState([...initialFriends]);

  function openAddFrSec() {
    setIsAddFr(() => true);
  }

  function handleSelectedFr(fr) {
    setIsAddFr(false);
    if (fr === selectedFr) {
      setSelectedFr(null);
      return;
    }
    setSelectedFr(() => fr);
  }

  return (
    <div className="App">
      <div className="friend-section">
        <List
          frList={frList}
          handleSelectedFr={handleSelectedFr}
          selectedFr={selectedFr}
        ></List>

        <div className="addFrBtn">
          {!isAddFr && <Button handleClick={openAddFrSec}>Add Friend</Button>}
        </div>

        {isAddFr && (
          <AddFriend setIsAddFr={setIsAddFr} setFrList={setFrList}></AddFriend>
        )}
      </div>
      {selectedFr && (
        <BillSection
          selectedFr={selectedFr}
          setFrList={setFrList}
          setSelectedFr={setSelectedFr}
        ></BillSection>
      )}
    </div>
  );
}
