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
    `
        movieCard.append(myMovie)
    }

}
