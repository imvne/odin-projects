const library = [];

function getNewBookInputs() {
	let bookData = {}
	
	const inputs = document.querySelectorAll('.input')
	
	for (let input of inputs){
		
		const inputValue = document.querySelector(`.${input.classList[0]}`).value;
		
		switch (input.classList[0]) {
			
			case "title-input" : bookData.title = inputValue;
			case "author-input" : bookData.author = inputValue;
			case "date-input" : bookData.date = inputValue;
			case "genre-input" : bookData.genre = inputValue;
			case "synopsis-textarea" : bookData.synopsis = inputValue;
		}
	}
	
	return bookData
}

function addBookToLibrary(){
	
	let newBook = getNewBookInputs()
	
	library.push(newBook)
	
	displayLibrary()
	
}

function displayLibrary(){
	
	const libraryContainer = document.querySelector('#library-container')
	libraryContainer.innerHTML = '' 
	
	library.forEach((book) => {
		
		const bookDiv = document.createElement('div');
		bookDiv.classList.add('book');

		bookDiv.innerHTML =
		`
		<div class="book-infos">
			<div class="title-author">
				<p>${book.title}</p>
				<p>${book.author}</p>
			</div>
			
			<div class="date-genre">
				<p>${book.date}</p>
				<p>${book.genre}</p>
			</div>
			
		</div>
		<p class="synopsis">${book.synopsis}</p>
		`
		
		libraryContainer.appendChild(bookDiv);
	})
	
	;
}