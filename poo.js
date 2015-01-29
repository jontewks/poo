(function() {
  var poo = function() {
    console.log('    (   )   ');
    console.log(' (   ) (    ');
    console.log('  ) _   )   ');
    console.log('   ( \\_    ');
    console.log(' _(_\\ \\)__');
    console.log('(____\\___))');
  };

  poo.thesaurus = function() {
    var words = ['crap', 'poop', 'shite', 'BM', 'defecation', 'discharge', 'dung', 'excrement', 'excretion', 'fecal matter', 'feces', 'feculence', 'deuce', 'manure', 'number two', 'stool', 'waste'];
    var index = Math.floor(Math.random() * words.length);
    return words[index];
  };

  poo.palindrome = function() {
    return 'poop';
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = poo;
  } else if (window) {
    window.poo = poo;
  }
}());