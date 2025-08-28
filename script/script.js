function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
// heart Button header
let heartNumber = 0;
const hearCount = getElement("heart-count");
const hearBtns = document.getElementsByClassName("heartBtn");

for (let heart of hearBtns) {
  heart.onclick = function () {
    heartNumber++;
    hearCount.innerText = heartNumber;
  };
}
// copy Button header
let copyNumber = 0;
const copyCount = getElement("copy-count");
const copyBtns = document.getElementsByClassName("copyBtn");

for (let copy of copyBtns) {
  copy.onclick = function () {
    copyNumber++;
    copyCount.innerText = copyNumber;
    const numberCopy = copy
      .closest(".card-container")
      .querySelector(".hot-line").innerText;
    alert(numberCopy);

    navigator.clipboard.writeText(numberCopy);
  };
}

let coinNumber = 100;
const coinCount = getElement("coin-count");
// Emergency Btn
const callerId1 = getElement("callerId1");
const hotline1 = getElement("hotline1");
document.getElementById("emergencyBtn").addEventListener("click", function () {
  if (coinNumber < 20) {
    alert("📞 Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  alert(`📞 Calling ${callerId1.innerText} ${hotline1.innerText}...`);

  coinNumber -= 20;
  coinCount.innerText = coinNumber;

  // call history

  const CallHistory = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Fire Service Number</h1>
                <p class="text-[18px] font-semibold">999</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

  CallHistory.appendChild(newHistory);
});

// Police btn
const callerId2 = getElement("callerId2");
const hotline2 = getElement("hotline2");
document.getElementById("policeBtn").addEventListener("click", function () {
  if (coinNumber < 20) {
    alert("📞 Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  alert(`📞 Calling ${callerId2.innerText} ${hotline2.innerText}...`);

  coinNumber -= 20;
  coinCount.innerText = coinNumber;
  // call history

  const CallHistory = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Police Helpline Number</h1>
                <p class="text-[18px] font-semibold">999</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

  CallHistory.appendChild(newHistory);
});

// Fire Service
const callerId3 = getElement("callerId3");
const hotline3 = getElement("hotline3");
document.getElementById("fireBtn").addEventListener("click", function () {
  if (coinNumber < 20) {
    alert("📞 Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  alert(`📞 Calling ${callerId3.innerText} ${hotline3.innerText}...`);

  coinNumber -= 20;
  coinCount.innerText = coinNumber;
  // call history

  const CallHistory = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Fire Service Number</h1>
                <p class="text-[18px] font-semibold">999</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

  CallHistory.appendChild(newHistory);
});
// Ambulance Service
const callerId4 = getElement("callerId4");
const hotline4 = getElement("hotline4");
document.getElementById("ambulanceBtn").addEventListener("click", function () {
  if (coinNumber < 20) {
    alert("📞 Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  alert(`📞 Calling ${callerId4.innerText} ${hotline4.innerText}...`);

  coinNumber -= 20;
  coinCount.innerText = coinNumber;
  // call history

  const CallHistory = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Ambulance Service</h1>
                <p class="text-[18px] font-semibold">1994-999999</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

  CallHistory.appendChild(newHistory);
});
// Women & Child Helpline
const callerId5 = getElement("callerId5");
const hotline5 = getElement("hotline5");
document.getElementById("womenChildBtn").addEventListener("click", function () {
  if (coinNumber < 20) {
    alert("📞 Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  alert(`📞 Calling ${callerId5.innerText} ${hotline5.innerText}...`);

  coinNumber -= 20;
  coinCount.innerText = coinNumber;
  // call history

  const CallHistory = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Women & Child Helpline</h1>
                <p class="text-[18px] font-semibold">109</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

  CallHistory.appendChild(newHistory);
});
// Anti-Corruption Helpline
const callerId6 = getElement("callerId6");
const hotline6 = getElement("hotline6");
document.getElementById("antiCrpBtn").addEventListener("click", function () {
  if (coinNumber < 20) {
    alert("📞 Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  alert(`📞 Calling ${callerId6.innerText} ${hotline6.innerText}...`);

  coinNumber -= 20;
  coinCount.innerText = coinNumber;

  // call history

  const CallHistory = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Anti-Corruption Helpline</h1>
                <p class="text-[18px] font-semibold">106</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

  CallHistory.appendChild(newHistory);
});
// Electricity Helpline
const callerId7 = getElement("callerId7");
const hotline7 = getElement("hotline7");
document.getElementById("electricityBtn")
  .addEventListener("click", function () {
    if (coinNumber < 20) {
      alert("📞 Not enough coins. You need at least 20 coins to make a call.");
      return;
    }
    alert(`📞 Calling ${callerId7.innerText} ${hotline7.innerText}...`);

    coinNumber -= 20;
    coinCount.innerText = coinNumber;
    // call history

    const CallHistory = getElement("call-history");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Electricity Helpline</h1>
                <p class="text-[18px] font-semibold">16216</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

    CallHistory.appendChild(newHistory);
  });
// Brac Helpline
const callerId8 = getElement("callerId8");
const hotline8 = getElement("hotline8");
document.getElementById("bracBtn").addEventListener("click", function () {
  if (coinNumber < 20) {
    alert("📞 Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  alert(`📞 Calling ${callerId8.innerText} ${hotline8.innerText}...`);

  coinNumber -= 20;
  coinCount.innerText = coinNumber;
  // call history

  const CallHistory = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Brac Helpline</h1>
                <p class="text-[18px] font-semibold">16445</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

  CallHistory.appendChild(newHistory);
});
// Bangladesh Railway Helpline
const callerId9 = getElement("callerId9");
const hotline9 = getElement("hotline9");
document.getElementById("railwayBtn").addEventListener("click", function () {
  if (coinNumber < 20) {
    alert("📞 Not enough coins. You need at least 20 coins to make a call.");
    return;
  }
  alert(`📞 Calling ${callerId9.innerText} ${hotline9.innerText}...`);

  coinNumber -= 20;
  coinCount.innerText = coinNumber;
  // call history

  const CallHistory = getElement("call-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
<div
              class="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-lg"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Bangladesh Railway Helpline</h1>
                <p class="text-[18px] font-semibold">163</p>
              </div>
              <div>${new Date().toLocaleTimeString()}</div>
            </div>

`;

  CallHistory.appendChild(newHistory);
});

document
  .getElementById("callHistoryBtn")
  .addEventListener("click", function () {
    const clearHistory = getElement("call-history");
    clearHistory.innerHTML = "";
  });
