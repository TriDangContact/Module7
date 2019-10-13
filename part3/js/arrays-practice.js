//STEP 1
console.log("Step 1");
var favorite = ["LOTR Trilogy", "Star Wars: AOTC", "Avengers MCU", "The Prestige", "Dark Knight Trilogy"]
console.log(favorite[1])

//STEP 2
console.log("Step 2");
function Movies(length) {
    this.array = new Array(length);
    for (i = 0; i<length; i++) {
      this.array[i] = favorite[i];
    }
}
var movies = new Movies(5);
console.log(movies.array[0]);

//STEP 3
console.log("Step 3");
function Movies(length) {
    this.array = new Array(length);
    for (i = 0; i<length; i++) {
      this.array[i] = favorite[i];
    }
}
var movies = new Movies(5);
movies.array.splice(2, 0, "Thor:Ragnarok")
console.log(movies.array.length);
console.log(movies.array)

//STEP 4
console.log("Step 4");
var movies = []
for (i = 0; i<favorite.length; i++) {
  movies[i] = favorite[i];
}
movies.shift()
console.log(movies)

//STEP 5
console.log("Step 5");
var movies = []
for (i = 0; i<favorite.length; i++) {
  movies[i] = favorite[i];
}
for (i = 0; i<favorite.length; i++) {
  console.log(movies[i]);
}

//STEP 6
console.log("Step 6");
for (element in movies) {
  console.log(movies[element]);
}

//STEP 7
console.log("Step 7");
var sorted = movies.sort();
for (element in sorted) {
  console.log(sorted[element]);
}

//STEP 8
console.log("Step 8");
var leastFavMovies = ["Twilight1", "Twilight2", "Twilight3"];
console.log("Movies I like: \n\n");
for (i = 0; i<favorite.length; i++) {
  console.log(movies[i]);
}
console.log("");
console.log("Movies I regret watching: \n\n");
for (i = 0; i<leastFavMovies.length; i++) {
  console.log(movies[i]);
}

//STEP 9
console.log("Step 9")
movies = movies.concat(leastFavMovies);
sorted = movies.sort();
//display in reverse, NOT reverse the array
for (i = movies.length-1; i >= 0; i--) {
  console.log(sorted[i]);
}

//STEP 10
console.log("Step 10")
console.log(sorted.pop());
