const whichColor__chooseButton = document.getElementById('whichColor__choose')

whichColor__chooseButton.onclick = () => {

  const whichColor__reference = document.getElementById('whichColor__reference')
  const reference = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"]

  let referenceHexadecimal = "#"

  for (let i = 0; i < 6; i++) {
    const referenceIndex = Math.floor(Math.random() * reference.length)
    referenceHexadecimal += reference[referenceIndex]
  }

  whichColor__reference.textContent = referenceHexadecimal
  body.style.backgroundColor = referenceHexadecimal

}