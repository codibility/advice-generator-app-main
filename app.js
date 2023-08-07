const btn = document.querySelector(".btn");
const link = "https://api.adviceslip.com/advice";
const req = new XMLHttpRequest();
const text = document.getElementById("adviceContainer");
const adviceNo = document.getElementById("adviceNo");

req.open("GET", link);
req.send();

btn.onclick = () => {
  req.open("GET", link);
  req.send();
};

req.addEventListener("load", () => {
  data = JSON.parse(req.responseText);
  text.textContent = `"${data.slip.advice}"`;
  adviceNo.textContent = `#${data.slip.id}`;
});
