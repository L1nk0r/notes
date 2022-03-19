const btn = document.querySelector("#addBtn");
const cont = document.querySelector(".container");
const noticeInput = document.querySelector("#noticeInput");

/* let keyI = localStorage.length; */

const wrapper = document.querySelector(".wrapper");
let toast = wrapper.querySelector(".toast");
let closeIcon = toast.querySelector(".close-icon");

closeIcon.addEventListener("click", function(){closeNotification()})


function btns_bar(){
   var btnsBar = document.createElement("div");
   btnsBar.classList.add("buttons_bar");

   var btnDel = document.createElement("button");
   btnDel.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
   btnDel.classList.add("buttons_bar__button");
   btnDel.classList.add("hidden");
   btnDel.addEventListener("click", function(){remove_notice(this.parentNode.parentNode)});

   var btnOpen = document.createElement("button");
   btnOpen.innerHTML = '<i class="fa-solid fa-book-open"></i>';
   btnOpen.classList.add("buttons_bar__button");
   btnOpen.classList.add("hidden");
   btnOpen.addEventListener("click", function(){open_notice(this)});

   var btnEdit = document.createElement("button");
   btnEdit.innerHTML = '<i class="fa-solid fa-pen"></i>';
   btnEdit.classList.add("buttons_bar__button");
   btnEdit.classList.add("hidden");
   btnEdit.addEventListener("click", function(){edit_notice()});

   btnsBar.appendChild(btnDel);
   btnsBar.appendChild(btnOpen);
   btnsBar.appendChild(btnEdit);

   return btnsBar;
}

function add_notice(){
   var notice = noticeInput.value;
   /* localStorage.setItem(`${keyI}`, notice);
   keyI++; */

   if (notice != ""){
      add_notice_area(notice);
   }

   noticeInput.value = "";
}

function undo_hidden(item){
   Array.from(item.children[1].children).forEach(element => {
      if (element.tagName === "BUTTON"){
         element.classList.remove('hidden');
      }
   });
}

function do_hidden(item){
   Array.from(item.children[1].children).forEach(element => {
      if (element.tagName === "BUTTON"){
         element.classList.add('hidden');
      }
   });
}

function add_notice_area(notice){
   var newNotice = document.createElement("div");
   var noticeTextArea = document.createElement("div");
   newNotice.classList.add("notice");

   var ready_notice = parse_notice(notice);

   noticeTextArea.innerHTML = ready_notice;

   newNotice.appendChild(noticeTextArea);
   newNotice.appendChild(btns_bar());

   newNotice.addEventListener("mouseover", function(){undo_hidden(this)});
   newNotice.addEventListener("mouseout", function(){do_hidden(this)});

   cont.appendChild(newNotice);
}

function remove_notice(item){
   item.remove();
}

function open_notice(item){
   console.log("open" + item);
}

function edit_notice(){
   console.log('edit');
}

function parse_notice(notice){
   let strings = notice.split('\n');
   let result = "";
   strings.forEach(string => {
      if (string[0] === '#'){
         result += "<h2>" + string.substr(1) + "</h2>\n";
      } else if (string[0] === '!'){
         result += "<p><i>" + string.substr(1) + "</i>\n";
      } else if (string[0] === '+'){
         result += "<p><b>" + string.substr(1) + "</b>\n";
      } else {
         result += "<p>" + string + "\n";
      }
   });

   return result;
}

function closeNotification(){
   remove_notice(document.querySelector(".wrapper"));
}

/* function onLoad(){
   let keys = Object.keys(localStorage);
   for(let key of keys) {
      add_notice_area(localStorage.removeItem(key));
   }
} */

btn.addEventListener("click", function(){add_notice()});

/* window.onload = onLoad(); */