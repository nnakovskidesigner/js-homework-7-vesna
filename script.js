var heading = document.querySelector('h1');
heading.style.paddingTop = '50px';
heading.style.paddingLeft = '90px';
heading.style.fontSize = '55px';
heading.style.color = 'white';

document.getElementById('awesome-bikes').style.paddingLeft = "60px"; //ullist 

var myList = document.getElementById('awesome-bikes');

var text = [
  "Polar",
  "Giant",
  "Trek",
  "CannonDale"
] 

var imageSources = [
  "https://i.ibb.co/YBMX07y/1.jpg",
  "https://i.ibb.co/gdstxWz/2.jpg",
  "https://i.ibb.co/FqVP1Ck/3.jpg",
  "https://i.ibb.co/mJrw27F/4.jpg" //note,reminder to self: the images are uploaded online, when using this page for a portfolio, check if they are still availbale on the web, because they wont display
]

for (var i = 0; i < imageSources.length; i++){
  var li = document.createElement("li");
  li.textContent = text[i];

  li.style.display = "inline-block";
  li.style.margin = "10px";
  li.style.fontSize = "40px";
  li.style.color = "white";
  li.style.borderRadius = "50px";


  const img = document.createElement("img");
  img.src = imageSources[i];
  img.width = 340;
  img.height = 300;
  img.style.borderRadius = '20px';
  li.appendChild(img);
  myList.appendChild(li);

  img.addEventListener('mouseover', function() {
    img.style.border = 'solid 5px #FFFFFF';
    img.style.boxShadow = '0 0 20px 0px red';
  });
  
  img.addEventListener('mouseout', function() {
    img.style.border = '';
    img.style.boxShadow = '';
  });
}