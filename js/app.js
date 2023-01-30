// Allgemein
const el = (css) => document.querySelector(css);
let index = null;
let currentQuiz = 0;
let score = 0;
let quizDataCopy = false; // 0 Ele
let currentQuizData = null;
let correctAnswer = 0;

// 5 GameOfThrones,5BigBangTheory,5BreakingBad,5xTheWalkingDead Fragen
const quizData = [
  //GAME OF THRONES
  {
    question: "Wie heißen die drei Lennister-Geschwister?",
    a: "Cersei, Jaime und Tyrion.",
    b: "Cersei, James und Tyrion.",
    c: "Cersei, Jaime und Tywin.",
    d: "Cersay, Jamie und Tyrone",
    correct: "a",
    loesung: "Cersei, Jaime und Tyrion",
  },
  {
    question: "Wie heißt Brans Schattenwolf?",
    a: "Er heißt Geist.",
    b: "Er heißt Sommer.",
    c: "Er heißt Winter.",
    d: "Er heißt Grauwind.",
    correct: "b",
    loesung: "Er heißt Sommer",
  },
  {
    question: "Wer sind die Eltern von Jon Schnee?",
    a: "Eddard Stark und eine unbekannte Frau.",
    b: "Lyanna Stark und Rhaegar Targaryen.",
    c: "Lyanna Stark und Rhegal Targaryen.",
    d: "Robert Baratheon und Lady Melissandra",
    correct: "b",
    loesung: "Lyanna Stark und Rhaegar Targaryen",
  },
  {
    question: "Wer erschuf den ersten weißen Wanderer?",
    a: "Die Kinder des Waldes.",
    b: "Der dreiäugige Rabe.",
    c: "Der rote Gott.",
    d: "Die ersten Menschen",
    correct: "a",
    loesung: "Die Kinder des Waldes",
  },
  {
    question: "Wer tötete den irren König?",
    a: "Jaime Lennister erschlug ihn.",
    b: "Eddard Stark tötete ihn während der Rebellion.",
    c: "Robert Baratheon lies ihn hinrichten.",
    d: "Tywin Lannister",
    correct: "a",
    loesung: "Jaime Lennister erschlug ihn",
  },
  //GAME OF THRONES

  // THE BIG BANG THEORY
  {
    question:
      "Welche Vogelart saß auf der Fensterbank von Sheldon und Leonard und machte Sheldon Angst? ",
    a: "Papagei.",
    b: "Elster.",
    c: "Blauhäher.",
    d: "Krähe.",
    correct: "c",
    loesung: "Blauhäher",
  },
  {
    question:
      "Auf welchen Gegenstanden, den Sheldon besitzt, haben Stan Lee und Leonard Nimoy unterschrieben?",
    a: "Servietten.",
    b: "Einstweilige Verfügungen.",
    c: "DVDs von Star-Wars.",
    d: "T-Shirts.",
    correct: "a",
    loesung: "Servietten",
  },
  {
    question: "Was ist Sheldons Lieblings-Aminosäure?",
    a: "Threonin.",
    b: "Histidin.",
    c: "Lysin.",
    d: "Glutamin.",
    correct: "c",
    loesung: "Lysin",
  },
  {
    question:
      "Charlie Sheen hatte einen Gastauftritt in der Serie, in der er einen Satz sagt. Zu wem?",
    a: "Sheldon.",
    b: "Leonard.",
    c: "Howard.",
    d: "Raj.",
    correct: "d",
    loesung: "Raj",
  },
  {
    question: "Wer wird Spielsüchtig?",
    a: "Penny.",
    b: "Leonard.",
    c: "Howard.",
    d: "Raj.",
    correct: "a",
    loesung: "Penny",
  },
  // THE BIG BANG THEORY

  //THE BREAKING BAD
  {
    question:
      "Welche Art von Insekt müssen Walt und Jesse im unterirdischen Labor bekämpfen?",
    a: "Eine Biene.",
    b: "Eine Stubenfliege.",
    c: "Eine Mücke.",
    d: "Eine Spinne.",
    correct: "b",
    loesung: "Eine Stubenfliege",
  },
  {
    question:
      "Mit wem arbeitet Walt unerwartet zusammen, um Guss Fring zu töten?",
    a: "Tio Salamanca.",
    b: "Tuco Salamanca.",
    c: "Don Eladio.",
    d: "Mike Ehrmentraut.",
    correct: "a",
    loesung: "Tio Salamanca",
  },
  {
    question:
      "Wie viele Episoden umfasst eigentlich die komplette Serie Breaking Bad?",
    a: "58.",
    b: "55.",
    c: "60.",
    d: "62.",
    correct: "d",
    loesung: "62",
  },
  {
    question: "Um welche Drogen handelt es sich überwiegend in dieser Serie?",
    a: "Cannabis.",
    b: "Blue Meth.",
    c: "Crystal Meth.",
    d: "Yellow Meth.",
    correct: "b",
    loesung: "Blue Meth",
  },
  {
    question:
      "Wie heißt das ebenfalls sehr erfolgreiche Spin-off von Breaking Bad?",
    a: "Saul.",
    b: "Better Call Saul.",
    c: "Talking Bad.",
    d: "Talking Saul.",
    correct: "b",
    loesung: "Better Call Saul",
  },
  // THE BREAKING BAD

  // THE WALKING DEAD
  {
    question: "Warum lag Rick Grimes im Koma?",
    a: "Er hatte einen epileptischen Anfall.",
    b: "Er wurde bei einer Schießerei verletzt.",
    c: "Er hatte einen Schlaganfall.",
    d: "Er lag nicht im Koma.",
    correct: "b",
    loesung: "Er wurde bei einer Schießerei verletzt",
  },
  {
    question: "Wie heißt Ricks bester Freund seit der High-School?",
    a: "Daryl Dixon.",
    b: "Shane Walsh.",
    c: "Ed Peletier.",
    d: "Carol.",
    correct: "b",
    loesung: "Shane Walsh",
  },
  {
    question:
      "Was ist nach der Farm länger das Zuhause von Rick und seinem Team?",
    a: "Ein Krankenhaus.",
    b: "Ein Gefängnis.",
    c: "Eine Feuerwache.",
    d: "Eine Polizeistation.",
    correct: "b",
    loesung: "Ein Gefängnis",
  },
  {
    question: "Was löste die Apokalypse aus?",
    a: "Ein Bakterium",
    b: "Ein Virus.",
    c: "Ein Pilz.",
    d: "Ein Wurm.",
    correct: "b",
    loesung: "Ein Virus",
  },
  {
    question:
      "Wer ist seit Beginn der 1. Staffel bis heute dabei (Stand 2017)?",
    a: "Shane,Glenn,Carl",
    b: "Rick, Carl, Michonne.",
    c: "Rick, Carol, Maggie.",
    d: "Carol, Rick, Daryl.",
    correct: "d",
    loesung: "Carol, Rick, Daryl",
  }, // THE WALKING DEAD
];

