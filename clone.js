const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kanpur');
xhr.setRequestHeader('x-rapidapi-key', '6e36061f3fmsh23892ad90fe035fp1e751ajsn082706da3075');
xhr.setRequestHeader('x-rapidapi-host', 'weather-by-api-ninjas.p.rapidapi.com');

xhr.send(data);