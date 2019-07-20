(() => {
	console.log('fired!');
	
	// set up your variable stack -> make connections to the elements you're interacting with on the page
	let mobileNav = document.querySelector('.nav'),
		navPanel = document.querySelector('#burgerCon'),
		
		// select ALL of the nav panel anchor tags (the a elements)
		navLinks = navPanel.querySelectorAll('a');
	
	function toggleNav(event) {
		// e is the event object. by default, anchor tags try to navigate somewhere. we don't want that to happen so prevent that default behaviour and write your own
		event.preventDefault();
		
		// console.log is just for testing purposes... remove this when you have things working
		console.log('should show nav dropdown');
		
		// this should only fire when you click on an anchor tag -> "this" is the element you're clicking on and it has a default nodeName (look in the inspector panel to find it)
		
		if (this.nodeName == "A") {
			debugger; // just for testing... remove when things are working
			//we clicked on an anchor tag, so do some navigation
			//window.scrollTo({
				// we can ask the window to scroll to an element on the page => smoothscroll effect
				//top: this.offsetTop,
				//behavior: 'smooth'
			//})
		}
		
		// make the mobile nav show up when you click on the nav link at the top right and make it go away again on a second click
		navPanel.classList.toggle('show-mobile-nav');
	}
	
	// these are the triggers that fire off our functionality (when the user clicks on something)
	mobileNav.addEventListener('click', toggleNav);
	navLinks.forEach(link => link.addEventListener('click', toggleNav));
})();