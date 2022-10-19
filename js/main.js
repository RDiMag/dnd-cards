document.querySelectorAll('.flip-card').forEach(function(item) { 
  item.addEventListener('click', function () { this.classList.toggle('flipped');  });
});