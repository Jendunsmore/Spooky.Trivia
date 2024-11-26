import mongoose from 'mongoose';



export const questions = [
    {
        question: "What vegetable is traditionally carved into a jack-o-lantern?",
        options: ["Potatoes", "Squash", "Turnups", "Pumpkins"],
        correctAnswer: "Pumpkins",
    },
    {
        "question": "Which phobia means you have an intense fear of Halloween?",
        "options": ["Samhainophobia", "Halloweenophobia", "Lupophobia", "Nyctophobia"],
        "correctAnswer": "Samhainophobia"
    },

    {
        "question": "What is a group of witches called?",
        "options": ["Gaggle", "Witchins", "Coven", "Craft"],
        "correctAnswer": "Coven"
    },

    {
        "question": "Which famous magician died on Halloween?",
        "options": ["David Copperfield", "Criss Angel", "Randolph Owens", "Harry Houdini"],
        "correctAnswer": "Harry Houdini"
    },

    {
        "question": "What white, orange, and yellow Halloween candy is often shaped like a cone?",
        "options": ["Candy Corn", "Candy Cones", "Butterscotch", "Sour Patch Kids"],
        "correctAnswer": "Candy Corn"
    },

    {
        "question": "What was the original name for candy corn?",
        "options": ["Wax melts", "Candy Cones", "Candy Corn", "Chicken Feed"],
        "correctAnswer": "Chicken Feed"
    },

    {
        "question": "Who wrote the famous book 'Frankenstein'?",
        "options": ["Emily Dickinson", "Mary Shelley", "Erin Kelly", "Juliet MacDew"],
        "correctAnswer": "Mary Shelley"
    },

    {
        "question": "What is the name of the ghost-friendly holiday celebrated in Mexico on November 1st and 2nd?",
        "options": ["Halloween", "Day of the Dead", "Thanksgiving", "Christmas"],
        "correctAnswer": "Day of the Dead"
    },

    {
        "question": "Which animal is often seen as a symbol of Halloween?",
        "options": ["Cat", "Dog", "Snake", "Owl"],
        "correctAnswer": "Cat"
    },

    {
        "question": "What color is often associated with Halloween and is commonly seen on decorations and costumes?",
        "options": ["Red", "Blue", "Green", "Orange"],
        "correctAnswer": "Orange"
    },

    {
        "question": "Which legendary figure is said to fly around on Halloween night and bring treats to children?",
        "options": ["The Easter Bunny", "The Tooth Fairy", "The Great Pumpkin", "The Witch"],
        "correctAnswer": "The Great Pumpkin"
    },
    {
        "question": "What is the traditional color of a witch's hat?",
        "options": ["Blue", "Green", "Purple", "Black"],
        "correctAnswer": "Black"
    },

    {
        "question": "Which fruit is traditionally bobbed for at Halloween parties?",
        "options": ["Apple", "Orange", "Banana", "Strawberry"],
        "correctAnswer": "Apple"
    },

    {
        "question": "In what country did Halloween originate?",
        "options": ["United States", "Ireland", "England", "France"],
        "correctAnswer": "Ireland"
    },

    {
        "question": "Which famous magician died on Halloween in 1926?",
        "options": ["Houdini", "Copperfield", "Blaine", "Angel"],
        "correctAnswer": "Houdini"
    },

    {
        "question": "What do people traditionally carve into pumpkins during Halloween?",
        "options": ["Faces", "Shapes", "Numbers", "Words"],
        "correctAnswer": "Faces"
    },

    {
        "question": "What is the name of the holiday celebrated on October 31st, which is the night before All Saints' Day?",
        "options": ["Christmas", "Halloween", "Thanksgiving", "Independence Day"],
        "correctAnswer": "Halloween"
    },

    {
        "question": "What do people traditionally say on Halloween night when they knock on someone's door for treats?",
        "options": ["Trick or Treat!", "Happy Birthday!", "Hello!", "Thank You!"],
        "correctAnswer": "Trick or Treat!"
    },

    {
        "question": "What is the name of the popular Halloween song by Michael Jackson?",
        "options": ["Thriller", "Beat It", "Billie Jean", "Smooth Criminal"],
        "correctAnswer": "Thriller"
    },

    {
        "question": "What is a common treat given out during Halloween that is said to prevent evil spirits from entering the home?",
        "options": ["Candy Corn", "Popcorn Balls", "Apples", "Pumpkin Seeds"],
        "correctAnswer": "Popcorn Balls"
    },

    {
        "question": "What is the traditional Halloween activity of walking around neighborhoods to collect candy called?",
        "options": ["Trick or Treat", "Candy Hunt", "Costume Parade", "Spooky Walk"],
        "correctAnswer": "Trick or Treat"
    },
];


export const users = [
    {
        name: "Jack O'Lantern",
        email: "jackolantern@example.com",
    },
    {
        name: "Frankenstein's Bride",
        email: "frankensteinsbride@example.com",
    },
    {
        name: "Dracula",
        email: "dracula@example.com",
    },
    {
        name: "Witchy Woman",
        email: "witchywoman@example.com",
    },
    {
        name: "Boo Berry",
        email: "booberry@example.com",
    },
    {
        name: "Candy Corny",
        email: "candycorny@example.com",
    },
    {
        name: "Zombie Bob",
        email: "zombiebob@example.com",
    },
    {
        name: "Ghostly Grace",
        email: "ghostlygrace@example.com",
    },
    {
        name: "Vampire Vlad",
        email: "vampirevlad@example.com",
    },
    {
        name: "Spooky Sarah",
        email: "spookysarah@example.com",
    },
    {
        name: "Pumpkin Pete",
        email: "pumpkinpete@example.com",
    },
    {
        name: "Wanda the Werewolf",
        email: "wandathewerewolf@example.com",
    },
    {
        name: "Scary Terry",
        email: "scaryterry@example.com",
    },
    {
        name: "Mummy Mia",
        email: "mummymia@example.com",
    },
    {
        name: "Creepy Carrie",
        email: "creepycarrie@example.com",
    },
    {
        name: "Haunted Hank",
        email: "hauntedhank@example.com",
    },
    {
        name: "Batty Betty",
        email: "battybetty@example.com",
    },
    {
        name: "Wicked Wendy",
        email: "wickedwendy@example.com",
    },
    {
        name: "Spectral Sam",
        email: "spectralsam@example.com",
    },
    {
        name: "Scarecrow Steve",
        email: "scarecrowsteve@example.com",
    },
    {
        name: "Ghoulish Grace",
        email: "ghoulishgrace@example.com",
    }
];


export const scores = [
    { score: 20, date: new Date() },
    { score: 10, date: new Date() },
    { score: 10, date: new Date() },
    { score: 20, date: new Date() },
    { score: 16, date: new Date() },
    { score: 10, date: new Date() },
    { score: 10, date: new Date() },
    { score: 18, date: new Date() },
    { score: 10, date: new Date() },
    { score: 15, date: new Date() },
];
