//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//6bRJ5VcSUKLRydyFKUctSYZk4uQpks7rSvzrYh5v
fetch(
  `https://api.nasa.gov/planetary/apod?api_key=6bRJ5VcSUKLRydyFKUctSYZk4uQpks7rSvzrYh5v&date=2001-07-16`
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.querySelector("img").src = data.hdurl;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
