// Create database count
if (localStorage.getItem("count") == null) {
	localStorage.setItem("count",0)
}

//update HTML to match source
function update(){
	document.getElementById("count").innerHTML = Number(localStorage.getItem("count"))
}

update()

// add one to count
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1))
	update()
}

//reset count
function reset () {
	if(confirm("Are you sure you want to start over?")){
		localStorage.setItem("count", 0)
		update()
	}
}