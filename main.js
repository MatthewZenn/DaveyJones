document.getElementById('add').addEventListener('click', () => {
  document.getElementById('modal').style.display = "block";
});

document.getElementById('confirm').addEventListener('click', () => {
  document.getElementById('modal').style.display = "none";
  document.getElementById('address').value = document.getElementById('nail').value;
  document.getElementById('nam').value = document.getElementById('person').value;
});