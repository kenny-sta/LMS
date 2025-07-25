
  // Sidebar and navigation
  const sidebar = document.getElementById("sidebar");
  const toggleSidebar = document.getElementById("toggleSidebar");
  const mainContent = document.getElementById("mainContent");
  const contentArea = document.getElementById("contentArea");
  const welcome = document.getElementById("welcome");
  const navDashboard = document.getElementById("navDashboard");
  const navSubjects = document.getElementById("navSubjects");
  const navQuizzes = document.getElementById("navQuizzes");
  const navLogout = document.getElementById("navLogout");
  const navProfile = document.getElementById("navProfile");
  const navLinks = [navDashboard, navSubjects, navQuizzes];

  // Show user name from localStorage
  const studentName = localStorage.getItem("lmsUsername") || "Student";
  welcome.textContent = `Welcome, ${studentName}! Navigate through all the links to get questions and revise for you external and internal exams`;

  toggleSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    mainContent.classList.toggle("shifted");
  });

  function setActive(navItem) {
    navLinks.forEach(link => link.classList.remove("active"));
    navItem.classList.add("active");
  }

  // Subjects & Quizzes data
  const subjects = [
    {
      name: "Mathematics",
      topics: ["Number and Numeration", "Basic Algebra", "Geometry", "Mensuration", "Statistics & Probability"],
      quizzes: [
        {
          id: "math1",
          title: "NUMBER",
          questions: [
            { question: "What is 5 + 7?", options: ["10", "11", "12", "13"], answer: "12" },
            { question: "What is the square root of 81?", options: ["7", "8", "9", "10"], answer: "9" },
            { question: "What is 15 ÷ 3?", options: ["4", "5", "6", "3"], answer: "5" },
            { question: "Which number is prime?", options: ["9", "11", "15", "21"], answer: "11" },
            { question: "What is 7 × 6?", options: ["42", "36", "48", "40"], answer: "42" },
            { question: "What is 100 - 45?", options: ["55", "65", "45", "60"], answer: "55" },
            { question: "What is the value of π (pi) approx.?", options: ["3.14", "2.14", "4.13", "3.41"], answer: "3.14" },
            { question: "What is 2³?", options: ["6", "8", "9", "12"], answer: "8" },
            { question: "If x = 2, what is 3x + 4?", options: ["10", "11", "12", "13"], answer: "10" },
            { question: "What is the next number after 99?", options: ["100", "101", "98", "110"], answer: "100" }
          ]
        },
        {
          const subjects = [
  {
    name: "Mathematics",
    topics: ["Number and Numeration", "Basic Algebra", "Geometry", "Mensuration", "Statistics & Probability"],
    quizzes: [
      {
        id: "math1",
        title: "Number and Numeration",
        questions: [
          { question: "What is 5 + 7?", options: ["10","11","12","13"], answer: "12" },
          /*... other 19 as before ... */,
          { question: "What is 50% of 300?", options: ["150","200","100","50"], answer: "150" }
        ]
      },
      {
        id: "math2",
        title: "Basic Algebra",
        questions: [
          /* the 20 algebra questions previously shared */
        ]
      },
      {
        id: "math3",
        title: "Geometry",
        questions: [
          { question: "How many sides does a triangle have?", options: ["3","4","5","6"], answer: "3" },
          { question: "How many angles in a quadrilateral?", options: ["3","4","5","6"], answer: "4" },
          { question: "What is the sum of angles in a triangle?", options: ["180°","360°","90°","270°"], answer: "180°" },
          { question: "A right angle measures?", options: ["45°","90°","60°","120°"], answer: "90°" },
          { question: "An equilateral triangle has all sides…", options: ["equal","unequal","two equal","none"], answer: "equal" },
          { question: "A circle has how many vertices?", options: ["0","1","2","infinite"], answer: "0" },
          { question: "The diameter is twice the…", options: ["radius","circumference","area","chord"], answer: "radius" },
          { question: "A parallelogram has opposite sides that are…", options: ["equal","different","perpendicular","none"], answer: "equal" },
          { question: "Square has how many lines of symmetry?", options: ["1","2","4","0"], answer: "4" },
          { question: "A cylinder has how many circular faces?", options: ["1","0","2","3"], answer: "2" },
          { question: "How many edges does a cube have?", options: ["12","8","6","4"], answer: "12" },
          { question: "What shape has 6 faces and all are rectangles?", options: ["cube","cuboid","triangle","cylinder"], answer: "cuboid" },
          { question: "An isosceles triangle has…", options: ["2 equal sides","all equal","no equal","3 equal sides"], answer: "2 equal sides" },
          { question: "The circumference of a circle formula is…", options: ["πd","πr²","2πr","dπr"], answer: "2πr" },
          { question: "A right prism has…", options: ["rectangular ends","triangular ends","circular ends","hexagonal ends"], answer: "triangular ends" },
          { question: "A pentagon has how many sides?", options: ["5","6","4","7"], answer: "5" },
          { question: "All angles in a square are…", options: ["right","acute","obtuse","none"], answer: "right" },
          { question: "A rhombus is a quadrilateral with…", options: ["all sides equal","two sides equal","right angles only","none"], answer: "all sides equal" },
          { question: "Parallel lines never…", options: ["meet","touch","intersect","all"], answer: "intersect" },
          { question: "A chord in a circle is a line joining two…", options: ["points on the circle","centers","radii","tangents"], answer: "points on the circle" }
        ]
      },
      {
        id: "math4",
        title: "Mensuration",
        questions: [
          { question: "Area of rectangle 5cm by 8cm?", options: ["13","40","26","20"], answer: "40" },
          { question: "Perimeter of square side 7cm?", options: ["28","14","21","35"], answer: "28" },
          { question: "Area of triangle base 10cm height 6cm?", options: ["30","60","16","26"], answer: "30" },
          { question: "Circumference of circle radius 7cm?", options: ["44cm","14cm","22cm","28cm"], answer: "44cm" },
          { question: "Area of circle radius 7cm?", options: ["154","49","22","100"], answer: "154" },
          { question: "Volume of cube side 3cm?", options: ["27","9","18","81"], answer: "27" },
          { question: "Volume of cuboid 2×3×4 cm?", options: ["24","9","12","18"], answer: "24" },
          { question: "Area of parallelogram base 6cm altitude 5cm?", options: ["30","11","20","15"], answer: "30" },
          { question: "Perimeter of triangle sides 3,4,5cm?", options: ["12","9","11","10"], answer: "12" },
          { question: "Area of square side 10cm?", options: ["100","40","50","110"], answer: "100" },
          { question: "Volume of cylinder radius 4cm height 10cm?", options: ["502","160","80","120"], answer: "502" },
          { question: "Surface area of cube side 2cm?", options: ["24","8","16","12"], answer: "24" },
          { question: "Area of trapezium parallel sides 6 & 10, height 4?", options: ["32","40","16","28"], answer: "32" },
          { question: "Perimeter of pentagon side 5cm?", options: ["25","20","30","15"], answer: "25" },
          { question: "Area of kite with diagonals 8 & 6?", options: ["24","48","14","28"], answer: "24" },
          { question: "Radius if circumference 31.4cm (π=3.14)?", options: ["5","7","10","4"], answer: "5" },
          { question: "Height if area of triangle = 45 and base = 9?", options: ["10","12","8","7"], answer: "10" },
          { question: "Volume of sphere radius 3cm?", options: ["36π","27π","18π","9π"], answer: "36π" },
          { question: "Surface area of sphere radius 3cm?", options: ["36π","12π","9π","18π"], answer: "36π" },
          { question: "Area of circle diameter 14cm?", options: ["154","98","196","110"], answer: "154" }
        ]
      },
      {
        id: "math5",
        title: "Statistics & Probability",
        questions: [
          { question: "Mean of 2,4,6,8,10?", options: ["6","5","7","8"], answer: "6" },
          { question: "Mode of 2,2,3,4,4,4,5?", options: ["4","2","3","5"], answer: "4" },
          { question: "Median of 1,3,5,7,9?", options: ["5","4","6","7"], answer: "5" },
          { question: "Probability of getting heads in fair coin?", options: ["1/2","1/3","1/4","2/3"], answer: "1/2" },
          { question: "Sample space of rolling a die has…", options: ["6 outcomes","5","4","7"], answer: "6 outcomes" },
          { question: "Range of 3,7,9,12?", options: ["9","5","7","12"], answer: "9" },
          { question: "Tally marks for 7?", options: ["|||| ||","|||| |","||| ||","||||| |"], answer: "|||| ||" },
          { question: "How many classes in frequency table for 20 data points? (approx)", options: ["4","5","6","7"], answer: "5" },
          { question: "Probability of drawing red from red/blue equally?", options: ["1/2","1/4","1/3","2/3"], answer: "1/2" },
          { question: "Total frequency = sum of …", options: ["all frequencies","mean","mode","class width"], answer: "all frequencies" },
          { question: "Class width if range=20 and classes=5?", options: ["4","5","6","3"], answer: "4" },
          { question: "Percentage is part per …", options: ["hundred","ten","thousand","million"], answer: "hundred" },
          { question: "Convert 25% to fraction?", options: ["1/4","1/5","1/2","1/3"], answer: "1/4" },
          { question: "Convert 0.75 to percentage?", options: ["75%","7.5%","0.75%","750%"], answer: "75%" },
          { question: "Probability space is set of all …", options: ["outcomes","classes","trials","events"], answer: "outcomes" },
          { question: "Median of 2,3,5,8 is average of middle two => (3+5)/2 = …", options: ["4","5","3","8"], answer: "4" },
          { question: "Mode is most … value", options: ["frequent","small","large","rare"], answer: "frequent" },
          { question: "Mean is sum of values ÷ …", options: ["number of values","range","mode","median"], answer: "number of values" },
          { question: "Convert 3/5 to percentage?", options: ["60%","50%","30%","66%"], answer: "60%" },
          { question: "Probability of event that cannot happen is …", options: ["0","1","0.5","undefined"], answer: "0" }
        ]
      }
    ]
  },
  {
    name: "English",
    topics: ["Grammar","Vocabulary","Comprehension","Writing"],
    quizzes: [
      {
        id: "eng1",
        title: "Grammar & Tenses",
        questions: [
          { question: "Choose the correct form: I ___ going to school.", options: ["is","are","am","be"], answer: "am" },
          { question: "She ___ to the market every Saturday.", options: ["go","goes","gone","going"], answer: "goes" },
          /*... continue with the 20 grammar questions you already have ...*/
          { question: "We ___ playing outside.", options: ["is","are","was","were"], answer: "are" }
        ]
      },
      {
        id: "eng2",
        title: "Vocabulary",
        questions: [
          { question: "Synonym of 'happy'?", options: ["sad","joyful","angry","tired"], answer: "joyful" },
          { question: "Antonym of 'cold'?", options: ["hot","warm","cool","chill"], answer: "hot" },
          { question: "Choose the correct meaning of 'enormous'.", options: ["small","huge","fair","tiny"], answer: "huge" },
          /*16 more vocab questions about synonyms, antonyms, meanings...*/
          { question: "Which word means 'not honest'?", options: ["truthful","liable","dishonest","kind"], answer: "dishonest" }
        ]
      },
      {
        id: "eng3",
        title: "Comprehension",
        questions: [
          { question: "Read passage: 'The cat sat on the mat…' What sat on the mat?", options: ["cat","dog","rat","hat"], answer: "cat" },
          /*19 more reading comprehension Qs with short passages + Q&A...*/
          { question: "Who is the main character in the passage above?", options: ["A man","A girl","A boy","A cat"], answer: "A boy" }
        ]
      },
      {
        id: "eng4",
        title: "Writing Skills",
        questions: [
          { question: "Complete the sentence: I ___ to school by bus.", options: ["go","goes","went","going"], answer: "go" },
          /*19 more exercises: fill‑in, sentence rewrite, correcting errors...*/
          { question: "Correct this: 'He don’t like beans.'", options: ["He doesn’t like beans.","He not like beans.","He don’t likes beans.","He doesn’t likes beans."], answer: "He doesn’t like beans." }
        ]
      },
      {
        id: "eng5",
        title: "Revision Practice",
        questions: [
          { question: "Pick the plural of 'mouse'.", options: ["mouses","mice","mouse","meese"], answer: "mice" },
          /*... 19 varied practice questions mixing grammar, vocab, writing...*/
          { question: "Which is a verb in: 'She runs fast.'?", options: ["She","runs","fast","None"], answer: "runs" }
        ]
      }
    ]
  }
];

    
          ]
        }
      ]
    },
    {
      name: "English",
      topics: ["Grammar", "Vocabulary", "Comprehension", "Writing"],
      quizzes: [
        {
          id: "eng1",
          title: "English Quiz 1",
          questions: [
            { question: "Choose the correct form: I ___ going to school.", options: ["is", "are", "am", "be"], answer: "am" },
            { question: "Pick the synonym for 'happy'.", options: ["sad", "joyful", "angry", "tired"], answer: "joyful" },
            { question: "Select the correct plural: 'child'", options: ["childs", "children", "childes", "childrens"], answer: "children" }
          ]
        }
      ]
    },
    {
      name: "Science",
      topics: ["Biology", "Physics", "Chemistry"],
      quizzes: [
        {
          id: "sci1",
          title: "Science Quiz 1",
          questions: [
            { question: "Water boils at what temperature (°C)?", options: ["90", "100", "110", "120"], answer: "100" },
            { question: "The center of an atom is called?", options: ["Electron", "Proton", "Nucleus", "Neutron"], answer: "Nucleus" }
          ]
        }
      ]
    }
  ];

  function findQuizById(quizId) {
    for (const subject of subjects) {
      for (const quiz of subject.quizzes) {
        if (quiz.id === quizId) return quiz;
      }
    }
    return null;
  }

  // Dashboard
  navDashboard.addEventListener("click", () => {
    setActive(navDashboard);
    contentArea.innerHTML = `
      <h2>Welcome to the LMS Dashboard</h2>
      <p>Use the sidebar to navigate through subjects, quizzes, and more.</p>
    `;
  });

  // Subjects
  navSubjects.addEventListener("click", () => {
    setActive(navSubjects);
    contentArea.innerHTML = `<h2>Subjects Offered</h2>`;
    subjects.forEach(subject => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h3>${subject.name}</h3><p>Click to view topics and quizzes</p>`;
      card.addEventListener("click", () => {
        contentArea.innerHTML = `<h2>${subject.name}</h2><h4>Topics:</h4><ul>${subject.topics.map(t => `<li>${t}</li>`).join("")}</ul>
        <h4>Quizzes:</h4><div id="quizList"></div>
        <button id="backToSubjects" style="margin-top:15px;padding:10px 20px;border:none;background:#2980b9;color:white;border-radius:6px;cursor:pointer;">Back to Subjects</button>
        `;
        const quizListDiv = document.getElementById("quizList");
        subject.quizzes.forEach(quiz => {
          const quizDiv = document.createElement("div");
          quizDiv.className = "quiz-item";
          quizDiv.textContent = quiz.title;
          quizDiv.addEventListener("click", () => {
            loadQuiz(quiz.id);
          });
          quizListDiv.appendChild(quizDiv);
        });
        document.getElementById("backToSubjects").addEventListener("click", () => {
          navSubjects.click();
        });
      });
      contentArea.appendChild(card);
    });
  });

  // Quizzes
  navQuizzes.addEventListener("click", () => {
    setActive(navQuizzes);
    contentArea.innerHTML = `<h2>All Quizzes</h2>`;
    subjects.forEach(subject => {
      const subjectSection = document.createElement("div");
      subjectSection.innerHTML = `<h3>${subject.name}</h3>`;
      subject.quizzes.forEach(quiz => {
        const quizDiv = document.createElement("div");
        quizDiv.className = "quiz-item";
        quizDiv.textContent = quiz.title;
        quizDiv.addEventListener("click", () => {
          loadQuiz(quiz.id);
        });
        subjectSection.appendChild(quizDiv);
      });
      contentArea.appendChild(subjectSection);
    });
  });

  // Logout
  navLogout.addEventListener("click", () => {
    localStorage.removeItem("lmsUsername");
    localStorage.removeItem("lmsProfilePic");
    window.location.href = "index.html";
  });

  // Profile
  navProfile.addEventListener("click", () => {
    setActive(navProfile);
    const currentName = localStorage.getItem("lmsUsername") || "Student";
    const profilePic = localStorage.getItem("lmsProfilePic") || "https://ui-avatars.com/api/?name=" + encodeURIComponent(currentName);

    contentArea.innerHTML = `
      <h2>Profile</h2>
      <div style="display:flex;align-items:center;gap:24px;margin-bottom:24px;">
        <img id="profilePicImg" src="${profilePic}" alt="Profile Picture" style="width:90px;height:90px;border-radius:50%;object-fit:cover;border:3px solid #3498db;">
        <div>
          <input id="profilePicInput" type="file" accept="image/*" style="margin-bottom:10px;"><br>
          <button id="removePicBtn" style="margin-top:4px;">Remove Picture</button>
        </div>
      </div>
      <label for="profileNameInput"><b>Name:</b></label>
      <input id="profileNameInput" type="text" value="${currentName}" style="padding:8px 12px;margin:8px 0 18px 0;width:220px;border-radius:6px;border:1px solid #ccc;"><br>
      <button id="saveProfileBtn" style="padding:8px 22px;background:#3498db;color:white;border:none;border-radius:6px;font-weight:600;">Save</button>
    `;

    // Change profile picture
    document.getElementById("profilePicInput").addEventListener("change", function(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(evt) {
        localStorage.setItem("lmsProfilePic", evt.target.result);
        document.getElementById("profilePicImg").src = evt.target.result;
      };
      reader.readAsDataURL(file);
    });

    // Remove profile picture
    document.getElementById("removePicBtn").addEventListener("click", function() {
      localStorage.removeItem("lmsProfilePic");
      document.getElementById("profilePicImg").src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(currentName);
    });

    // Save name
    document.getElementById("saveProfileBtn").addEventListener("click", function() {
      const newName = document.getElementById("profileNameInput").value.trim();
      if (newName) {
        localStorage.setItem("lmsUsername", newName);
        welcome.textContent = `Welcome, ${newName}!`;
        alert("Profile updated!");
      }
    });
  });

  // Quiz logic
  let currentQuiz = null;
  let currentQuestionIndex = 0;
  let score = 0;
  let selectedOptionIndex = null;
  let timerInterval = null;
  const timePerQuestion = 15;

  function loadQuiz(quizId) {
    currentQuiz = findQuizById(quizId);
    if (!currentQuiz) {
      alert("Quiz not found.");
      return;
    }
    currentQuestionIndex = 0;
    score = 0;
    selectedOptionIndex = null;
    clearInterval(timerInterval);
    renderQuestion();
  }

  function renderQuestion() {
    const questionObj = currentQuiz.questions[currentQuestionIndex];
    selectedOptionIndex = null;

    contentArea.innerHTML = `
      <div id="quizContainer">
        <div id="timer">Time left: <span id="timeLeft">${timePerQuestion}</span>s</div>
        <div id="question">${currentQuestionIndex + 1}. ${questionObj.question}</div>
        <div id="options"></div>
        <button id="submitBtn" disabled>Submit Answer</button>
        <div id="scoreDisplay"></div>
        <button id="restartQuiz" style="display:none;">Restart Quiz</button>
        <button id="goBackSubjects" style="display:none;">Back to Subjects</button>
      </div>
    `;

    const optionsDiv = document.getElementById("options");
    questionObj.options.forEach((option, index) => {
      const optionEl = document.createElement("div");
      optionEl.className = "option";
      optionEl.textContent = option;
      optionEl.addEventListener("click", () => {
        document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
        optionEl.classList.add("selected");
        selectedOptionIndex = index;
        document.getElementById("submitBtn").disabled = false;
      });
      optionsDiv.appendChild(optionEl);
    });

    // Timer
    let timeLeft = timePerQuestion;
    const timeLeftSpan = document.getElementById("timeLeft");
    timerInterval = setInterval(() => {
      timeLeft--;
      timeLeftSpan.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        autoSubmitAnswer();
      }
    }, 1000);

    document.getElementById("submitBtn").addEventListener("click", () => {
      clearInterval(timerInterval);
      submitAnswer(false);
    });

    document.getElementById("restartQuiz").addEventListener("click", () => {
      loadQuiz(currentQuiz.id);
    });

    document.getElementById("goBackSubjects").addEventListener("click", () => {
      navSubjects.click();
    });
  }

  function autoSubmitAnswer() {
    submitAnswer(true);
  }

  function submitAnswer(autoSubmitted) {
    const questionObj = currentQuiz.questions[currentQuestionIndex];
    if (!autoSubmitted && selectedOptionIndex !== null) {
      const selectedValue = questionObj.options[selectedOptionIndex];
      if (selectedValue === questionObj.answer) {
        score++;
      }
    }
    currentQuestionIndex++;
    if (currentQuestionIndex >= currentQuiz.questions.length) {
      showFinalScore();
    } else {
      renderQuestion();
    }
  }

  function showFinalScore() {
    // Save quiz history
    const quizHistory = JSON.parse(localStorage.getItem("lmsQuizHistory") || "[]");
    quizHistory.push({
      title: currentQuiz.title,
      score: score,
      total: currentQuiz.questions.length,
      date: new Date().toLocaleString()
    });
    localStorage.setItem("lmsQuizHistory", JSON.stringify(quizHistory));

    contentArea.innerHTML = `
      <div id="quizContainer">
        <h2>Quiz Completed! Weldone you can still do better.</h2>
        <div id="scoreDisplay">Your Score: ${score} / ${currentQuiz.questions.length}</div>
        <button id="restartQuiz">Restart Quiz</button>
        <button id="goBackSubjects">Back to Subjects</button>
      </div>
    `;

    document.getElementById("restartQuiz").addEventListener("click", () => {
      loadQuiz(currentQuiz.id);
    });

    document.getElementById("goBackSubjects").addEventListener("click", () => {
      navSubjects.click();
    });
  }

  // Start on dashboard
  navDashboard.click();
