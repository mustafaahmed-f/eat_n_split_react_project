import { useState } from "react";
import InputElement from "./InputElement";
import Button from "./button";

export default function BillSection({ selectedFr, setFrList, setSelectedFr }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [whoPay, setWhoPay] = useState("You");
  let friendExpense = bill ? bill - yourExpense : "";
  let newBalance;

  if (whoPay === "You") {
    newBalance = friendExpense;
  } else {
    newBalance = -yourExpense;
  }

  function handleSplitBill() {
    if (bill && friendExpense && friendExpense) {
      console.log("split bill");
      setFrList((fr) =>
        fr.map((friend) => {
          if (friend.id === selectedFr.id) {
            return { ...friend, balance: friend.balance + newBalance };
          } else {
            return friend;
          }
        })
      );
      setSelectedFr(null);
    }
  }

  return (
    <div className="bill-section">
      <h2>split a bill with {selectedFr?.name}</h2>
      <InputElement
        value={bill ? bill : ""}
        onChange={(e) => setBill(() => Number(e.target.value))}
      >
        💰 Bill value
      </InputElement>
      <InputElement
        type={"number"}
        max={Number(bill)}
        value={yourExpense ? yourExpense : ""}
        onChange={(e) =>
          setYourExpense(() =>
            Number(e.target.value) > bill ? yourExpense : Number(e.target.value)
          )
        }
      >
        🧍‍♀️ Your expense
      </InputElement>
      <div className="friend-expense">
        <p>👫 {selectedFr?.name}'s expense</p>
        <input
          disabled
          style={{ backgroundColor: "#ffe8cc" }}
          value={friendExpense}
        />
      </div>
      <div className="choose-payer">
        <p>🤑 Who is paying the bill</p>
        <select
          className="who-pay"
          value={whoPay}
          onChange={(e) => setWhoPay(e.target.value)}
        >
          <option value={"You"}>You</option>
          <option value={selectedFr?.name}>{selectedFr?.name}</option>
        </select>
      </div>
      <div>
        <Button outerWidth="100%" btnwidth="45%" handleClick={handleSplitBill}>
          Split Bill
        </Button>
      </div>
    </div>
  );
}
