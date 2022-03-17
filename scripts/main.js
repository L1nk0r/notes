const btn = document.querySelector("#addBtn");
const cont = document.querySelector(".container");
const noticeInput = document.querySelector("#noticeInput");

function add_notice(){
   var notice = noticeInput.value;

   if (notice != ""){
      var newNotice = document.createElement("div");
      newNotice.classList.add("notice");
      newNotice.innerHTML = notice;

      cont.appendChild(newNotice);
      newNotice.addEventListener("click", function(){remove_notice(this)});
   }

   noticeInput.value = "";
}

function remove_notice(item){
   item.remove();
}

btn.addEventListener("click", function(){add_notice()});