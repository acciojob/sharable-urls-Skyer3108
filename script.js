// your code here

const name=document.getElementById('name')
const year=document.getElementById('year')

const url=document.getElementById('url')

const btn =document.getElementById('btn')

btn.addEventListener('click',()=>{

	url.textContent=`https://localhost:8080/${name.value}&${year.value}`

	name.value=''
	year.value=''

	
})
