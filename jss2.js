
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
          id: "math2",
          title: "Algebra",
          questions: [
            { question: "What is 10 + 7?", options: ["10", "11", "12", "13"], answer: "12" },
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