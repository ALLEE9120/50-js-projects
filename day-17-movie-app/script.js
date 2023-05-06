const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1b0bb2e7fd93618e1f1dbe23ebf88cae&language=en-US&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=1b0bb2e7fd93618e1f1dbe23ebf88cae&query="'

const movies = document.querySelector('.movies')

const showMore = document.querySelector('.show-more')


const allMovies = document.querySelector('.movie')



async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    movies.innerHTML = ''

    data.results.forEach(movie => {
      movies.innerHTML += `<div class="movie">
      <img class="poster" src="${IMG_PATH}${movie.backdrop_path}" alt="">
      <div class="info">
      <h1 class="title">${movie.title}</h1>
      ${ratingColor(movie.vote_average)}
      </div>
      <div class="overview">
        <h1>${movie.title} ${ytsLink(movie.title, movie.release_date)}</h1>
        <p>${movie.overview}</p>
      </div>
    </div>`
  })
}

function ytsLink(title, date) {
  const year = date.split('-')[0]
  const search = title + ' ' + year
  const final = search.replace(/\s+/g, '-');
  const lower = final.toLowerCase()
  const correctedTitle = lower.replace(/['!,:]/g, "");
  console.log(correctedTitle)
  return `<a href="https://yts.mx/movies/${correctedTitle}">YTS</a>`
}

function ratingColor(rating) {
  if (rating >= 8) {
    return `<h2 class="rating" style="color: green;">${rating}</h2>`
  } else if (rating >= 5) {
    return `<h2 class="rating" style="color: orange;">${rating}</h2>`
  } else {
    return `<h2 class="rating" style="color: red;">${rating}</h2>`
  }
}

getMovies(API_URL)

const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm)

    search.value = ''
  } else {
    window.location.reload()
  }
})

let page = 1


showMore.addEventListener('click', () => {
  page++
  getMovies(API_URL + `&page=${page}`)
  const url = API_URL + `&page=${page}`
})
