document.getElementById('search-btn').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input')
    const inputValue = searchInput.value

    const url = (`https://www.thesportsdb.com/api/v1/json/2/all_countries.php?s=${inputValue}`)

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data.countries))
})

const displayCountries = countries => {
    const searchResult = document.getElementById('search-results')

    countries.forEach(country => {
        console.log(country)
        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.innerHTML = `
        <p> ${country.name_en} </p>
        `
        searchResult.appendChild(div)
    })

}