let entry = document.getElementById("enterTitle");
let save = document.getElementById("save");
let showTitle = document.getElementById("showTitle");
let blogEntry = document.getElementById("blogEntry");
let showEntry = document.getElementById("showEntry");
save.addEventListener("click", function(event)
{   showTitle.innerHTML = entry.value;
    showEntry.innerHTML = blogEntry.value; 
    entry.value = "";
    blogEntry.value = "";
});