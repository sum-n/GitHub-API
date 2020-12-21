var form = document.getElementById("my-form")
var loadingElement = document.querySelector('#result');
loadingElement.style.display = 'none';
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
	let image = document.getElementById("result");
	image.innerHTML = `<a target="_blank" href="https://github.com/${search}"> <img src="${data.avatar_url}"/></a>`
	
    let name = document.getElementById('name');
    name.innerHTML = `<b>Name: </b>${data.name}`;

    let login = document.getElementById('login');
    login.innerHTML = `<b>Login ID: </b>${data.login}`;

    let bio = document.getElementById('bio');
    bio.innerHTML = `<b>Bio: </b>${data.bio == null ? 'User hasn\'t set a bio :(' : data.bio}`;

    let followers = document.getElementById('followers');
    followers.innerHTML = `<b>Followers: </b>${data.followers}`;

    let following = document.getElementById('following');
	following.innerHTML = `<b>Following: </b>${data.following}`;
	
	let public_repos = document.getElementById('public_repos');
	public_repos.innerHTML = `<b>Public Repos: </b>${data.public_repos}`;

    let location = document.getElementById('location');
    location.innerHTML = `<b>Location: </b>${data.location}`
	
})


})
