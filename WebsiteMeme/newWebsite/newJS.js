const cookiebutton = document.getElementById("cookiebutton")
const nul = document.getElementById("Tæl");
count =0;
cookiebutton.onclick = function(){
    count +=1;
    nul.innerHTML = count;

}
