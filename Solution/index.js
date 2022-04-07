let stateChange = false;
const viewUntop = () => {
    let untop = document.getElementById('topper')
    stateChange = !stateChange
    stateChange ? untop.style.visibility = 'visible' : untop.style.visibility = 'hidden';
}