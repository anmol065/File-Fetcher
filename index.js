// javascript file
console.log("running")

document.querySelector("#container").style.display="none";
document.getElementById('user_file').addEventListener('change', function() {

var file=this.files[0];
var fr=new FileReader();
fr.onload=function(){
  document.getElementById('result')
      .textContent=fr.result;

    }
   let objectURL = URL.createObjectURL(file);

   document.querySelector("#download_button").addEventListener("click",function() {
     document.querySelector("#container").style.display="block";  
   })

   
   document.querySelector("#submit").addEventListener("click",function() {
     let username = document.getElementById('username').value;
     let password = document.getElementById('password').value;
      console.log(username);
      if(username==="user123" && password==="user1234")
      {

        console.log(username,password);
        document.querySelector("#submit").download = file; // this name is used when the user downloads the file
        document.querySelector("#submit").href = objectURL;
      }
      else{
        console.log("wrong credentials")
      }
     })
  
fr.readAsText(this.files[0]);
})

