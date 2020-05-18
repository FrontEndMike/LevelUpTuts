// FETCH!
// hit url and it returns some informtation
// primary method is grab data from an api


const SEARCH = document.getElementById("search");
const NEWSEARCH = document.getElementById("new-search");

function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('app');



function searchFunc() {
	// Take in input value from html
	// Variables had to be declared within function to work
	const SEARCH_QUERY = document.getElementById("input").value
    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${SEARCH_QUERY}`;
    // const API_URL = `https://www.googleapis.com/books/v1/volumes?q=javascript`;
	fetch(API_URL)
	.then(res => {
		return res.json();
	})
	.then(function(data) {
		// Objects, {}, in JavaScript does not have the method .map(), 
		// it's only for Arrays, [].
		// So in order for your code to work change data.map() 
		// to data.products.map() 
        // since items is an array which you can iterate upon.
        //.slice to limit .map results
		let book_list = data.items.slice(0, 10); 
		return book_list.map(function(new_list) {
			let author_name = new_list.volumeInfo.authors;
            let book_title = new_list.volumeInfo.title;
            let book_link = new_list.volumeInfo.canonicalVolumeLink;
            let book_img = new_list.volumeInfo.imageLinks.thumbnail;
			li = createNode('li'),
            li.innerHTML = `<a href="${book_link}" target="_blank">
                            <img src="${book_img}">
                            <span class="title">${book_title} </span>
                            <span class="aurthor"> Author : ${author_name} </span>
                            </a>`;
            append(ul, li);
            console.log(book_list);
        }) 
	})
	.catch(error => {
		console.log(error);
});
}
function newSearch() {
	document.getElementById("app").innerHTML = "";
}
NEWSEARCH.addEventListener("click", newSearch);
SEARCH.addEventListener("click", searchFunc);
