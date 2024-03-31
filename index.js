var onexx= document.getElementById("onex")
var webdisplay= document.getElementById("npon")
 onexx.addEventListener("click",function(){
   fetch("https://www.boredapi.com/api/activity")
   .then((res)=> res.json())
   .then((data)=> {console.log(data)
                  webdispla(data)});
})

function webdispla(data){
  webdisplay.innerHTML=`
   <h1>${data.accessibility}</h1>
   <h2>Activity: ${data.activity}</h2>
   <h2>participants: ${data.participants}</h2>
   <h2>type: ${data.type}</h2>
   <h2>Key: ${data.key}</h2>
   <h2>Link: ${data.link}</h2>
  `
}
