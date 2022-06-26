var click = document.querySelector('ul');
click.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);


var close = document.getElementsByClassName("close");
var i;
for(i=0;i<=close.length;i++){
  close[i].onclick = function(){
    var temp = this.parentElement;
    temp.style.display = "none";
  }
}

function addElem(){
  if(document.querySelector('#Input').value.length == 0){
    alert("Please Enter a Task")
  }else{
    document.querySelector("#items").innerHTML+=`
    <ul id="list">
    <li>${document.querySelector("#Input").value}<i class="fa fa-trash-o close"  aria-hidden="true"></i></li>
    </ul>
    `;

    var curr = document.querySelectorAll(".close");
    for(var i=0;i<=curr.length;i++){
        curr[i].onclick = function(){
          var temp = this.parentElement;
          temp.style.display = "none";
        }
    }
  }
}


