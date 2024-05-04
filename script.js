// your code here

const name=document.getElementById('name')
const year=document.getElementById('year')

const url=document.getElementById('url')

const btn =document.getElementById('button')

btn.addEventListener('click',()=>{

	if(name.value&&year.value){
		url.textContent=`https://localhost:8080/?name=${name.value}&year=${year.value}`
	}

	else if(name.value){
		url.textContent=`https://localhost:8080/?name=${name.value}`
		
	}
	else{
		url.textContent=`https://localhost:8080/?${year.value}`
	}
	

	name.value=''
	year.value=''

	
})
