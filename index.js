// heart count functionality
const heartIcons = document.querySelectorAll(".fa-heart");

for (let icon of heartIcons) {
    icon.addEventListener("click", function () {
        let heartCountEl = document.getElementById("heart-count");
        let heartCount = parseInt(heartCountEl.innerText);
        heartCount++;
        heartCountEl.innerText = heartCount;
        icon.classList.add("text-red-500");
    });
}

//calling -functionality
const callButtons = document.querySelectorAll(".call-button");
const coinCountEl = document.getElementById("coin-count");
let coinCount = parseInt(coinCountEl.innerText);
const callCharge = 20;


for (let button of callButtons) {
    button.addEventListener("click", function () {
        if (coinCount < callCharge) {
            alert("Not enough coins to make a call. Please recharge.");
            return;
        } else {
            const card = this.closest(".card");
            const phoneNumber = card.querySelector(".phone-number").innerText;
            const serviceName = card.querySelector(".service-name").innerText;
            alert("Calling " + phoneNumber + " for " + serviceName);
            coinCount -= callCharge;
            coinCountEl.textContent = String(coinCount);

            //add call history
            const time = new Date().toLocaleTimeString([], {
                hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
            });
            const callHistory = document.getElementById("call-history");
            callHistory.insertAdjacentHTML('beforeend', `
  <div class="bg-[#FAFAFA] p-4 m-2 rounded-[8px] flex justify-between items-center">
    <div>
      <h3 class="font-semibold text-lg">${serviceName}</h3>
      <p class="text-gray-500 text-lg">${phoneNumber}</p>
    </div>
    <p>${time}</p>
  </div>
`);
        }
    });
}

//clearing call history
document.getElementById("clear-history")
  .addEventListener("click", function () {
    const callHistory = document.getElementById("call-history");
    callHistory.innerHTML = "";
  });