// Neues Leeres Array damit keine Fragen doppelt erscheinen
const fragenArray = [];
let fragenIndex = 0;

// Antworten und Fragen wählen
const answerEls = document.querySelectorAll("[name='answer']");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const result_Text = document.getElementById("result-frage");
const resultAnswer = document.getElementById("result-antwort");
const nextQuestion = document.getElementById("nextQuestion");

// Restart Funktion alle Werte werden auf Anfangswert gesetzt
function restart() {
  index = null;
  currentQuiz = 0;
  score = 0;
  quizDataCopy = false;
  currentQuizData = null;
  quizDataCopy = deepCopy(quizData);
  el("#spielende").className = "spielende-passiv";
  loadQuiz();
}

// Kopie erstellen von Array damit keine Fragen doppelt erscheinen
function deepCopy(array) {
  return JSON.parse(JSON.stringify(array));
}
quizDataCopy = deepCopy(quizData); // 20

// Zufällige Frage und passende Antworten erzeugen
function loadQuiz() {
  if (quizDataCopy.length === 0) {
    return;
  } // Prüfung ob im Array noch was drin ist dann Ende der Funktion
  index = Math.floor(Math.random() * quizDataCopy.length);

  // aktuelle Frage hier löschen und in ein neues Array die  speichern
  currentQuizData = quizDataCopy.splice(index, 1)[0];
  fragenArray.push(currentQuizData);

  // Fragen und Antworten erzeugen und anzeigen
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// alle Input Elemente werden ausgewählt und geprüft welches Input gewählt wurden,die gewählte Antwort wird in answer gespeichert
function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id; //Id wird gewählt
    }
  });
  return answer;
}

