const musics = ['peirre', 'metro', 'f1lthy']

musics.forEach(music => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = music.toUpperCase()

  btn.addEventListener('click', () => {
    stopMusic()
    document.getElementById(music).play()
  })

  stopMusic = () => {
    musics.forEach(music => {
      const song = document.getElementById(music)
      song.pause()
      song.currentTime = 0
    })}

  document.getElementById('buttons').
  appendChild(btn)
})
