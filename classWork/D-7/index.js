const roomCode = document.querySelector(
  "#input-text"
)
const inputButton = document.querySelector(
  "#input-button"
)
const stringInput = document.querySelector(
  "#string-input"
)


function checkRoomCode(roomCode){
  if(roomCode == "BINH"){
    alert("Join room sucessfully")
    return
  }
   else alert("Join room failed")
}
inputButton.addEventListener(
  "click", function () {
    const inputCodeRoom = roomCode.value;
    checkRoomCode(inputCodeRoom)
  }
);

