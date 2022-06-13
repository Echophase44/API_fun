//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//6bRJ5VcSUKLRydyFKUctSYZk4uQpks7rSvzrYh5v
fetch(
  `https://api.nasa.gov/planetary/apod?api_key=6bRJ5VcSUKLRydyFKUctSYZk4uQpks7rSvzrYh5v`
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
