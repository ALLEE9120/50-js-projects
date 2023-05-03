const choice = document.querySelector('#choices');
const results = document.querySelector('.results');

let choices = []

let word = []

choice.addEventListener('keyup', (e) => {
  if (e.key=== ',') {
    choices.push(word.join(''))
    choice.value = ''
  } else if (e.key === 'Enter') {randomSelect()}

  word = []
  word.push(e.target.value)
  results.innerHTML = choices.map(choice => `<span class="tag">${choice}</span>`).join('')
})

function randomSelect() {
  const times = 30

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag)
    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100);
  }, 100)

  setInterval(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()

      highlightTag(randomTag)

    }, 100);
  }, times * 100);

}

function pickRandomTag() {
  const  tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}
