function convertMetersToFeet(meters) {
    if (meters < (0)) {
        return 'input cannot be less than zero';
    } else {
        return (meters/0.3048);
    }
}