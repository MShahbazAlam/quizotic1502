const slide = document.getElementById("slide");

const slides = [
    /* ===== INTRO SLIDE ===== */
    {
      type: "intro",
      title: "Turn the Round"
    },
  
    /* ===== QUIZ SLIDE 1 ===== */
  {
    type: "quiz",
    topic: "CRYPTO",
    options: [
      { text: "KODAK", correct: false },
      { text: "TETHER", correct: true },
      { text: "NCASH", correct: false },

      { text: "SOLANA", correct: true },
      { text: "ETHEREUM", correct: true },
      { text: "BITCONNECT", correct: false },

      { text: "DOGE", correct: true },
      { text: "BINANCE", correct: true },
      { text: "CARDANO", correct: true }
    ]
    
  }
  ,
{
    type: "quiz",
  topic: "Politics",
  options: [
    { text: "Lok Bhawan", correct: true },
    { text: "Lok Niwas", correct: true },
    { text: "Seva Teerth", correct: true },

    { text: "Ministry of Jal Shakti", correct: true },
    { text: "Ministry of Human Resource Development", correct: false },
    { text: "Ministry of Corporate Affairs", correct: false },

    { text: "Ministry of Ports, Shipping and Waterways", correct: true },
    { text: "Ministry of Ayush", correct: false },
    { text: "Ministry of Education", correct: true }
  ]
}

,
{
    type: "quiz",
  topic: "Formula 1",
  options: [
    { text: "Yuki Tsunoda", correct: false },
    { text: "Alex Albon", correct: true },
    { text: "Kimi Antonelli ", correct: true },

    { text: "⁠Isack Hadjar", correct: false },
    { text: "Lewis Hamilton", correct: true },
    { text: "Oscar Piastri", correct: true },

    { text: "⁠Max Verstappen", correct: true },
    { text: "Liam Lawson", correct: false },
    { text: "Charles Leclerc", correct: true }
  ]
}

,
{
    type: "quiz",
    topic: "MOVIES",
    options: [
      { text: "Parasite", correct: true },
      { text: "Inception", correct: false },
      { text: "The Godfather", correct: true },
      
  
      { text: "Titanic", correct: true },
      { text: "Forrest Gump", correct: true },
      { text: "No Country for Old Men", correct: true },
  
      { text: "Slumdog Millionaire", correct: true },
      { text: "The Shawshank Redemption", correct: false },
      { text: "Joker", correct: false }
    ]
  }
,
  {
    type: "quiz",
      topic: "FOOTBALL",
      options: [
        { text: "Belgium", correct: false },
        { text: "Germany", correct: true },
        { text: "Italy", correct: true },
    
        { text: "England", correct: true },
        { text: "France", correct: true },
        { text: "Uruguay", correct: true },
    
        { text: "Netherlands", correct: false },
        { text: "Portugal", correct: false },
        { text: "Brazil", correct: true }
      ]
    }

    ,
    {
        type: "quiz",
        topic: "TECHNOLOGY",
        options: [
          { text: "Instagram", correct: true },
          { text: "WhatsApp", correct: true },
          { text: "Threads", correct: true },
      
          { text: "Messenger", correct: true },
          { text: "Facebook", correct: true },
          { text: "Oculus", correct: true },
      
          { text: "Discord", correct: false },
          { text: "Snapchat", correct: false },
          { text: "Tik Tok", correct: false }
        ]
      }

      ,
      {
        type: "quiz",
          topic: "Cricket",
          options: [
            { text: "Virat Kohli", correct: true },
            { text: "Ayush Mhatre", correct: true },
            { text: "Ambati Rayudu", correct: false },
        
            { text: "Prithvi Shaw", correct: true },
            { text: "Ishan Kishan", correct: false },
            { text: "Unmukt Chand", correct: true },
        
            { text: "Yuvraj Singh", correct: false },
            { text: "Mohammed Kaif", correct: true },
            { text: "Yash Dhull", correct: true }
          ]
        }
    
        ,
        {
            type: "quiz",
            topic: "INDIA",
            options: [
            { text: "Piyush Pandey", correct: false },
                { text: "Sachin Tendulkar", correct: false },
              { text: "Satyajit Ray", correct: true },
              { text: "Ustaad Bismillah Khan", correct: true },
              { text: "Bhupen Hazarika", correct: true },
          
              { text: "Amitabh Bachchan", correct: true },
              { text: "Zohra Sehgal", correct: true },
              { text: "Ustaad Zakir Khan", correct: true },
          
              { text: "Dharmendra", correct: false }

            ]
          }
          ,
          {
            type: "quiz",
              topic: "BUSINESS",
              options: [
                { text: "Satya nadella", correct: true },
                { text: "sundar pichai", correct: true },
                { text: "shantanu narayan", correct: true },
                { text: "Campbell Wilson", correct: false },
                { text: "Tarun bhatia", correct: false },
                { text: "Shenu agarwal", correct: false },
                { text: "arvind krishna", correct: true },
                { text: "leena nair", correct: true },
                { text: "nikesh arora", correct: true }
            

              ]
            }        

            ,
            {
                type: "quiz",
                topic: "Literature",
                options: [
                  { text: "William Golding", correct: true },
                  { text: "Han Kang", correct: false },
                  { text: "Alice Munro", correct: true },
                  { text: "Laszlo Krasznahorkai", correct: false },
                  { text: "Kazuo Ishiguro", correct: true },
              
                  { text: "VS Naipaul", correct: true },
                  { text: "Ola Tokarczuk", correct: true },
                  { text: "GB Shaw", correct: false },
                  { text: "JM Coetzee", correct: true }
                  
                ]
              }  
    ,
    {
        type: "quiz",
        topic: "HARRY POTTER",
        options: [
          { text: "Centaurs", correct: true },
          { text: "Basilisk", correct: false },
          { text: "Grindylows", correct: false },
          { text: "Acromantula", correct: true },
          { text: "Nifflers", correct: true },
          { text: "The Whomping Willow", correct: false },
          { text: "Thestrals", correct: true },
          { text: "Unicorns", correct: true },
          { text: "Bowtruckles", correct: true }    

          
        ]
      }  
];


