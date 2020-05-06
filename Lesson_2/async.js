// Creates Button value for the "Button" on the HTML
const button = document.querySelector('button');

function makeRequest(location) {
	return new Promise(( resolve, reject) => {
		console.log(`Making Request to ${location}`)
		if ( location === 'Google') {
			resolve('Google says hi')
		} else {
			reject('We can only talk to Google')
		}
	})
}

function processRequest(response) {
	return new Promise(( resolve, reject) => {
		console.log('Processing response')
		resolve(`Extra Information + ${response}`)
	})
}


// makeRequest('Google').then(response => {
// 	console.log('Response Received')
// 	return processRequest(response)
// }).then(processedResponse => {
// 	console.log(processedResponse)
// }).catch(err => {
// 	console.log(err)
// })

async function doWork() {
	const inputVal = document.getElementById("userInput").value;
	try {
		// Passes input value through makeRequest function
		const response = await makeRequest(inputVal)
		console.log('Response Received')
		const processedResponse = await processRequest(response)
		console.log(processedResponse)
	} catch(err){
		console.log(err)
	}
}

button.addEventListener("click", doWork);