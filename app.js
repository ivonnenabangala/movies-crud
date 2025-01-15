let movies = []


function addMovie() {
    document.getElementById("myForm").submit();
}

let movieId = 1
const form = document.getElementById("myForm")
form.onsubmit = (event) => {
    event.preventDefault()
    const imageUrl = document.getElementById("imageUrl").value;
    const description = document.getElementById("description").value;
    const title = document.getElementById("title").value;
    const rating = document.getElementById("rating").value;

    console.log({
        imageUrl,
        description,
        title,
        rating,
    });
    const newMovie = {
        id: movieId++,
        image: imageUrl,
        description: description,
        title: title,
        rating: rating
    }
    movies.push(newMovie)
    getMovie(newMovie)
    console.log(movies)
    form.reset()
}

const getMovie = () => {
    let list = document.getElementById("movieCard")
    list.innerHTML = ""
    for (movie of movies) {

        const myMovie = document.createElement('div')
        myMovie.className = "card"
        myMovie.innerHTML = `
    <h1>${movie.title}</h1>
        <img src="${movie.image}" alt="">
        <p>${movie.description}</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <div class="buttons">
        <button onclick="openForm(); prepopulateForm(${movie.id})">Edit</button>
        <button onclick="deleteMovie(${movie.id})">Delete</button>
        </div>
    `
        movieCard.append(myMovie)
    }

}

const deleteMovie = (id) => {
    let index = movies.map(x => {
        return x.id;
      }).indexOf(id);
      
      movies.splice(index, 1);
      getMovie();
      console.log(movies);
}

const prepopulateForm = (id) => {
    const movie = movies.find((movie) => movie.id === id); 
    if (movie) {
        const editFormContainer = document.getElementById("editForm");
        editFormContainer.innerHTML = ""; 

        const movieDetails = document.createElement("div");
        movieDetails.className = "form-popup";
        movieDetails.style.display = "block"; 
        movieDetails.innerHTML = `
        <form action="submit" class="form-container">
            <h1>Edit Movie</h1>

            <label for="editImageUrl">Image URL</label><br>
            <input type="text" id="editImageUrl" value="${movie.image}"><br>

            <label for="editDescription">Description</label><br>
            <input type="text" id="editDescription" value="${movie.description}"><br>

            <label for="editTitle">Title</label><br>
            <input type="text" id="editTitle" value="${movie.title}"><br>

            <label for="editRating">Rating</label><br>
            <input type="text" id="editRating" value="${movie.rating}"><br>

            <button type="button" class="btn" onclick="editMovie(${movie.id})">Save</button>
            <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
        </form>
        `;

        editFormContainer.appendChild(movieDetails); 
    }
};

const editMovie = (id) => {
    const movie = movies.find((movie) => movie.id === id)
    if(movie){
        movie.image = document.getElementById("editImageUrl").value
        movie.description = document.getElementById("editDescription").value
        movie.title = document.getElementById("editTitle").value
        movie.rating = document.getElementById("editRating").value
        closeForm(); 
        getMovie();
    }

}
const openForm = () => {
    document.getElementById("editForm").style.display = "block";
}

  
  const closeForm = () => {
    document.getElementById("editForm").style.display = "none";

  }
