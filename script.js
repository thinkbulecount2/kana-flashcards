// Create a dictionary with Romaji as 0, Hiragana as property 1, and Katakana as property 2
const dictionary = [
    { 0: 'a',
      1: 'あ',
      2: 'ア' },
    { 0: 'i',
      1: 'い',
      2: 'イ' },
    { 0: 'u',
      1: 'う',
      2: 'ウ' },
    { 0: 'e',
      1: 'え',
      2: 'エ' },
    { 0: 'o',
      1: 'お',
      2: 'オ' },
    { 0: 'ka',
      1: 'か',
      2: 'カ' },
    { 0: 'ki',
      1: 'き',
      2: 'キ' },
    { 0: 'ku',
      1: 'く',
      2: 'ク' },
    { 0: 'ke',
      1: 'け',
      2: 'ケ' },
    { 0: 'ko',
      1: 'こ',
      2: 'コ' },
    { 0: 'sa',
      1: 'さ',
      2: 'サ' },
    { 0: 'shi',
      1: 'し',
      2: 'シ' },
    { 0: 'su',
      1: 'す',
      2: 'ス' },
    { 0: 'se',
      1: 'せ',
      2: 'セ' },
    { 0: 'so',
      1: 'そ',
      2: 'ソ' },
    { 0: 'ta',
      1: 'た',
      2: 'タ' },
    { 0: 'chi',
      1: 'ち',
      2: 'チ' },
    { 0: 'tsu',
      1: 'つ',
      2: 'ツ' },
    { 0: 'te',
      1: 'て',
      2: 'テ' },
    { 0: 'to',
      1: 'と',
      2: 'ト' },
    { 0: 'na',
      1: 'な',
      2: 'ナ' },
    { 0: 'ni',
      1: 'に',
      2: 'ニ' },
    { 0: 'nu',
      1: 'ぬ',
      2: 'ヌ' },
    { 0: 'ne',
      1: 'ね',
      2: 'ネ' },
    { 0: 'no',
      1: 'の',
      2: 'ノ' },
    { 0: 'ha',
      1: 'は',
      2: 'ハ' },
    { 0: 'hi',
      1: 'ひ',
      2: 'ヒ' },
    { 0: 'fu',
      1: 'ふ',
      2: 'フ' },
    { 0: 'he',
      1: 'へ',
      2: 'ヘ' },
    { 0: 'ho',
      1: 'ほ',
      2: 'ホ' },
    { 0: 'ma',
      1: 'ま',
      2: 'マ' },
    { 0: 'mi',
      1: 'み',
      2: 'ミ' },
    { 0: 'mu',
      1: 'む',
      2: 'ム' },
    { 0: 'me',
      1: 'め',
      2: 'メ' },
    { 0: 'mo',
      1: 'も',
      2: 'モ' },
    { 0: 'ya',
      1: 'や',
      2: 'ヤ' },
    { 0: 'yu',
      1: 'ゆ',
      2: 'ユ' },
    { 0: 'yo',
      1: 'よ',
      2: 'ヨ' },
    { 0: 'ra',
      1: 'ら',
      2: 'ラ' },
    { 0: 'ri',
      1: 'り',
      2: 'リ' },
    { 0: 'ru',
      1: 'る',
      2: 'ル' },
    { 0: 're',
      1: 'れ',
      2: 'レ' },
    { 0: 'ro',
      1: 'ろ',
      2: 'ロ' },
    { 0: 'wa',
      1: 'わ',
      2: 'ワ' },
    { 0: 'wo',
      1: 'を',
      2: 'ヲ' },
    { 0: 'n',
      1: 'ん',
      2: 'ン' },
];

// Randomise either the dictionary or the list of possible answers depending, on what is passed
const randomiseList = (arr) => {
    return arr.sort( () => Math.random() - 0.5);
}

// Create a pool of incorrect answers and the correct answer
let possibleAnswers = [];

let currentKana = '';
let currentKanaAnswer = '';

// Create an empty scorecard
const scorecard = { GamesPlayed: 0, Correct: 0, Incorrect: 0 };

// Get a random character
const getRandomKana = () => {
    
    // First get a random index of a kana
    let currentKanaIndex = Math.floor(Math.random() * dictionary.length);
    
    // Then get a random kana type (either Hiragana [1] or Katakana [2])
    let currentKanaType = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    
    // Combine to form the current kana
    currentKana = dictionary[currentKanaIndex][currentKanaType];
    
    // And then get its corresponding Romaji for the answers
    currentKanaAnswer = dictionary[currentKanaIndex][0];

    // Add the correct answer to possibleAnswers array
    possibleAnswers[0] = currentKanaAnswer;

    return currentKana;
};

// Get random incorrect answers
const getFakeAnswers = (currentKanaAnswer) => {
    for (i = 1; i < 4; i ++) {
        if (dictionary[i][0] !== currentKanaAnswer) {
            possibleAnswers[i] = dictionary[i][0];
        } else {
            // Do nothing
        }
    }
    return possibleAnswers;
};

// Play the game
const playApp = () => {

    // Clear all values each time this function is called
    $("#introduction").html('');
    $(".answers").html('');
    $(".feedback").html('<h2>&nbsp;</h2>');
    $("body").removeClass();

    // Randomise the list each time
    randomiseList(dictionary);

    // Display the current kana
    $(".randomKana")
      .html(`
        <h1>${getRandomKana()}</h1>
      `);

    // Get a list of possible answers for the current kana and randomise the list
    possibleAnswers = getFakeAnswers(currentKanaAnswer);
    randomiseList(possibleAnswers);

    // Display the list of possible answers
    $(".answers")
        .append(`
            <input type="submit" class="answer" value="${possibleAnswers[0]}" />
            <input type="submit" class="answer" value="${possibleAnswers[1]}" />
            <input type="submit" class="answer" value="${possibleAnswers[2]}" />
            <input type="submit" class="answer" value="${possibleAnswers[3]}" />
            `);

    // Whenever the player makes a choice, give feedback whether it is correct or incorrect
    $("input").on("click", function(e) {
        e.preventDefault();
        let choice = $(this).val();
        if (choice === currentKanaAnswer) {
            $("body").removeClass().addClass("correct");
            $(".feedback")
              .html(`
                <h2>You got it!</h2>
              `);
            // Add correct to the scorecard
            scorecard.Correct++;
            // After 1000ms, reload the game with a new random kana
            setTimeout(playApp, 1000);
        } else {
            $("body").removeClass().addClass("incorrect");
            $(".feedback")
              .html(`
                <h2>Sorry, that's wrong!</h2>
              `);
            // Add incorrect to the scorecard
            scorecard.Incorrect++;
            // After 1000ms, reload the game with a new random kana
            setTimeout(playApp, 1000);
        }
        // Add how many games played to scorecard
        scorecard.GamesPlayed++;
    });

    // Render scorecard
    $(".scoreWrapper")
        .html(`
             <div class="score">Games Played<br />${scorecard.GamesPlayed}</div>
             <div class="score">Correct<br />${scorecard.Correct}</div>
             <div class="score">Incorrect<br />${scorecard.Incorrect}</div>
        `); 
}

// Document ready
$(function() {

  // Start the game
  $("#playApp").on("click", function(e) {
    e.preventDefault();

    playApp();

  });

});
