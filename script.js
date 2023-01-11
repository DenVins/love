async function expl(){document.getElementById('konten').style.top = "35vh";document.getElementById('koteks').style.opacity = "1";document.body.style.backgroundColor = "#000";}
async function showbblur(){
document.getElementById('bodyblur').style.opacity = "1";
document.getElementById('bodyblur').style.visibility = "visible";
}
async function showkonten(){
document.getElementById('fire').style.opacity = "1";
document.getElementById('konten').style.top = "10vh";
document.getElementById('fotoloveu').style.opacity = "1";
document.getElementById('fotoloveu').style.height = "180px";
}

   function ketik() {if(i<text.length){
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;setTimeout(ketik,100);}
      if(i==text.length){setTimeout(ketikk,200);}
    }
    function ketikk() {if(u<text2.length){
      document.getElementById("text2").innerHTML += text2.charAt(u);
      u++;setTimeout(ketikk,200);}
      if(u==text2.length){showkonten();}
                      }