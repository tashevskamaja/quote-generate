var quotes = [
    '"Success is not final, failure is not fatal: it is the courage to continue that counts. - ',
    '"What you get by achieving your goals is not as important as what you become by achieving your goals. - ',
    '"Believe you can and you\'re halfway there. - ',
    '"When you have a dream, you\'ve got to grab it and never let go. - ',
    '"I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination. - ',
    '"No matter what you\'re going through, there\'s a light at the end of the tunnel. - ',
    '"Life is like riding a bicycle. To keep your balance, you must keep moving. - ',
    '"Just don\'t give up trying to do what you really want to do. Where there is love and inspiration, I don\'t think you can go wrong. - ',
    '"Limit your "always" and your "nevers."​​ - ',
    '"You are never too old to set another goal or to dream a new dream. - '
]

var authors = [
    'Winston Churchill',
    'Zig Ziglar',
    'Theodore Roosevelt',
    'Carol Burnett',
    'Jimmy Dean',
    'Demi Lovato',
    'Albert Einstein',
    'Ella Fitzgerald',
    'Amy Poehler​​',
    'C.S. Lewis'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber] + authors[randomNumber];
}