// Antworten werden immer unchecked bei neuer Frage
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// Funktion zum Prüfen ob eine Antwort überhaupt! gewählt wurde
function checkInput() {
  const inputs = document.querySelectorAll("input"); // Inputs werden selektiert
  let check = false; // zunächst False
  inputs.forEach((input) => {
    // alle Inputs werden geprüft ob gechecked wurde wenn True dann ist check=true;
    if (input.checked) {
      check = true;
    }
  });
  return check; // gibt Check aus jenachdem true oder false
}

el("#weiter").addEventListener("click", () => {
  // //Prüfung ob eine Antwort gewählt wurde
  if (!checkInput()) {
    // wenn check = false ist dann AlarmNachricht und es geht nicht mehr weiter!
    alert("Bitte wähle eine Antwort um fortzufahren!");
    return;
  }

  //Hier wird geprüft bis der currentQuizZähler die selbe Länge wie das Original Array hat
  if (currentQuiz < quizData.length) {
    const answer = getSelected();

    // Hier wird geprüft ob die gewählten Antworten mit den richtigen im Array übereinstimmen solange die vorherige Condition true ist
    if (answer === currentQuizData.correct) {
      score++; // +1 Punkte wenn der Vergleich stimmt
      correctAnswer++; // Zähler um 1 erhöht pro richtiger Antwort
    } else {
      score--; // -1 Punkt je falscher Frage
    }

    currentQuiz++; // Zähler wird jedesmal um 1 erhöht
    loadQuiz(); // Neue Frage wird geladen
  }

  // Hier wird geprüft ob die Länge im Array mit dem CurrentQuizZähler übereinstimmt
  if (quizData.length === currentQuiz) {
    //Neue Kopie vom Array um ein neues Spiel zu starten
    quizDataCopy = deepCopy(quizData);

    // Ergebniss anzeigen
    el("#spielende").className = "spielende-aktiv";
    el("#correct").innerHTML = `${correctAnswer}/${quizDataCopy.length} Fragen richtig beantwortet!`;
    el("#punkte").innerHTML = `Du hast ${score} Punkte erreicht`;
    el("#newGame").addEventListener("click", restart);
    el("#newGameResult").addEventListener("click", function () {
      restart();
      el("#loesungen").className = "loesungen-passiv";
    });
    
    // LösungsFenster PopUp erscheint bei Klick auf Button
    el("#result-btn").addEventListener("click", function () {
      el("#spielende").className = "spielende-passiv";
      el("#loesungen").className = "loesungen-aktiv";
      result_Text.innerText = fragenArray[fragenIndex].question;
      resultAnswer.innerText = `Die Richtige Lösung wäre : ${fragenArray[fragenIndex].loesung}!`;
    });

    // Im LösungsFenster wird die Reihenfolge in der,
    // die Fragen beantwortet wurden nochmal angezeigt und die richtigen Antworte werden angezeigt
    nextQuestion.addEventListener("click", function () {
      result_Text.innerText = fragenArray[fragenIndex].question;
      resultAnswer.innerText = `Die Richtige Lösung wäre : ${fragenArray[fragenIndex].loesung}!`;
      fragenIndex++;
    });
  }
  deselectAnswers(); // Antworten werden bei jedem Laden gelöscht
});

// Spiel wird beim öffnen der Seite geladen
loadQuiz();

// Animierter Text
let text = "Das Spiel ist zuende";
let i = 0;
function writeText() {
  el("#sieg").innerText = text.slice(0, i);
  i++;
  if (i > text.length) {
    i = 0;
  }
}
setInterval(writeText, 250);
