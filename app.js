let movies = [
    {
        "image": "https://images.pexels.com/photos/29911918/pexels-photo-29911918/free-photo-of-majestic-lion-in-the-savanna-of-kenya.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aspernatur illum, eum eius debitis officia? Neque deserunt ullam nobis quam.",
        "title": "Mufasa",
        "rating": 4.5
    },

    {
        "image": "https://images.pexels.com/photos/20258/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aspernatur illum, eum eius debitis officia? Neque deserunt ullam nobis quam.",
        "title": "Swat",
        "rating": 3.8
    },

    {
        "image": "https://resizing.flixster.com/p1u1WyRGoIqcn9X00fuTS6Ocj38=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26415937_b_h9_ab.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aspernatur illum, eum eius debitis officia? Neque deserunt ullam nobis quam.",
        "title": "Citadel",
        "rating": 4.2
    }
]

let list = document.getElementById("moviesList")
document.getElementById("movieCard")
for(movie of movies){
    // let li = document.createElement('li')
    // li.innerText = movie.title
    // list.append(li)
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

