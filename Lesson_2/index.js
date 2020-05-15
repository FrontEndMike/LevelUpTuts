console.log(this);

const test = {
	name: "test",
	testFunc: function() {
		console.log(this.name);
		this.name = "Scott"
		console.log(this);
	},
	testFuncTwo: () => {
		console.log(this, 'arrow func');
	}
};

function team(name) {
	this.name = name;
	console.log(this);
}

const button = document.getElementById("new-colors");
button.addEventListener("click", function() {
	console.log(this);
});

test.testFunc();
test.testFuncTwo();
// team();
const wings = new team('Red Wings');