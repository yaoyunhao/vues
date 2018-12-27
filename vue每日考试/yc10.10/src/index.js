const createElement = () => {
    let div = document.createElement('div');
    div.innerHTML = "新的div";
    return div
}
document.body.appendChild(createElement());