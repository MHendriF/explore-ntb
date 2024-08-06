document.addEventListener('DOMContentLoaded', function () {
  const destinations = [
    {
      name: 'Gili Trawangan',
      image: 'assets/img/gili_trawangan.jpg',
      description:
        'Gili Trawangan, yang sering disebut sebagai Gili T, adalah salah satu dari tiga pulau kecil yang terletak di sebelah barat laut Lombok. Pulau ini terkenal dengan pantainya yang indah, snorkeling, dan diving. Di sini, Anda dapat menikmati kehidupan malam yang ceria, bersantai di pantai yang tenang, atau menjelajahi kehidupan bawah laut yang kaya dengan ikan-ikan dan terumbu karang yang menakjubkan.',
    },
    {
      name: 'Gunung Rinjani',
      image: 'assets/img/gunung_rinjani.jpg',
      description:
        'Gunung Rinjani adalah gunung tertinggi kedua di Indonesia dan menjadi tujuan bagi para pendaki yang mencari tantangan. Dari puncaknya, Anda dapat melihat pemandangan yang menakjubkan, termasuk kawah dan danau yang indah. Pendakian ke Gunung Rinjani membutuhkan persiapan yang cukup karena jalurnya yang cukup menantang. Bagi yang mencari petualangan alam, pendakian ke Gunung Rinjani adalah pilihan yang tepat.',
    },
    {
      name: 'Pink Beach',
      image: 'assets/img/pink_beach.jpg',
      description:
        'Pink Beach adalah salah satu pantai yang paling ikonik di NTB. Pantai ini terkenal dengan pasirnya yang berwarna merah muda, menciptakan pemandangan yang unik dan memukau. Warna merah muda ini berasal dari butiran karang yang hancur dan bercampur dengan pasir putih. Di sini, Anda dapat menikmati pantai yang tenang, snorkeling, atau bahkan menyelam untuk melihat kehidupan bawah laut yang kaya.',
    },
    {
      name: 'Tanjung Aan',
      image: 'assets/img/tanjung_aan.jpg',
      description:
        'Tanjung Aan adalah salah satu pantai terindah di Lombok. Pantai ini memiliki pasir putih yang lembut dan air laut yang jernih. Anda dapat bersantai di bawah pohon kelapa, bermain air, atau menikmati matahari terbenam yang memukau. Tanjung Aan juga menawarkan kesempatan untuk snorkeling dan diving di sekitar terumbu karang yang indah.',
    },
    {
      name: 'Selong Belanak',
      image: 'assets/img/selong_belanak.jpg',
      description:
        'Selong Belanak adalah pantai dengan ombak yang tenang, membuatnya menjadi tempat yang ideal untuk berselancar, terutama bagi pemula. Pantai ini juga memiliki pasir putih yang lembut dan air laut yang jernih. Selong Belanak adalah tempat yang sempurna untuk bersantai, bermain air, atau menikmati kegiatan air lainnya.',
    },
    {
      name: 'Benang Kelambu Waterfall',
      image: 'assets/img/benang_kelambu.jpg',
      description:
        'Benang Kelambu Waterfall adalah air terjun yang menakjubkan di sekitar Gunung Rinjani. Air terjun ini memiliki tiga tingkatan air yang jatuh dari ketinggian yang cukup tinggi, menciptakan pemandangan yang spektakuler. Anda dapat menikmati keindahan alam, berenang di kolam alami, atau berfoto di sekitar air terjun.',
    },
  ];

  const container = document.getElementById('destinations-container');
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const closeModal = document.getElementsByClassName('close')[0];

  destinations.forEach((destination) => {
    const html = `
          <div class="destination mb-4 p-3 rounded" data-name="${
            destination.name
          }" data-image="${destination.image}" data-description="${
      destination.description
    }">
              <h3>${destination.name}</h3>
              <img src="${destination.image}" alt="${
      destination.name
    }" class="destination-img rounded">
              <p>${destination.description.substring(0, 250)}...</p>
          </div>
      `;
    container.innerHTML += html;
  });

  const destinationElements = document.querySelectorAll('.destination');
  destinationElements.forEach((destination) => {
    destination.addEventListener('click', function () {
      const name = this.getAttribute('data-name');
      const image = this.getAttribute('data-image');
      const description = this.getAttribute('data-description');

      modalImage.src = image;
      modalTitle.textContent = name;
      modalDescription.textContent = description;
      modal.style.display = 'block';
    });

    destination.addEventListener('mouseenter', function () {
      this.style.backgroundColor = '#e0f7fa';
    });
    destination.addEventListener('mouseleave', function () {
      this.style.backgroundColor = 'white';
    });
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
});
