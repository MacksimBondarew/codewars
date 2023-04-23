function shortenToDate(longDate) {
    const createMasiw = longDate.split(' ');
    const deleteLastElement = createMasiw.pop();
    return createMasiw.join(' ').slice(0, -1);
}
shortenToDate("Monday December 25, 10pm")
