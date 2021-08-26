document.body.style.fontFamily = "Times New Roman, Times, serif";
document.getElementById("adhar").innerHTML = "1234 5678 9866";
document.getElementById("name").innerHTML = "Narendra";
document.getElementById("age").innerHTML = "24";
document.getElementById("email").innerHTML = "guvi@gmail.com";
document.getElementById("city").innerHTML = "Hyderabad";
document.getElementById("company").innerHTML = "Guvi Comapny";
document.getElementById("contact").innerHTML = "9988776655";

var element = document.getElementsByTagName("li");

// Iterate through each li and change the class to "listitem".
for (let i = 0; i < element.length; i++) {
  element[i].className = "listitem";
}
//create a new image element and set it to image source url and append the image element to your page
var imgelement = document.createElement("img");
imgelement.src =
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";

document.body.appendChild(imgelement);
