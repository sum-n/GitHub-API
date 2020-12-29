var form = document.getElementById("my-form")
var loadingElement = document.querySelector('#result');


form.addEventListener('submit', function(e) {
	e.preventDefault()
	var search = document.getElementById("search").value

	document.getElementById("result").innerHTML = ""

	fetch("https://api.github.com/users/"+search)
	
	.then((result) => result.json())

	.then((data) => {

		console.log(data)
		loadingElement.style.display = '';

	//Displaying the user information
	var image = document.getElementById("result");
	image.innerHTML = `<a target="_blank" href="https://api.github.com/${search}"> <img src="${data.avatar_url}"/></a>`
	
    var name = document.getElementById('name');
    name.innerHTML = `<b>Name: </b>${data.name}`;

    var login = document.getElementById('login');
    login.innerHTML = `<b>Login ID: </b>${data.login}`;

    var bio = document.getElementById('bio');
    bio.innerHTML = `<b>Bio: </b>${data.bio == null ? 'Bio not found' : data.bio}`;

    var followers = document.getElementById('followers');
    followers.innerHTML = `<b>Followers: </b>${data.followers}`;

    var following = document.getElementById('following');
	following.innerHTML = `<b>Following: </b>${data.following}`;
	
	var public_repos = document.getElementById('public_repos');
	public_repos.innerHTML = `<b>Public Repos: </b>${data.public_repos}`;

    var location = document.getElementById('location');
	location.innerHTML = `<b>Location: </b>${data.location}`
	

})

})
