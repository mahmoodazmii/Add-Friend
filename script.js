var istatus = document.querySelector("h5");

var addFriend = document.querySelector("#add");
var check = 0;

addFriend.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    check = 0;
  }
});
