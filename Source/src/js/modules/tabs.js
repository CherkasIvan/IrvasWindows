const tabs = (hraderSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(hraderSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector),
        active = document.querySelector(activeClass)

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        })

        tab.forEach(el => {
            el.classList.remove(activeClass)
        })
    }

    function showTabContent(i = 0) {
        content[i].style.display = display
        tab[i].classList.add(activeClass)
    }

    hideTabContent()
    showTabContent()

    header.addEventListener('click', (el) => {
        const target = el.target
        if (target && (
            target.classList.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })
}

export default tabs