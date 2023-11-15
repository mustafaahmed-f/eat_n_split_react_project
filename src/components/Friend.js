import Button from "./button";

export default function Friend({ obj, index, handleSelectedFr, selectedFr }) {
  let deptStatus =
    obj.balance === 0 ? "even" : obj.balance < 0 ? "You owe" : "Friend owes";

  return (
    <li
      className="friend-details"
      style={selectedFr !== obj ? {} : { backgroundColor: "#fff4e6" }}
    >
      <div className="personal-photo">
        <img src={obj.image} alt={obj.name}></img>
      </div>
      <div style={{ width: "100%", padding: "4px" }}>
        <h3>{obj.name}</h3>
        <p
          className={
            deptStatus === "even"
              ? ""
              : deptStatus === "You owe"
              ? "you-owe"
              : "friend-owes"
          }
        >
          {deptStatus === "even"
            ? `You and ${obj.name} are even`
            : deptStatus === "You owe"
            ? `You owe ${obj.name} ${Math.abs(obj.balance)} €`
            : `${obj.name} owes you ${Math.abs(obj.balance)} €`}
        </p>
      </div>
      <Button handleClick={() => handleSelectedFr(obj)}>
        {selectedFr === obj ? "close" : "Select"}
      </Button>
    </li>
  );
}
