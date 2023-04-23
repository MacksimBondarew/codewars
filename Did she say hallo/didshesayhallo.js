function validateHello(greetings) {
    traslate = {
        hello: 'english',
        ciao: 'italian',
        salut: 'french',
        hallo: 'german',
        hola: 'spanish',
        ahoj: 'czech',
        czesc: 'polish',
    };
    for (const key in traslate) {
        if (greetings.toLowerCase().includes(key)) {
            return true;
        }
    }
    return false;
}
validateHello('hello')