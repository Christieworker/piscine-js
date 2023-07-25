function isPositive(num) {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}

function abs(a) {
    if (isPositive(a) || a == 0) {
        return a;
    } else {
        return -a;
    }
}