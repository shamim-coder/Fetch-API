fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        name: "Shamim Reza",
        age: 30,
        designation: "Front-end Developer",
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
})
    .then((res) => res.json())
    .then((data) => console.log(data));
