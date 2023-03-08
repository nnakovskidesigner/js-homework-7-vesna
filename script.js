document.getElementById('myHeading').style.color = 'white';

const heading = document.querySelector('h1');
heading.style.paddingTop = '50px';
heading.style.paddingLeft = '90px';
heading.style.fontSize = '55px';

const myList = document.getElementById('awesome-bikes');

const imageSources = [
  "",
  "https://i.imgur.com/RMFqjVt.jpg",
  "https://i.imgur.com/0SYqtif.jpg",
  "https://i.imgur.com/YtPGaRR.jpg"
]

for (let i = 0; i <imageSources.length; i++){
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = imageSources[i];
  img.width = 200;
  img.height = 200;
  li.appendChild(img);
  myList.appendChild(li);
}