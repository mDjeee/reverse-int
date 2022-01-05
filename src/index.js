module.exports = function reverse (n) {
    let one = Math.abs(n) % 10;
    let ten = Math.abs(n) % 100 - Math.abs(n) % 10;
    let hundred = Math.abs(n) - one - ten;
    return one * 100 + ten + hundred / 100;
}
