(function() {
  var pickRandomItem = function(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  var poo = function() {
    console.log('    (   )   ');
    console.log(' (   ) (    ');
    console.log('  ) _   )   ');
    console.log('   ( \\_    ');
    console.log(' _(_\\ \\)__');
    console.log('(____\\___))');
  };

  poo.thesaurus = function() {
    var words = [
      'crap',
      'poop',
      'shite',
      'BM',
      'defecation',
      'discharge',
      'dung',
      'excrement',
      'excretion',
      'fecal matter',
      'feces',
      'feculence',
      'deuce',
      'manure',
      'number two',
      'stool',
      'waste'
    ];
    return pickRandomItem(words);
  };

  poo.palindrome = function() {
    return 'poop';
  };

  poo.fact = function() {
    var facts = [
      'Water makes up about 75 percent of your bowel movements. The rest is an often-stinky combination of fiber, dead and live bacteria, other cells, and mucus.',
      'Soluble fibers found in foods like beans and nuts are broken down during digestion and form a gel-like substance that becomes part of your poop.',
      'Foods packed with insoluble fiber, such as corn, oat bran, and carrots, are more difficult for your body to digest, which explains why they may emerge in the toilet bowl looking relatively unchanged.',
      'Colors: Bright red stool can be caused by large consumption of beets, leafy vegetables can cause green stool, and certain medications can make your waste look white or clay-colored. Look out for jet-black stool - though it could be from something as harmless as iron supplements or black licorice, the color could also be a sign of bleeding in the upper gastrointestinal tract.',
      'Pencil-thin poo can be a sign of rectal cancer, which narrows the opening through which stool passes.',
      'Worse than normal smelling poops can be a side effect of one stomach bug caused by the parasite giardia, ingested most often by swimming in fresh water lakes. It could also suggest a more serious digestive condition such as ulcerative colitis, Crohn\'s disease, or celiac disease.',
      'The average American man excretes 150 grams (about one-third of a pound) of stool every day, or the equivalent of 5 tons in a lifetime!',
      'Digestion normally takes anywhere from 24 to 72 hours. Diarrhea is the result of stool passing too quickly through the large intestine, where most of the water content is absorbed. Constipation, on the other hand, is when it takes too long for stool to pass through.',
      'It\'s normal to pass gas anywhere from 10 to 18 times a day, according to the American College of Gastroenterology.',
      'Poo transplants, where stool from a healthy person is placed in the colon of an infected person, have helped treat bouts of recurrent diarrhea associated with a C. difficile bacterial infection. Such transplants have also effectively treated inflammatory bowel disease (IBD).'
    ];
    return pickRandomItem(facts);
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = poo;
  } else if (window) {
    window.poo = poo;
  }
}());