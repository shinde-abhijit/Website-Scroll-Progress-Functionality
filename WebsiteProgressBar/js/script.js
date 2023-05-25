const colorFill = document.querySelector('.colorFill');
function progress(){
    colorFill.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(progress);
}
progress();


function darkMode(){
    const darkMode = document.body;
    darkMode.classList.toggle('changeMode');
    const containerOne = document.getElementById('one');
    containerOne.classList.toggle('containerJS');
    const containerTwo = document.getElementById('two');
    containerTwo.classList.toggle('containerJS');
    const containerThree = document.getElementById('three');
    containerThree.classList.toggle('containerJS');
    const containerFour = document.getElementById('four');
    containerFour.classList.toggle('containerJS');
    const containerFive = document.getElementById('five');
    containerFive.classList.toggle('containerJS');
    const containerSix = document.getElementById('six');
    containerSix.classList.toggle('containerJS');
    const containerSeven = document.getElementById('seven');
    containerSeven.classList.toggle('containerJS');
    const containerEight = document.getElementById('eight');
    containerEight.classList.toggle('containerJS');
    const containerNine = document.getElementById('nine');
    containerNine.classList.toggle('containerJS');
    const containerTen = document.getElementById('ten');
    containerTen.classList.toggle('containerJS');
}