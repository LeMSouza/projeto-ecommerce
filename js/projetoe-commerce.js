const imagensProduto = document.querySelectorAll('.vitrine article figure img');

imagensProduto.forEach((imagem) => {
  imagem.addEventListener('mouseover', () => {
    imagem.style.transform = 'scale(1.1)'; 
  });

  imagem.addEventListener('mouseout', () => {
    imagem.style.transform = 'scale(1)';
  });
});
