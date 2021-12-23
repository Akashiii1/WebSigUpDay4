const form=document.querySelector('.form-control');
form.addEventListener('form submit',function(e){
  console.log("hello");
  e.preventDefault();
})