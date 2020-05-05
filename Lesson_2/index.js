// Made up code

const chargeCard = () => new Promise(( resolve, reject ) => {
	// card is valid
	// reject("Fail!!!");
	if (true) {
		return resolve(true);
	}
	return resolve(false);
});

const chargeCC = async (ccNumber) => {
	try{
		const res = await chargeCard(ccNumber);
		console.log(res);
		return res;
	} catch(error) {
		console.log(error);
	}
}

console.log(chargeCC('1234123412341234'));