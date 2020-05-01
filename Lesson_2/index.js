const logo = document.querySelector("#logo");

logo.innerText = "yo!";

const heading = document.createElement('div')
heading.innerHTML = `
	<section style="padding: 1rem; width: 20rem; display: block; margin: 0 auto; background-color: lightblue;">
		<span>hi</span> 
		<p>
			This text has been entered through the dom.
		</p>
	</section>
	`;
document.body.appendChild(heading);

