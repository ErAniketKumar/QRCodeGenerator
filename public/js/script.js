document.getElementById("qrForm").addEventListener("submit", function (event) {
	event.preventDefault();
	fetch("/qrgenerator", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			text: document.querySelector('input[name="text"]').value,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			document.getElementById(
				"qrCode"
			).innerHTML = `<img src="${data.qrImage}">`;
			document.getElementById("downloadBtn").setAttribute("href", data.qrImage);
		});
});
