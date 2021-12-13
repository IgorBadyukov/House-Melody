$(document).ready(function () {
    let currentFloor;
    const floorPath = $('.home-image path');
    const counterUp = $('.counter-up');
    const counterDown = $('.counter-down');
    const counter = $('.counter');
    const modal = $('.modal');
    const closeBtn = $('.modal-close-button');
    const viewFlats = $('.view-flats');

    floorPath.on('mouseover', function() {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        counter.text(currentFloor);
    });

    floorPath.on('click', toggleModal);

    closeBtn.on('click', toggleModal);

    viewFlats.on('click', toggleModal);

    counterUp.on('click', () => {
        if (currentFloor < 18) {
            currentFloor++;
            let usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
            useGrouping: false});
            counter.text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    counterDown.on('click', () => {
        if (currentFloor > 2) {
            currentFloor--;
            let usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
            useGrouping: false});
            counter.text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    function toggleModal() {
        modal.toggleClass('is-open');
    }
});