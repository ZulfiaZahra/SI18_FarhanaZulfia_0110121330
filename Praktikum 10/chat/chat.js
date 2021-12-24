
function chats() {
    let isi_chat = document.getElementById("chat").value
    document.getElementById('body-chat').innerHTML += isi_chat+"<br>"
    document.getElementById("chat").value = ''
}