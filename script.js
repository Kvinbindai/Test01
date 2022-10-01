const email = document.getElementById('email')
const username = document.getElementById('username')
const password = document.getElementById('password')
const btn = document.getElementById('btn')
const table = document.getElementById('table')
// const editBtn = document.getElementById('editbtn')
// const deleteBtn = document.getElementById('deletebtn')

btn.addEventListener('click', () => {
    if (email.value.includes('@')){
        email.classList.add('valid') 
    }
    else{
        email.classList.add('not-valid')
    }
    if(username.length > 8){
        username.classList.add('valid')
    }
    else{
        username.classList.add('not-valid')

    }
    if(password.length > 8){
        password.classList.add('valid')
    }
    else{
        password.classList.add('not-valid')
    }
    const tr = document.createElement('tr')
    const th = `<th>${email.value}</th>
                <th>${username.value}</th>
                <th>${password.value}</th>`
    tr.innerHTML = th
    table.appendChild(tr)
    clearItem()
})

function clearItem() {
    email.value = ''
    username.value = ''
    password.value = ''
}