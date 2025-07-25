<script>
  const students = [
    { name: "JOLA", password: "1234" },
    { name: "DIVINE", password: "1234" },
    { name: "FAWALZ", password: "1234" },
    { name: "DAVID", password: "1234" },
    { name: "ELIJAH", password: "1234" },
    { name: "CHARLES", password: "1234" },
    { name: "FRANKLYN", password: "1234" },
    { name: "AYODEJI", password: "1234" },
    { name: "CHRISTOPHER", password: "1234" },
    { name: "BABARA", password: "1234" },
    { name: "SANTIAGO", password: "1234" },
    { name: "ABEL", password: "1234" },
    { name: "OLABODE", password: "1234" },
    { name: "DAVID GREEN", password: "1234" },
    { name: "DANIEL", password: "1234" },
    { name: "MOLA", password: "1234" },
    { name: "MICHAEL", password: "1234" },
    { name: "BISHOP", password: "1234" },
    { name: "TOLUANIMI", password: "1234" },
    { name: "ANGELO", password: "1234" },
    { name: "YANMIFE", password: "1234" },
    { name: "LEO", password: "1234" },
    { name: "GINIGEME", password: "1234" },
    { name: "JOMILOJU", password: "1234" },
    { name: "ISRAEL", password: "1234" },
    { name: "MAXIMILLIAN", password: "1234" },
    { name: "DOMINGO", password: "1234" },
    { name: "GOODLUCK", password: "1234" },
    { name: "ASIWAJU", password: "1234" },
    { name: "KHALID", password: "1234" },
    { name: "Grace Hill", password: "grace789" },
    { name: "Henry Cole", password: "henrypass" },
    { name: "Isla James", password: "isla456" },
    { name: "Jack Bell", password: "jack123" },
    { name: "Karen Fox", password: "karen789" },
    { name: "Liam West", password: "liampass" },
    { name: "Mia Turner", password: "mia456" },
    { name: "Noah Young", password: "noah123" },
    { name: "Olivia Reed", password: "olivia789" },
    { name: "Paul Green", password: "paulpass" },
    { name: "Queen Lee", password: "queen456" },
    { name: "Ryan Clark", password: "ryan123" },
    { name: "Sara Wood", password: "sara789" },
    { name: "Tom Hall", password: "tompass" },
    { name: "Uma White", password: "uma456" },
    { name: "Victor Gray", password: "victor123" },
    { name: "Wendy Price", password: "wendy789" },
    { name: "Xenia Fox", password: "xenia456" },
    { name: "Yusuf Khan", password: "yusuf123" }
  ];

  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const enteredPass = document.getElementById("password").value.trim();
    const selectedClass = document.getElementById("classSelect").value.trim();
    const errorDisplay = document.getElementById("error");

    errorDisplay.textContent = "";

    if (!selectedClass) {
      errorDisplay.textContent = "📚 Please select your class!";
      return;
    }

    const student = students.find(s => s.name.toLowerCase() === username.toLowerCase());

    if (!student) {
      errorDisplay.textContent = "❌ Name not found. CHECK NAME and try again.";
      return;
    }

    if (student.password !== enteredPass) {
      errorDisplay.textContent = "❌ Incorrect password. CHECK PASSWORD and try again.";
      return;
    }

    // Save username to local storage
    localStorage.setItem("lmsUsername", student.name);

    // ✅ Build file name in lowercase (e.g., jss1.html)
    const classFile = selectedClass.toLowerCase() + ".html";

    // ✅ Redirect (no folder since file is in same directory)
    window.location.href = classFile;
  });
</script>
