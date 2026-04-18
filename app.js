
// 1. Jab page load ho, tab saare saved projects screen par dikhao
window.onload = function() {
    displayProjects();
};

// 2. Project Save karne ka function
function addProject() {
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;

    if(title == "" || desc == "") {
        alert("Plz fill both fields!");
        return;
    }

    // Ek naya object banaya
    let newProject = { title: title, desc: desc };

    // Pehle se majood projects mangwaye (agar hain)
    let projects = JSON.parse(localStorage.getItem('myProjects')) || [];

    // Naya project list mein dala
    projects.push(newProject);

    // Wapis memory (LocalStorage) mein save kar diya
    localStorage.setItem('myProjects', JSON.stringify(projects));

    // Inputs khali kar diye
    document.getElementById('title').value = "";
    document.getElementById('desc').value = "";

    displayProjects();
    alert("Project Added Successfully!");
}

// 3. Screen par projects dikhane ka function
function displayProjects() {
    let list = document.getElementById('project-list');
    let projects = JSON.parse(localStorage.getItem('myProjects')) || [];

    list.innerHTML = ""; // Pehle purana list saaf karo

    projects.forEach((item, index) => {
        list.innerHTML += `
            <div class="project-card">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <button onclick="deleteProject(${index})" style="background:red;">Delete</button>
            </div>
        `;
    });
}

// 4. Project Delete karne ka function
function deleteProject(index) {
    let projects = JSON.parse(localStorage.getItem('myProjects'));
    projects.splice(index, 1); // Wo wala project nikal do
    localStorage.setItem('myProjects', JSON.stringify(projects));
    displayProjects(); // List update karo
}

// Password set kar dein (Aap apni marzi ka rakh sakti hain)
const myPassword = "123"; 

// Login Check karne ka function
function checkLogin() {
    let pass = document.getElementById('admin-pass').value;
    
    if(pass === myPassword) {
        document.getElementById('login-form').style.display = "none";
        document.getElementById('admin-panel').style.display = "block";
    } else {
        alert("Wrong Password! Try again.");
    }
}

// Logout karne ka function
function logout() {
    document.getElementById('login-form').style.display = "block";
    document.getElementById('admin-panel').style.display = "none";
    document.getElementById('admin-pass').value = "";
}