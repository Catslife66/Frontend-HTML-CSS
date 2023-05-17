const togglers = document.querySelectorAll('.toggler-title');


togglers.forEach(togglerItem => {
    togglerItem.addEventListener("click", ()=>{
        let togglerContent = togglerItem.nextSibling.nextSibling;
        let toggleArrowDown = togglerItem.childNodes[3];
        let toggleArrowUp = togglerItem.childNodes[5];
        if (togglerContent.classList.contains('toggler-content')) {
            togglerContent.classList.toggle('toggler-content--show')
        }
        if (toggleArrowUp.classList.contains('arrow2')) {
            toggleArrowUp.classList.toggle('arrow2--show')
        }
        if (toggleArrowDown.classList.contains('arrow1')) {
            toggleArrowDown.classList.toggle('arrow1--hide')
        }
    })
})