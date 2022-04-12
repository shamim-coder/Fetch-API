function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => getUserData(data));
}

const getUserData = (users) => {
    const usersContainer = document.getElementById("users");
    users.map((user) => {
        console.log(user);
        const { username, email, phone, website } = user;
        const { name } = user.company;
        const { city, street, suite, zipcode } = user.address;
        const userContainer = document.createElement("div");
        userContainer.classList.add("user");
        userContainer.innerHTML = `
            <h2>${name}</h2>
            <p>Username: ${username}</p>
            <p>Email: ${email}</p>
            <address>Address: ${suite} ${street} ${city} ${zipcode}</address>
            <p>Phone: <a href="tel:+${phone}">${phone}</a></p>
            <p>Website: <a href="http://${website}">${website}</a></p>
            <p>Company Name: ${name}</p>`;
        usersContainer.appendChild(userContainer);
    });
};
