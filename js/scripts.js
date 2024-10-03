document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to project thumbnails
    document.querySelectorAll('.project-thumbnail').forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            const projectImages = getProjectImages(thumbnail.src);
            showModalWithImages(projectImages);
        });
    });
});

function getProjectImages(thumbnailSrc) {
    // Replace with logic to get actual images for the project
    const projectFolder = thumbnailSrc.match(/assets\/images\/(.*?)\//)[1];
    const imagePaths = [
        `assets/images/${projectFolder}/gatito1.jpg`,
        `assets/images/${projectFolder}/gatito2.jpg`,
        `assets/images/${projectFolder}/gatito3.jpg`
    ];
    return imagePaths;
}

function showModalWithImages(imagePaths) {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselIndicators = document.querySelector('.carousel-indicators');

    carouselInner.innerHTML = '';
    carouselIndicators.innerHTML = '';

    imagePaths.forEach((path, index) => {
        const activeClass = index === 0 ? 'active' : '';
        carouselInner.innerHTML += `
            <div class="carousel-item ${activeClass}">
                <img src="${path}" class="d-block w-100" alt="...">
            </div>
        `;
        carouselIndicators.innerHTML += `
            <li data-target="#carouselExampleIndicators" data-slide-to="${index}" class="${activeClass}"></li>
        `;
    });

    $('#imageModal').modal('show');
}
