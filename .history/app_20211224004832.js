const btn=document.querySelector('.btn')
btn.addEventListener('click',function(e){
  e.preventDefault();
  console.log(e.target);
  const input=document.querySelector('.form-input input').value;
  
})