// Requirements for SBA:
// MVP:-----------------------------------------------------------------------------------
// 1. Built with JavaScript, REACT, and VITE
// 2. Frequent Commits to <GitHub></GitHub>
// 3. A README.md file in GitHub repo with:
//      - Explanations of the technologies used
//      - Explanations of the approach taken
//      - A link to your live site (if applicable)
//      - Usage instructions, if relevant
//      - Unsolved mysteries (*problems)
// 4. Use AJAX to make a request to an external data source
// and insert some of the data retrieved into the DOM
// BONUS FEATURES:
// 1. Have one or more complex user interface modules such as
//    a carousel, drag & drop, a sticky nav, tooltips, etc.
// 2. Look into localstorage so to save data to the user's browser.

// Tips to get Started:
// * Wireframe - drawing of what app will look like in all stages
// * Break into diff. components & brainstorm each:
//      Data / Presentation / Views / Style / DOM manipulation
// * Remember to have: Creativity, Code Quality, Problem Solving
//---------------------------------------------------------------------------------------

// Components:----------------------------------------------------------------------------
// * App.jsx:
// - main wrapper & router


// - holds state variables for quiz & data -> child props
// * :
// - Fetches trivia questions via AJAX. manages quiz's state (current question, answers, score)
// - renders Question, Score, & FunFact components
// * Question Component:
// - display single question with answer
// - accepts props for question, answers, and handles user's submission
// * Score Component:
// - shows final score and calculates "spookiness level"
// - determines level by score ranges (?)(0-4, 5-9, etc.)
// * FunFact Component:
// - pops up random Halloween themed fun facts after each question
// - done by storing facts in JSON file in data folder -> loading them
//----------------------------------------------------------------------------------------

// Installation set up:-------------------------------------------------------------------
// new file
// npm vite@latest .
// npm react-router-dom
// npm axios
// npm install i (?)
// npm run dev (to run env. : localhost:5173)





//======================== NOTES ==============================
// * API for GIFs from Giphy (axios)

// * After question is answered (answer has been submitted) "Fun Fact" will pop up temp.
// then the next question will appear.




//---------------------------------------------------------------------------------------


// +=+=+=+=+=+=+=+=+ Halloween Fun Facts +=+=+=+=+=+=+=+=+
// 1. In Lewis, Scotland, Halloween was once celebrated by designating one man to wade into
// the evening sea and offer a cup of ale to Shoney, a sea-god.

// 2. In the British Isles, jack o'lanterns are carved from large turnips (pumpkins are unique
// the New World); the turnips are usually not carved all the way through, but rather sections
// of the rind are carved away, to provide a glowing appearance.

// 3. Jack O'Lantern is really a legendary folk hero, mainly in Britain and Ireland but also
// in parts of the United States. In many versions of the tale, he was a blacksmith who was
// too evil for heaven but outwitted the Devil and so was turned away from Hell; now he
// wanders the earth with a lantern made of a coal and the last vegetable he was eating
// (a turnip or a pumpkin).

// 4. In some parts of New England Halloween is called "Cabbage Night", from the pranksters
// who once roamed the countryside with cabbage stumps which they used to smear window with.

// 5. A popular Halloween drink in 18th century Ireland was "lambs-wool", which consisted
// of roasted, crushed apples mixed into milk. Dinner consisted of "callcannon" -
// mashed potatoes, parsnips and chopped onions. A ring was buried in it, and whoever
// found the ring in his portion would supposedly be married in a year, or receive
// good luck.

// 6. The Scottish believed in the "Samhanach", a goblin who came out only on Samhain
// and stole children.

// 7. Up until the early 20th century, Halloween cakes - which had small charms baked into
// them - were the centerpieces of Halloween parties, along with bobbing for apples
// and fortune-telling.

// 8. One of the most popular forms ofr Halloween fortune-telling involved using a mirror
// to discover the identity of one's future husband. Although it had many variations,
// a typical method involved sitting before a mirror at midnight on Halloween, eating
// an apple and brushing one's hair; supposedly an image of your loved one would appear
// in the glass.

// 9. Kale, nuts, cakes, mirrors, apples, and corn were all featured in
// Halloween fortune-telling traditions and were usually used in some way to foretell
// one's future spouse.

// 10. The idea that anonymous psychos are dishing out poisoned candy to children probably
// dates back to 1964, when a New York housewife gave poisoned ant buttons to older
// trick-or-treaters as a joke. There are virtually no cases on any record books of
// genuine "Halloween Sadism", i.e. poisoned candy or razor-blade-hiding apples.

// citation: https://halloween.lisamorton.com/trivia.html



//-----------------------------
//Game Logic
//Game Flow:
//Load questions and answers.
//Display one question at a time.
//After each question, show a random fact and fetch a Halloween GIF.
//Keep track of the score.
//Display a "spookiness level" at the end based on the score.

//Scoring:
//0-4: "Spooky Amateur"
//5-8: "Creepy Connoisseur"
//9+: "Halloween Master"

//Random Facts:
//Create a local array of Halloween facts and randomly display one.
//GIF API:

//Use the Giphy API to fetch and display Halloween-themed GIFs.
//Example API endpoint:
//https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=halloween&limit=1


