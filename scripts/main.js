const btn = document.querySelector("#addBtn");
const cont = document.querySelector(".container");
const noticeInput = document.querySelector("#noticeInput");

function add_notice(){
   var notice = noticeInput.value;

   if (notice != ""){
      var newNotice = document.createElement("div");
      newNotice.classList.add("notice");

      var ready_notice = parse_notice(notice);

      newNotice.innerHTML = ready_notice;

      cont.appendChild(newNotice);
      newNotice.addEventListener("click", function(){remove_notice(this)});
   }

   

   noticeInput.value = "";
}

function remove_notice(item){
   item.remove();
}

function parse_notice(notice){
   let strings = notice.split('\n');
   let result = "";
   strings.forEach(string => {
      if (string[0] === '#'){
         result += "<h2>" + string + "</h2>\n";
      } else {
         result += "<p>" + string + "\n";
      }
   });

   return result;
}

btn.addEventListener("click", function(){add_notice()});