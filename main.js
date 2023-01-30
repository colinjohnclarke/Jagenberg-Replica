var coll = document.getElementsByClassName("collapsible");
console.log("coll", coll);

var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    var content = this.nextElementSibling.nextElementSibling;
    console.log("this is the content var", content);
    const addtopborder = document.querySelector(".show_companies");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      addtopborder.classList.remove("addtopborder");
      this.innerHTML = "+";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      addtopborder.classList.add("addtopborder");
      this.innerHTML = "-";
    }
  });
}
