// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Add event listener to input field for Enter key press
var inputField = document.getElementById("myInput");
inputField.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) { // Enter key has keyCode 13
    newElement();
  }
});

// Function to get the current date and time and display it in the HTML
function showCurrentDate() {
    // Create a new Date object to represent the current date and time
    const currentDate = new Date();
  
    // Extract year, month, and day from the Date object
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed
    const date = currentDate.getDate();
  
    // Format the date string as desired
    const formattedDate = `${year}. ${month}. ${date}. `;
  
    // Select the HTML element with the id "currentDate" and set its text content
    document.getElementById("currentDate").textContent = formattedDate;
  }
  
  // Call the function to display the current date when the page loads
  showCurrentDate();