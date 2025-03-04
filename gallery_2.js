function upDate(previewPic){
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.textContent = previewPic.alt;
    console.log("Mouse over event triggered");
}

function unDo(){
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('original-image.jpg')";
    imageDiv.textContent = "Hover over an image below";
    console.log("Mouse out event triggered");
}

function myFunction() {
    console.log("Focus event triggered");
}

function myBlurFunction() {
    console.log("Blur event triggered");
}

window.onload = function() {
    let images = document.querySelectorAll("img");
    images.forEach((img, index) => {
      img.setAttribute("tabindex", index + 1);
      img.addEventListener("focus", myFunction);
      img.addEventListener("blur", myBlurFunction);
      img.addEventListener("mouseover", () => upDate(img));
      img.addEventListener("mouseout", unDo);
    });

    console.log("Page has loaded and tabindex attributes have been added");
  }

