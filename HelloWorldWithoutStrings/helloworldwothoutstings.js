function helloWorld() {
    const chars = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33];

    return String.fromCharCode(...chars);
}
helloWorld()