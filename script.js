let allMovies = [];

// Define a movie class with parameters title (string), rating (number), and haveWatched (boolean)
class Movie {
    constructor(title, rating, havewatched) {
        this.title = title;
        this.rating = rating;
        this.havewatched = havewatched;
    }
}
let result = ''; // Initialize the result variable to accumulate output

// Add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    result += "<h2>A new movie is added</h2>";
    printMovies(); // Call the printMovies function to update the result
}


// Iterate through all elements of allMovies array
// Display the total number of movies in allMovies array
let printMovies = () => {
    result += "<h2>Printing all movies...</h2>";
    allMovies.forEach(movie => {
        result += `<p>${movie.title}, rating of ${movie.rating}, havewatched: ${movie.havewatched}</p>`;
    });
    result += `<p>You have ${allMovies.length} movies in total</p>`;
    updateResult(); // Call the updateResult function to display the result
}

// Display only the movies that have a rating higher than rating(argument)
// Display the total number of matches
let highRatings = (rating) => {
    let highRatedMovies = allMovies.filter(movie => movie.rating > rating);
    result += `<h2>Movies with a rating higher than ${rating}</h2>`;
    highRatedMovies.forEach(movie => {
        result += `<p>${movie.title} has a rating of ${movie.rating}</p>`;
    });
    result += `<p>In total, there are ${highRatedMovies.length} matches</p>`;
    updateResult(); // Call the updateResult function to display the result
}

// Toggle the 'haveWatched' property of the specified movie
let changeWatched = (title) => {
    const movie = allMovies.find(movie => movie.title === title);
    if (movie) {
        movie.havewatched = !movie.havewatched;
        result += "<h2>Changing the status of the movie...</h2>";
        updateResult(); // Call the updateResult function to display the result
    }
}

// Function to update the result displayed on the web page
let updateResult = () => {
    document.getElementById("result").innerHTML = result;
}




////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);