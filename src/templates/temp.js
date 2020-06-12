e => {
  e.preventDefault();  
 e.currentTarget.parentElement.classList.add('wow');  
 var prevImgClone = document.querySelector('.fancy-image-clone');  
 if (prevImgClone) { document.body.removeChild(prevImgClone);  
 }
  var imgClone = e.currentTarget.parentElement.cloneNode(true);  
 imgClone.classList.add('fancy-image-clone');  
 document.body.appendChild(imgClone);  

}


e => {
  e.preventDefault();  
 var prevImgClone = document.querySelector('.fancy-image-clone');  
 if (prevImgClone) { document.body.removeChild(prevImgClone);  
 } var largeImgUrl = e.currentTarget.href;  
 var imgClone = e.currentTarget.parentElement.cloneNode(true);  
 imgClone.classList.add('fancy-image-clone');  
 imgClone.querySelector('img').setAttribute('src', 'https://thumbs.gfycat.com/SpecificCharmingLeafcutterant-size_restricted.gif');  
 imgClone.querySelector('img').setAttribute('src', largeImgUrl);  
 document.body.appendChild(imgClone)


 //create a new element instead of cloning
var popImgBox = document.createElement('div');
popImgBox.classList.add('pop-image-box');
