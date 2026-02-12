// Update Preview Automatically
document.querySelectorAll("input, textarea").forEach(input => {
    input.addEventListener("input", updatePreview);
});

function updatePreview() {
    document.getElementById("preview-name").textContent = name.value;
    document.getElementById("preview-title").textContent = title.value;
    document.getElementById("preview-summary").textContent = summary.value;
    document.getElementById("preview-phone").textContent = phone.value;
    document.getElementById("preview-email").textContent = email.value;
    document.getElementById("preview-address").textContent = address.value;

    saveToLocal();
}

// Skills
function addSkill(value = "") {
    const container = document.getElementById("skills-container");
    const input = document.createElement("input");
    input.type = "text";
    input.value = value;
    input.placeholder = "Skill";
    input.oninput = updateSkillsPreview;
    container.appendChild(input);
}

function updateSkillsPreview() {
    const preview = document.getElementById("preview-skills");
    preview.innerHTML = "";
    document.querySelectorAll("#skills-container input").forEach(input => {
        const li = document.createElement("li");
        li.textContent = input.value;
        preview.appendChild(li);
    });
    saveToLocal();
}

// Education
function addEducation(data = {}) {
    const container = document.getElementById("education-container");
    const div = document.createElement("div");
    div.innerHTML = `
        <input type="text" placeholder="Degree" value="${data.degree || ''}">
        <input type="text" placeholder="Institution" value="${data.institution || ''}">
        <input type="text" placeholder="Year" value="${data.year || ''}">
    `;
    div.querySelectorAll("input").forEach(input => input.oninput = updateEducationPreview);
    container.appendChild(div);
}

function updateEducationPreview() {
    const preview = document.getElementById("preview-education");
    preview.innerHTML = "";
    document.querySelectorAll("#education-container div").forEach(div => {
        const inputs = div.querySelectorAll("input");
        preview.innerHTML += `<p><strong>${inputs[0].value}</strong> - ${inputs[1].value} (${inputs[2].value})</p>`;
    });
    saveToLocal();
}

// Experience
function addExperience(data = {}) {
    const container = document.getElementById("experience-container");
    const div = document.createElement("div");
    div.innerHTML = `
        <input type="text" placeholder="Job Title" value="${data.title || ''}">
        <input type="text" placeholder="Company" value="${data.company || ''}">
        <input type="text" placeholder="Duration" value="${data.duration || ''}">
    `;
    div.querySelectorAll("input").forEach(input => input.oninput = updateExperiencePreview);
    container.appendChild(div);
}

function updateExperiencePreview() {
    const preview = document.getElementById("preview-experience");
    preview.innerHTML = "";
    document.querySelectorAll("#experience-container div").forEach(div => {
        const inputs = div.querySelectorAll("input");
        preview.innerHTML += `<p><strong>${inputs[0].value}</strong> - ${inputs[1].value} (${inputs[2].value})</p>`;
    });
    saveToLocal();
}

// LocalStorage
function saveToLocal() {
    const data = {
        name: name.value,
        title: title.value,
        summary: summary.value,
        phone: phone.value,
        email: email.value,
        address: address.value
    };
    localStorage.setItem("resumeData", JSON.stringify(data));
}

function loadFromLocal() {
    const data = JSON.parse(localStorage.getItem("resumeData"));
    if (!data) return;

    name.value = data.name || "";
    title.value = data.title || "";
    summary.value = data.summary || "";
    phone.value = data.phone || "";
    email.value = data.email || "";
    address.value = data.address || "";

    updatePreview();
}

function clearData() {
    localStorage.clear();
    location.reload();
}

// PDF
function downloadPDF() {
    window.print();
}

// Initialize
loadFromLocal();
addSkill();
addEducation();
addExperience();
