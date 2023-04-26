function hero(bullets, dragons) {
    if (bullets / dragons >= 2) {
        return true;
    }
    return false;
}
hero(10, 5);
hero(7, 4);
