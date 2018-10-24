(function() {
/*
  Initialize
	Run `displayList()` by default
	Attach event listeners to the parent element with id `dataDisplay`
	This allows event delegation to th children it gains later
*/
displayList(sortList(data));

var dataDisplay = document.getElementById("dataDisplay");

document.getElementById("dataDisplay").addEventListener("click", function(e) {
  // event delegation from #dataDisplay
	if(e.target && e.target.nodeName == "BUTTON") {
    var removeIndex = data.map(function(item) { return item.id; })
                           .indexOf(e.target.id);
    for( var i = 0; i < data.length; i++){
       if ( i === removeIndex) {
         data.splice(i, 1);
       }
    }
    displayList(data);
		console.log("Button ", e.target.id, " pressed");
	}
});

/*
  Functions
	displayList() - Dynamically creates a list with children per spec from the write up
	formatTypeText() - Takes a string and returns it in Title Case with all dashes and underscores replaced with spaces
	sortList() - returns a the passed list sorted by its `title` attribute
*/

function displayList(data) {
	var displayParent = document.getElementById('dataDisplay');
	displayParent.innerHTML = "";

	var listParent = document.createElement('ul');
	listParent.className = "list-group"

	if (data.length>0){
	  for (var i in data) {
	    var h3 = document.createElement('h3');
	    h3.innerHTML = data[i].title;

	    var span = document.createElement('span');
	    span.innerHTML = formatTypeText(data[i].type);

	    var removeButton = document.createElement('button');
	    removeButton.className = "btn btn-danger";
			removeButton.type = "button";
	    removeButton.innerHTML = "REMOVE";
	    removeButton.id = data[i].id

	    var listItem = document.createElement('li');
	    listItem.className = "list-group-item listItem"
	    listItem.appendChild(h3);
	    listItem.appendChild(span);
	    listItem.appendChild(document.createElement('hr'));
	    listItem.appendChild(removeButton);

	    listParent.appendChild(listItem);
	  }
	}
	else {
		listParent.innerHTML = "Empty";
		listParent.className = "text-muted text-center";
	}
  displayParent.appendChild(listParent);
}

function formatTypeText(str) {
  var str2 = stripDashUnderscore(str);
  return toTitleCase(str2);
}

function stripDashUnderscore(str) {
  var str2 = str.replace(/_/g, " ");
  return str2.replace(/-/g, " ");
}

// reference for title case: https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

function sortList(data) {
  return data.sort(function(a, b){
    if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    return 0;
  })
}

/*
  End File
*/
})();
