document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

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

