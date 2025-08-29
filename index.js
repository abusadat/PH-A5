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
            const historyList = document.getElementById("history-list");
            historyList.insertAdjacentHTML('beforeend', `
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
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = "";
  });

  // copying the numbers
const copyCountEl = document.getElementById("copy-count");
const copyCards = document.querySelectorAll(".card");

for (let card of copyCards) {
  // find this card's Copy button (by its copy icon)
  const copyIcon = card.querySelector(".fa-copy");
  const copyButton = copyIcon ? copyIcon.closest("button") : null;
  const numberEl = card.querySelector(".phone-number"); // hotline to copy

  if (!copyButton || !numberEl) continue;

  copyButton.addEventListener("click", function () {
    const hotline = numberEl.innerText.trim();
    if (!hotline) {
      alert("Nothing to copy in this card.");
      return;
    }

    // copy to clipboard (modern API -> fallback)
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(hotline)
        .then(function () { afterCopy(hotline); })
        .catch(function () { fallbackCopy(hotline); afterCopy(hotline); });
    } else {
      fallbackCopy(hotline);
      afterCopy(hotline);
    }
  });
}

// fallback for older browsers
function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  document.body.removeChild(ta);
}

// after-copy: alert + increment global counter
function afterCopy(hotline) {
  alert("Copied hotline: " + hotline);
  if (!copyCountEl) return;
  let n = parseInt(copyCountEl.innerText, 10) || 0;
  copyCountEl.innerText = String(n + 1);
}