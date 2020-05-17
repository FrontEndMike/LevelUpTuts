document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

const SHIPPING_COST = 10;

const cart = [10, 5, 15];

const fakeAPICharge = total => true;
const fakeSendReceipt = total => true;

const getSubTotal = cart => cart.reduce((tempTotal, item) => tempTotal + item);
const getTotal = subTotal => subTotal + SHIPPING_COST;
const sendReceipt =({email, total}) => 
		fakeSendReceipt({
			email,
			total
		});

		
const checkout = cart => {
	const subTotal = getSubTotal(cart);
	const total = getTotal(subTotal);
	const orderSuccess = fakeAPICharge(total);
	if ( orderSuccess ) {
		sendReceipt ({email: "fakeemail@gmail.com", total });
	}
	return orderSuccess;
}

checkout(cart);