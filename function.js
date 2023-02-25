// chrome://extensions/
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const savetabBtn = document.getElementById("savetab-btn")
const ulEl = document.getElementById("ul-el")

//save tab btn

savetabBtn.addEventListener("click", function(){
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
     });
})

//getting items from local storage

let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

//truthy check
if (leadsFromLocalStorage) 
{
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

deleteBtn.addEventListener("click", function(){  
    if(myLeads === "" ){
        alert("⚠️ All fields are empty!")
    } 
    else{
        confirmMessage()
    }
})

function confirmMessage() {
  let text = "⚠️ Are you sure you want to delete?";
  if (confirm(text) == true) {
     localStorage.clear()
        myLeads = []
        render(myLeads) 
  } 
//   else {
//     text = "You canceled!";
//   }
}

//input button
inputBtn.addEventListener("click", function() {
    if(inputEl.value === ""){
        alert("⚠️ Please enter URL to save!")
    }
    else if(inputEl.value === ulEl){
        alert("⚠️ This URL has been already added!")
    }
    else{
    myLeads.push(inputEl.value)
    inputEl.value = ""

    //storing arrays as an strings in local storage as arrays can not be stored in the local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)
}
})

//rendering fucntion
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <ol>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </ol>
        `
    }
    ulEl.innerHTML = listItems  
}