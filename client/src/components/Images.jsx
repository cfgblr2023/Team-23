import React from 'react'


function Images() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide slider">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div  class="carousel-inner">
    <div class="carousel-item active">
      <img id="images" height={200} width={100} src="https://lampeducationtrust.com/wp-content/uploads/2022/08/aubergine-e1611195670454.jpg" class="d-block" alt="..." />
    </div>
    <div class="carousel-item">
      <img id="images" height={200} width={100} src="https://lampeducationtrust.com/wp-content/uploads/2022/08/causes.jpg" class="d-block" alt="... " />
    </div>
    <div class="carousel-item">
      <img id="images" height={200} width={100} src="https://lampeducationtrust.com/wp-content/uploads/2022/08/happy-multicultural-women-holding-cardboard-box-and-paper-bag-with-apples-while-standing-near-e1611196039833.jpg" class="d-block" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Images