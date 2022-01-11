/** Task 1:
 * create 3 objects with the name movie1, movie2, movie3
 * Add 3 properties to it
 * - id -> just a unique id, you can start with 1
 * - name -> a movie name (e.g. COCO)
 * - image  -> an http link of the image on the internet
 * rating -> a rating number from 1 to 10
 *
 * After you create the movies, console log them.
 * Open the live server, and see the logs in the console of the browser
 *
 */

// add the movies variables here ....

const movie1 = {
  id: 1,
  name: "Django",
  image:
    "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
  rating: 8,
};

const movie2 = {
  id: 2,
  name: "Dont Look Up",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfTeV7wQoKq7qI_2noWRFKfzFwGmxnmElmXnv0fpoO7u0KYSv",
  rating: 9,
};

const movie3 = {
  id: 3,
  name: "IT",
  image:
    "https://m.media-amazon.com/images/M/MV5BYjg1YTRkNzQtODgyYi00MTQ5LThiMDYtNDJjMWRjNTdjZDZlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
  rating: 10,
};

console.log([movie1, movie2, movie3]);

/** Task 2:
 * Create an array `movies`
 * Add to it the movies that you created on top.
 * Once you add one movie,
 * you will see the movie card in the html page!
 *
 * Don't add to the array the movies variables,
 * just copy paste the content to be in the following format
 * [
 *    {
 *       prop: value,
 *       prop: value,
 *       prop: value,
 *    },
 * ]
 */

const movies = [
  {
    id: 1,
    name: "Django",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
    rating: 8,
  },
  {
    id: 2,
    name: "Dont Look Up",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfTeV7wQoKq7qI_2noWRFKfzFwGmxnmElmXnv0fpoO7u0KYSv",
    rating: 9,
  },
  {
    id: 3,
    name: "IT",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjg1YTRkNzQtODgyYi00MTQ5LThiMDYtNDJjMWRjNTdjZDZlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    rating: 10,
  },
];

/** TASK 3:
 * Create a new file call it `movies.json`
 * Copy paste the content of the array inside the json file
 * Make sure it's a json format.
 */
