let prevScrollPos = window.pageYOffset

window.onscroll = function () {
	let currentScrollPos = window.pageYOffset
	const navbar = document.querySelector('.navbar')

	if (prevScrollPos > currentScrollPos) {
		navbar.style.top = '0'
	} else {
		navbar.style.top = '-80px'
	}

	prevScrollPos = currentScrollPos

	if (window.pageYOffset > 80) {
		navbar.classList.add('sticky')
	} else {
		navbar.classList.remove('sticky')
	}
}

function toggleContactDetails() {
	var contactDetails = document.getElementById('contactDetails')
	if (
		contactDetails.style.display === 'block' ||
		contactDetails.style.display === ''
	) {
		contactDetails.style.display = 'none'
	} else {
		contactDetails.style.display = 'block'
	}
}

document.getElementById('getInTouchBtn').addEventListener('click', function () {
	toggleContactDetails()
})

document
	.getElementById('contactLink')
	.addEventListener('click', function (event) {
		event.preventDefault()
		toggleContactDetails()
	})

function openSideBar() {
	const navbar = document.querySelector('.navbar')
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'flex'
	navbar.style.display = 'none'
}

function hideSideBar() {
	const sidebar = document.querySelector('.sidebar')
	const navbar = document.querySelector('.navbar')
	sidebar.style.display = 'none'
	navbar.style.display = 'flex'
}
