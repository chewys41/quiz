export const javascriptQuizQuestions = [
  {
    id: 1,
    question: "What year was javaScript created?",
    answers: ["1995", "1986", "1996", "1991"],
    correctAns: "1995"
  },
  {
    id: 2,
    question: "Strings are values made up of text and can contain...",
    answers: [
      "All of the above",
      "symbols and punctuation",
      "emojis",
      "letters and numbers"
    ],
    correctAns: "All of the above"
  },
  {
    id: 3,
    question: "How would you write 'Hello World' with alert?",
    answers: [
      "alert('Hello World')",
      "alertBox('Hello World')",
      "alertModal('Hello World')",
      "alert{'Hello World"
    ],
    correctAns: "alert('Hello World')"
  },
  {
    id: 4,
    question: "Which is the correct way to declare an array in Javascript?",
    answers: [
      "var names = ['matt', 'mark', 'mike",
      "var names = array:['matt', 'mark', 'mike']",
      "var names = {'matt', 'mark', 'mike'}",
      "var names => ['matt', 'mark', 'mike']"
    ],
    correctAns: "var names = ['matt', 'mark', 'mike']"
  },
  {
    id: 5,
    question:
      "How would you declare the variable favoriteCar with a value of 'Mustang'",
    answers: [
      "var favoriteCar = 'Mustang'",
      "favoriteCar = 'Mustang'",
      "var favoriteCar = ('Mustang')",
      "var favoriteCar = Mustang"
    ],
    correctAns: "var favoriteCar = 'Mustang'"
  },
  {
    id: 6,
    question: "How would you call the function myCar?",
    answers: ["myCar()", "callFunction myCar()", "myCar=>", "call()myCar"],
    correctAns: "myCar()"
  },
  {
    id: 7,
    question:
      "Which of the following function of String object returns the capitalized string while respecting the current locale?",
    answers: [
      "toLocaleUpperCase()",
      "substring()",
      "toUpperCase()",
      "toString()"
    ],
    correctAns: "toLocaleUpperCase()"
  },
  {
    id: 8,
    question:
      "Which of the following methods removes the last element from an array and returns that element?",
    answers: ["pop()", "last()", "get()", "slice()"],
    correctAns: "pop()"
  },
  {
    id: 9,
    question:
      "What is the function of Array object that runs through each element of the array?",
    answers: ["forEach()", "concat()", "filter()", "every()"],
    correctAns: "forEach()"
  },
  {
    id: 10,
    question:
      "Select a function of Array object which returns a new array comprised of the current array /or its value(s)?",
    answers: ["concat()", "some()", "pop()", "push()"],
    correctAns: "concat()"
  }
];
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

export const cssQuizQuestions = [
  {
    id: 1,
    title: "What does CSS stand for?",
    answers: [
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Creative Style Sheets",
      "Color Style Sheets"
    ],
    correctAns: "Cascading Style Sheets"
  },
  {
    id: 2,
    title: "Which is the correct CSS syntax?",
    answers: [
      "body {color: red;}",
      "{body:red}",
      "body: color=red",
      "body{color=red}"
    ],
    correctAns: "body {color: red;}"
  },
  {
    id: 3,
    title: "Which property is used to change the font of an element?",
    answers: ["font-family", "font-weight", "family-font", "font-style"],
    correctAns: "font-family"
  },
  {
    id: 4,
    title: "Which property is used to change the left margin of an element?",
    answers: ["margin-left", "padding-left", "indent-left", "padding:left"],
    correctAns: "margin-left"
  },
  {
    id: 5,
    title: 'How do you select an element with the id of "cars"?',
    answers: ["#cars", "*cars", "cars", ".cars"],
    correctAns: "#cars"
  },
  {
    id: 6,
    title: 'How do you select an element with the class of "cars"?',
    answers: [".cars", "#cars", "cars", "*cars"],
    correctAns: ".cars"
  },
  {
    id: 7,
    title: "Which of the following is NOT a valid CSS length unit?",
    answers: ["dm", "cm", "em", "mm"],
    correctAns: "dm"
  },
  {
    id: 8,
    title: "How can we write comment along with CSS code?",
    answers: [
      "/* a comment */",
      "/ a comment /",
      "// a comment //",
      "<' a comment'>"
    ],
    correctAns: "/* a comment */"
  },
  {
    id: 9,
    title: "Which CSS property is used to control the text size of an element?",
    answers: ["font-size", "text-size", "text-style", "font-style"],
    correctAns: "font-size"
  },
  {
    id: 10,
    title: "The default value of 'position' attribute is?",
    answers: ["relative", "absolute", "fixed", "inherit"],
    correctAns: "relative"
  }
];
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export const htmlQuizQuestions = [
  {
    id: 1,
    title: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Markup Language",
      "Hyper Text Makeup Language"
    ],
    correctAns: "Hyper Text Markup Language"
  },
  {
    id: 2,
    title:
      "Which of the following tags would you use to create a list with each item numbered?",
    answers: ["<ol>", "<nl>", "<ul>", "dl"],
    correctAns: "<ol>"
  },
  {
    id: 3,
    title: " An <h1> element in HTML defines",
    answers: ["Headings", "HyperText", "Hyperlink", "HTML-text"],
    correctAns: "Headings"
  },
  {
    id: 4,
    title:
      "HTML links are defined with <a> tag and address is specified by attribute",
    answers: ["href", "hlink", "src", "src-link"],
    correctAns: "href"
  },
  {
    id: 5,
    title:
      "HTML images are defined with <img> tag and filename of image is specified by attribute",
    answers: ["src", "src-name", "src-link", "src-href"],
    correctAns: "src"
  },
  {
    id: 6,
    title: "In HTML, empty elements can be closed in opening tag such as",
    answers: ["<br />", "</br >", "<bl/>", "</bl >"],
    correctAns: "<br />"
  },
  {
    id: 7,
    title: "Element <em> of HTML defines",
    answers: [
      "Emphasized text",
      "Exponent mode text",
      "Strong text",
      "Empirical text"
    ],
    correctAns: "Emphasized text"
  },
  {
    id: 8,
    title: "What is the correct HTML for making a text input field?",
    answers: [
      "<input type = 'text'>",
      "<input style = 'text'>",
      "<input type: text>",
      "<input type = 'text'>"
    ],
    correctAns: "<input type = 'text'>"
  },
  {
    id: 9,
    title: "What is the correct HTML element for the largest heading?",
    answers: ["<h1>", "<h5>", "<h3>", "<h2>"],
    correctAns: "<h1>"
  },
  {
    id: 10,
    title: "How can you make a bulleted list?",
    answers: ["<ul>", "<ol>", "<bl>", "<lb>"],
    correctAns: "<ul>"
  }
];
