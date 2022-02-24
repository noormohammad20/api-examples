const loadUsers = () => {

    fetch('https://randomuser.me/api/?results=5000')
        .then(res => res.json())
        .then(data => displayUsers(data.results))

}
loadUsers()

const displayUsers = users => {
    const sliced = users.slice(0, 10)
    const usersContainer = document.getElementById('users-container')

    sliced.forEach(user => {
        console.log(user)
        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.classList.add('mb-4')
        div.style.borderRadius = 20

        div.innerHTML = `
         <div class="card" style="width: 18rem ;">
            <img height="250" width="200" src="${user.picture.large}" class="card-img-top" alt="...">
            <div class="card-body">
              <p> ${user.location.street.number},${user.location.street.name} </p>
              <h4> ${user.location.city} </h4>
              <h5> ${user.location.coordinates.longitude}
              <h6> ${user.location.timezone.description}

            </div>
        </div>
        `
        usersContainer.appendChild(div)
    })

}