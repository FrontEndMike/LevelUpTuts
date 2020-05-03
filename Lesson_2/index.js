// Made up code

const chargeCard = () => new Promise(( resolve, reject ) => {
	// card is valid
	reject("Fail!!!");
	if (true) {
		return resolve(true);
	}
	return resolve(false);
});


chargeCard()
.then((val) => {
	console.log(val);
})
.catch((err) => {
	console.log(err);
});