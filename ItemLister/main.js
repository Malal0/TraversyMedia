var form = document.querySelector("#addForm");
var itemList = document.querySelector("#items");
var filter = document.querySelector("#filter");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.querySelector("#item").value;

    // Create new li element
    var li = document.createElement("li");

    // Add class
    li.className = "list-group-item";
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button element
    var deleteBtn = document.createElement("button");

    // Add classes to del button
    deleteBtn.className = "red-btn";

    //Append text node
    deleteBtn.appendChild(document.createTextNode("X"));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li)
}

// Remove Item
function removeItem(e) {
    if (e.target.classList.contains("red-btn")) {
        if (confirm("Are you sure?")) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // Convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get <li>s
    var items = itemList.getElementsByTagName("li");
    //Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    })
}