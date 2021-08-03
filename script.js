function $(cb) {
    window.addEventListener('load', cb)
}


$(function() {
    let sidebar = document.querySelector('.sidebar')
    let chat = document.querySelector('.messages')

    for(let i = 0; i < 50; i++) {
        let userEl = document.createElement('p')
        userEl.className = 'sidebar-user'
        userEl.innerText = 'User' + Math.floor(Math.random() * 10000)
        sidebar.append(userEl)

        setTimeout(() => {
            let chatEl = document.createElement('p')
            chatEl.className = 'user-message'
            chatEl.innerHTML = `<b>${'User' + Math.floor(Math.random() * 10000)}</b>: mejakshdjkh`
            chat.append(chatEl)
        }, Math.floor(Math.random() * 10000))
    }
})