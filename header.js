$(function () {
	div = document.getElementById("header");
	var bar = '';
	bar += '<nav class="navbar navbar-expand navbar-dark fixed-top bg-primary">';
	bar += '<a class="navbar-brand" href="#"><img src="Images/Logoshanko_White_Trans_Textless.png" style="width:69px;height:69px"></a>';
	bar += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">';
	bar += '<span class="navbar-toggler-icon"></span>';
	bar += '</button>';
	bar += '<div class="collapse navbar-collapse" id="navbarColor01">';
	bar += '<ul class="navbar-nav mr-auto">';
	if (div.attributes.getNamedItem("name").value == "index") {
		bar += '<li class="nav-item active">';
	}
	else {
		bar += '<li class="nav-item">';
	}
	bar += '<a class="nav-link" href="https://www.logoshanko.com">Home';
	bar += '<span class="sr-only">(current)</span>';
	bar += '</a>';
	bar += '</li>';
	if (div.attributes.getNamedItem("name").value == "products") {
		bar += '<li class="nav-item active">';
	}
	else {
		bar += '<li class="nav-item">';
	}
	bar += '<a class="nav-link" href="https://www.logoshanko.com/products">Products</a>';
	bar += '</li>';
	if (div.attributes.getNamedItem("name").value == "about") {
		bar += '<li class="nav-item active">';
	}
	else {
		bar += '<li class="nav-item">';
	}
	bar += '<a class="nav-link" href="https://www.logoshanko.com/about">About Us</a>';
	bar += '</li>';
	bar += '</ul>';
	bar += '</div>';
	bar += '</nav>';

	div.innerHTML += bar;
});