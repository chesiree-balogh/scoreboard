const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

const teamName1 = () => {
  const teamName = document.querySelector('.team-1-input').value
  const updateTeam1 = teamName
  console.log(updateTeam1)
  document.querySelector('.team-1-name').textContent = updateTeam1
}

const teamName2 = () => {
  const teamName = document.querySelector('.team-2-input').value
  const updateTeam2 = teamName
  console.log(updateTeam2)
  document.querySelector('.team-2-name').textContent = updateTeam2
}

const calculateScore1 = addOne => {
  console.log(addOne + 'button clicked')
  const teamOneScore = document.querySelector('.team-1-score').textContent
  const total = parseInt(teamOneScore) + 1
  console.log(total)
  document.querySelector('.team-1-score').textContent = total
}

const calculateScore2 = addOne => {
  console.log(addOne + 'button clicked')
  const teamTwoScore = document.querySelector('.team-2-score').textContent
  const total = parseInt(teamTwoScore) + 1
  console.log(total)
  document.querySelector('.team-2-score').textContent = total
}

const minusScore1 = minusOne => {
  console.log(minusOne + 'button clicked')
  const teamOneScore = document.querySelector('.team-1-score').textContent
  const total = parseInt(teamOneScore) - 1
  console.log(total)
  document.querySelector('.team-1-score').textContent = total
}

const minusScore2 = minusOne => {
  console.log(minusOne + 'button clicked')
  const teamTwoScore = document.querySelector('.team-2-score').textContent
  const total = parseInt(teamTwoScore) - 1
  console.log(total)
  document.querySelector('.team-2-score').textContent = total
}

document.addEventListener('DOMContentLoaded', main)
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', teamName1)
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', teamName2)
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', calculateScore1)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', calculateScore2)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', minusScore1)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', minusScore2)