/*
let current = 0;

function loadQuestion() {
  slide.innerHTML = "";

  // LEFT TOPIC
  const topic = document.createElement("div");
  topic.className = "left-topic";
  topic.innerText = questions[current].topic;
  slide.appendChild(topic);

  // GRID
  const grid = document.createElement("div");
  grid.className = "options-grid";
  slide.appendChild(grid);

  questions[current].options.forEach(opt => {

    const wrap = document.createElement("div");
    wrap.className = "option-wrapper";

    const base = document.createElement("div");
    base.className = "option-base";

    const text = document.createElement("div");
    text.className = "option-text";
    text.innerText = opt.text;

    const overlay = document.createElement("div");
    overlay.className = "option-overlay";

    overlay.onclick = () => {
      overlay.classList.add(opt.correct ? "correct" : "wrong");
      overlay.style.pointerEvents = "none";
    };

    wrap.appendChild(base);
    wrap.appendChild(text);
    wrap.appendChild(overlay);
    grid.appendChild(wrap);
  });
}
*/
let current = 0;

function loadSlide() {
  slide.innerHTML = "";

  const data = slides[current];

  /* ===== INTRO SLIDE ===== */
  if (data.type === "intro") {

    const title = document.createElement("div");
    title.className = "intro-title";
    title.innerText = data.title;

    slide.appendChild(title);
    return;
  }

  /* ===== QUIZ SLIDE ===== */
  if (data.type === "quiz") {

    const topic = document.createElement("div");
    topic.className = "left-topic";
    topic.innerText = data.topic;
    slide.appendChild(topic);

    const grid = document.createElement("div");
    grid.className = "options-grid";
    slide.appendChild(grid);

    data.options.forEach(opt => {

      const wrap = document.createElement("div");
      wrap.className = "option-wrapper";

      const base = document.createElement("div");
      base.className = "option-base";

      const text = document.createElement("div");
      text.className = "option-text";
      text.innerText = opt.text;

      const overlay = document.createElement("div");
      overlay.className = "option-overlay";

      overlay.onclick = () => {
        overlay.classList.add(opt.correct ? "correct" : "wrong");
        overlay.style.pointerEvents = "none";
      };

      wrap.appendChild(base);
      wrap.appendChild(text);
      wrap.appendChild(overlay);
      grid.appendChild(wrap);
    });
  }
}

/* NEXT SLIDE */

// function nextQuestion() {
//     if (current < questions.length - 1) {
//       current++;
//       loadQuestion();
//     }
//   }
  
//   function prevQuestion() {
//     if (current > 0) {
//       current--;
//       loadQuestion();
//     }
//   }
  
//   /* Keyboard control */
//   document.addEventListener("keydown", e => {
//     if (e.key === "ArrowRight") nextQuestion();
//     if (e.key === "ArrowLeft") prevQuestion();
//   });
  
//   /* Button control */
//   document.getElementById("nextBtn").onclick = nextQuestion;
//   document.getElementById("prevBtn").onclick = prevQuestion;
function nextQuestion() {
    if (current < slides.length - 1) {
      current++;
      loadSlide();
    }
  }
  
  function prevQuestion() {
    if (current > 0) {
      current--;
      loadSlide();
    }
  }
  
  /* Keyboard */
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") nextQuestion();
    if (e.key === "ArrowLeft") prevQuestion();
  });
  
  /* Buttons */
  document.getElementById("nextBtn").onclick = nextQuestion;
  document.getElementById("prevBtn").onclick = prevQuestion;
  
  loadSlide();
  

loadQuestion();
