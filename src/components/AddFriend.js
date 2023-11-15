import { useState } from "react";
import InputElement from "./InputElement";
import Button from "./button";
import { nanoid } from "nanoid";

export default function AddFriend({ setIsAddFr, setFrList }) {
  const [name, setName] = useState("");
  const [imgURL, setImgURL] = useState("https://i.pravatar.cc/48");
  function closeAddFrSec() {
    setIsAddFr(() => false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (name && imgURL) {
      let newFriend = {
        id: nanoid(5),
        name,
        image: imgURL,
        balance: 0,
      };

      setFrList((f) => [...f, newFriend]);
      closeAddFrSec();
    }
  }

  return (
    <>
      <form className="addFriend-sec" onSubmit={handleSubmit}>
        <InputElement
          bgColor="white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
          Friend name
        </InputElement>
        <InputElement
          bgColor="white"
          value={imgURL}
          onChange={(e) => setImgURL(e.target.value)}
        >
          Image URL
        </InputElement>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            marginTop: "10px",
          }}
        >
          <Button outerWidth="100%" btnwidth="50%">
            Add
          </Button>
        </div>
      </form>
      <div className="closeBtn">
        <Button handleClick={closeAddFrSec}>Close</Button>
      </div>
    </>
  );
}
