const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const navMenu = document.querySelector(".nav");
const learnMoreBtn = document.getElementById("more");
const ePitchBtn = document.querySelector(".ePitch");
const myWorkBtn = document.querySelector(".myWork");
const elevatorBtn = document.getElementById("elevatorPitchBtn");
const home = document.querySelector(".home");
const about = document.querySelector(".aboutMe");
const navHomeBtn = document.querySelector(".navHomeBtn");
const navAbtBtn = document.querySelector(".navAbtBtn");
const navElevatorBtn = document.querySelector(".navElevatorBtn");
const navProjectsBtn = document.querySelector(".navProjectsBtn");
const navContactBtn = document.querySelector(".navContactBtn");
const elevatorSection = document.querySelector(".elvatorPicthSection");
const closePitch = document.querySelector(".closePitch");
const softwareText = document.querySelector(".softwareText");
const engineerText = document.querySelector(".engineerText");
const swHighlight = document.querySelector(".sw");
const enHighlight = document.querySelector(".en");
const scndColor = document.querySelector(".darkBtn");
const content = document.querySelector(".content");
const navBtnColor = document.querySelectorAll(".cls-1");
const scndLogoColor = document.querySelectorAll(".cls-2");
const heroImgBlue = document.querySelector(".blue");
const heroImgGreen = document.querySelector(".green");
const heroImgPurple = document.querySelector(".purple");
const heroImgAsh = document.querySelector(".ash");
const heroImgLine = document.querySelector(".imgOutline");
const LearnBtn = document.querySelector(".learnMore");
const scndPitchBtn = document.querySelector(".elevatorPitchBtn");
const blueShip = document.querySelector(".blueShip");
const greenShip = document.querySelector(".greenShip");
const ashShip = document.querySelector(".ashShip");
const purpleShip = document.querySelector(".purpleShip");
const projectsSection = document.querySelector(".projectsSection");
const pitchContainer = document.querySelector(".pitchContainer");
const pitchContactIcons = document.querySelector(".icon");
const projectTitle = document.querySelectorAll(".projectTitle");
const abtBtnMobile = document.querySelector(".learnMore2");
const pitchBtnMobile = document.querySelector(".ePitch2");
const showColors = document.getElementById("showColors");
const showColorsAsh = document.querySelector(".showColorsAsh");
const showColorsGreen = document.querySelector(".showColorsGreen");
const ashClr = document.querySelector(".ashClr");
const greenClr = document.querySelector(".greenClr");
const blueClr = document.querySelector(".blueClr");
const purpleClr = document.querySelector(".purpleClr");
const showColorsBtn = document.querySelector(".showColors");
const colorsList = document.querySelector(".colorList");
const loader = document.querySelector(".loader");
const htmlBar = document.querySelector(".htmlBar");
const cssBar = document.querySelector(".cssBar");
const jsBar = document.querySelector(".jsBar");
const reactBar = document.querySelector(".reactBar");
const pythonBar = document.querySelector(".pythonBar");
const excelBar = document.querySelector(".excelBar");

window.addEventListener("load", () => {
    loader.classList.add("loader-hidden")
})


const pages = ["Home", "About", "Elevator Pitch", "Portfolio", "Contact"]
let current = pages[0];

showColorsBtn.addEventListener("click", () => {
    showColors.classList.toggle("hideColors");
    colorsList.classList.toggle("colorsAppear");
})

showColorsAsh.addEventListener("click", () => {
    showColorsAsh.classList.toggle("hideColorsAsh");
    colorsList.classList.toggle("colorsAppear");
})

showColorsGreen.addEventListener("click", () => {
    showColorsGreen.classList.toggle("hideColorsGreen");
    colorsList.classList.toggle("colorsAppear");
})

// Function to open navbar
function openNav() {
    navMenu.style.width = "100%";
    openBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
}

// function to close navbar
function closeNav() {
    navMenu.style.width = "0%";
    openBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
}
// Function to go to about us page from learn more button in homepage
learnMoreBtn.addEventListener("click", () => {
    home.classList.add("hidden");
    about.classList.remove("hidden");
    current = pages[1];
})

// Function to go to about us page from learn more button in homepage in mobile view
abtBtnMobile.addEventListener("click", () => {
    home.classList.add("hidden");
    about.classList.remove("hidden");
    current = pages[1];
})

// Software Text on Home page hover
softwareText.addEventListener("mouseover", () => {
    swHighlight.style.height = "10px";
})
softwareText.addEventListener("mouseout", () => {
    swHighlight.style.height = "40px";
})

// Engineer Text on Home page hover
engineerText.addEventListener("mouseover", () => {
    enHighlight.style.height = "10px";
})
engineerText.addEventListener("mouseout", () => {
    enHighlight.style.height = "40px";
})

// function for elevator button on homepage to hoveron
elevatorBtn.addEventListener("mouseover", () => {
    elevatorBtn.style.padding = "12px 70px";
    document.querySelector(".voice").style.display = "block";
})

// function for elevator button on homepage to hoverout
elevatorBtn.addEventListener("mouseout", () => {
    elevatorBtn.style.padding = "12px 50px";
    document.querySelector(".voice").style.display = "none";
})

// Function to go to home page from nav
navHomeBtn.addEventListener("click", () => {
    if (current !== pages[0]) {
        home.classList.remove("hidden");
        about.classList.add("hidden")
        elevatorSection.classList.add("hidden");
        projectsSection.classList.add("hidden");
        current = pages[0];
        navMenu.style.width = "0%"
        openBtn.classList.remove("hidden");
        closeBtn.classList.add("hidden");
    }
})

// Function to go to about page from nav
navAbtBtn.addEventListener("click", () => {
    if (current !== pages[1]) {
        home.classList.add("hidden");
        about.classList.remove("hidden");
        projectsSection.classList.add("hidden");
        elevatorSection.classList.add("hidden");
        navMenu.style.width = "0%";
        openBtn.classList.remove("hidden");
        closeBtn.classList.add("hidden");
        current = pages[1];
        console.log(current);
    }
})

navElevatorBtn.addEventListener("click", () => {
    elevatorSection.classList.remove("hidden");
    navMenu.style.width = "0%";
    openBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
})

closePitch.addEventListener("click", () => {
    elevatorSection.classList.add("hidden");
})

elevatorBtn.addEventListener("click", () => {
    elevatorSection.classList.remove("hidden");
})

myWorkBtn.addEventListener("click", () => {
    home.classList.add("hidden");
    about.classList.add("hidden");
    elevatorSection.classList.add("hidden");
    projectsSection.classList.remove("hidden");
    navMenu.style.width = "0%";
    openBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
    current = pages[3];
})

navProjectsBtn.addEventListener("click", () => {
    if (current !== pages[3]) {
        home.classList.add("hidden");
        about.classList.add("hidden");
        elevatorSection.classList.add("hidden");
        projectsSection.classList.remove("hidden");
        navMenu.style.width = "0%";
        openBtn.classList.remove("hidden");
        closeBtn.classList.add("hidden");
        current = pages[3];
        console.log(current);
    }
})

document.querySelector(".logo").addEventListener("click", () => {
    if (current !== pages[0]) {
        home.classList.remove("hidden");
        about.classList.add("hidden")
        elevatorSection.classList.add("hidden");
        projectsSection.classList.add("hidden");
        current = pages[0];
        navMenu.style.width = "0%"
        openBtn.classList.remove("hidden");
        closeBtn.classList.add("hidden")
    }
})

const activeNav = () => {
    switch (current) {
        case pages[0]:
            
    }
}

content.addEventListener('click', () => {
    navMenu.style.width = "0px";
    openBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
})

ashClr.addEventListener("click", () => {
    // Show Colors Button
    showColors.classList.add("hidden");
    showColorsAsh.classList.remove("hidden");
    showColorsGreen.classList.add("hidden");


    // content background color
    content.classList.remove("greenColorActive");
    content.classList.add("ashColorActive");


    // Hamburger color
    for (let i = 0; i < navBtnColor.length; i++) {
        navBtnColor[i].classList.remove("greenColorBtn");
        navBtnColor[i].classList.add("ashColorBtn");
    }


    // Nav Menu Color
    navMenu.classList.add("ashNavColor")
    navMenu.classList.remove("greenNavColor")


    // Logo Color
    for (let i = 0; i < scndLogoColor.length; i++) {
        scndLogoColor[i].classList.remove("greenLogoColor");
        scndLogoColor[i].classList.add("ashLogoColor");
    }


    // SW and EN texts Highlight Color
    swHighlight.classList.remove("greenHltColor");
    swHighlight.classList.add("ashHltColor");

    enHighlight.classList.remove("greenHltColor");
    enHighlight.classList.add("ashHltColor");


    // hero Img
    heroImgBlue.classList.add("disappear");
    heroImgGreen.classList.add("disappear");
    heroImgAsh.classList.remove("disappear");


    // Hero Img Line
    heroImgLine.classList.remove("greenLineColor");
    heroImgLine.classList.add("ashLineColor");


    LearnBtn.classList.remove("greenLearnColor");
    LearnBtn.classList.add("ashLearnColor");

    scndPitchBtn.classList.remove("greenPitchBtnColor");
    scndPitchBtn.classList.add("ashPitchBtnColor");

    myWorkBtn.classList.remove("greenWorkBtnColor");
    myWorkBtn.classList.add("ashWorkBtnColor");

    blueShip.classList.add("disappear");
    ashShip.classList.remove("disappear");
    greenShip.classList.add("disappear");

    for (let i = 0; i < projectTitle.length; i++) {
        projectTitle[i].classList.add("ashTitleColor");
        projectTitle[i].classList.remove("greenTitleColor");
    }

    ePitchBtn.classList.remove("greenePitchColor");
    ePitchBtn.classList.add("ashePitchColor");

    abtBtnMobile.classList.add("ashLearnColor2");
    abtBtnMobile.classList.remove("greenLearnColor2");

    pitchBtnMobile.classList.remove("greenePitchColor2");
    pitchBtnMobile.classList.add("ashePitchColor2");

    
    htmlBar.classList.remove("htmlBarGreen");
    htmlBar.classList.add("htmlBarAsh");

    cssBar.classList.remove("cssBarGreen");
    cssBar.classList.add("cssBarAsh");
    
    jsBar.classList.remove("jsBarGreen");
    jsBar.classList.add("jsBarAsh");
    
    reactBar.classList.remove("reactBarGreen");
    reactBar.classList.add("reactBarAsh");

    pythonBar.classList.remove("pythonBarGreen");
    pythonBar.classList.add("pythonBarAsh");
    
    excelBar.classList.remove("excelBarGreen");
    excelBar.classList.add("excelBarAsh");

    document.querySelector(".projectsSection").classList.add("ashProjectSecBg");
    document.querySelector(".projectsSection").classList.remove("greenProjectSecBg");
    
    document.querySelector(".project").classList.add("ashProject");
    document.querySelector(".project").classList.remove("greenProject");
})

greenClr.addEventListener("click", () => {
    // Show Colors Button
    showColors.classList.add("hidden");
    showColorsAsh.classList.add("hidden");
    showColorsGreen.classList.remove("hidden");


    // content background color
    content.classList.add("greenColorActive");
    content.classList.remove("ashColorActive");


    // Hamburger color
    for (let i = 0; i < navBtnColor.length; i++) {
        navBtnColor[i].classList.add("greenColorBtn");
        navBtnColor[i].classList.remove("ashColorBtn");
    }


    // Nav Menu Color
    navMenu.classList.remove("ashNavColor")
    navMenu.classList.add("greenNavColor")


    // Logo Color
    for (let i = 0; i < scndLogoColor.length; i++) {
        scndLogoColor[i].classList.add("greenLogoColor");
        scndLogoColor[i].classList.remove("ashLogoColor");
    }


    // SW and EN texts Highlight Color
    swHighlight.classList.add("greenHltColor");
    swHighlight.classList.remove("ashHltColor");

    enHighlight.classList.add("greenHltColor");
    enHighlight.classList.remove("ashHltColor");


    // hero Img
    heroImgBlue.classList.add("disappear");
    heroImgGreen.classList.remove("disappear");
    heroImgAsh.classList.add("disappear");


    // Hero Img Line
    heroImgLine.classList.add("greenLineColor");
    heroImgLine.classList.remove("ashLineColor");


    LearnBtn.classList.add("greenLearnColor");
    LearnBtn.classList.remove("ashLearnColor");

    scndPitchBtn.classList.add("greenPitchBtnColor");
    scndPitchBtn.classList.remove("ashPitchBtnColor");

    myWorkBtn.classList.add("greenWorkBtnColor");
    myWorkBtn.classList.remove("ashWorkBtnColor");

    blueShip.classList.add("disappear");
    ashShip.classList.add("disappear");
    greenShip.classList.remove("disappear");

    for (let i = 0; i < projectTitle.length; i++) {
        projectTitle[i].classList.remove("ashTitleColor");
        projectTitle[i].classList.add("greenTitleColor");
    }

    ePitchBtn.classList.add("greenePitchColor");
    ePitchBtn.classList.remove("ashePitchColor");

    abtBtnMobile.classList.remove("ashLearnColor2");
    abtBtnMobile.classList.add("greenLearnColor2");

    pitchBtnMobile.classList.add("greenePitchColor2");
    pitchBtnMobile.classList.remove("ashePitchColor2");

    
    htmlBar.classList.add("htmlBarGreen");
    htmlBar.classList.remove("htmlBarAsh");

    cssBar.classList.add("cssBarGreen");
    cssBar.classList.remove("cssBarAsh");
    
    jsBar.classList.add("jsBarGreen");
    jsBar.classList.remove("jsBarAsh");
    
    reactBar.classList.add("reactBarGreen");
    reactBar.classList.remove("reactBarAsh");

    pythonBar.classList.add("pythonBarGreen");
    pythonBar.classList.remove("pythonBarAsh");
    
    excelBar.classList.add("excelBarGreen");
    excelBar.classList.remove("excelBarAsh");

    document.querySelector(".projectsSection").classList.remove("ashProjectSecBg");
    document.querySelector(".projectsSection").classList.add("greenProjectSecBg");
    
    document.querySelector(".project").classList.remove("ashProject");
    document.querySelector(".project").classList.add("greenProject");
})

purpleClr.addEventListener("click", () => {
    // Show Colors Button
    showColors.classList.remove("hidden");
    showColorsAsh.classList.add("hidden");
    showColorsGreen.classList.add("hidden");


    // content background color
    content.classList.remove("greenColorActive");
    content.classList.remove("ashColorActive");


    // Hamburger color
    for (let i = 0; i < navBtnColor.length; i++) {
        navBtnColor[i].classList.remove("greenColorBtn");
        navBtnColor[i].classList.remove("ashColorBtn");
    }


    // Nav Menu Color
    navMenu.classList.remove("ashNavColor")
    navMenu.classList.remove("greenNavColor")


    // Logo Color
    for (let i = 0; i < scndLogoColor.length; i++) {
        scndLogoColor[i].classList.remove("greenLogoColor");
        scndLogoColor[i].classList.remove("ashLogoColor");
    }


    // SW and EN texts Highlight Color
    swHighlight.classList.remove("greenHltColor");
    swHighlight.classList.remove("ashHltColor");

    enHighlight.classList.remove("greenHltColor");
    enHighlight.classList.remove("ashHltColor");


    // hero Img
    heroImgBlue.classList.remove("disappear");
    heroImgGreen.classList.add("disappear");
    heroImgAsh.classList.add("disappear");


    // Hero Img Line
    heroImgLine.classList.remove("greenLineColor");
    heroImgLine.classList.remove("ashLineColor");


    LearnBtn.classList.remove("greenLearnColor");
    LearnBtn.classList.remove("ashLearnColor");

    scndPitchBtn.classList.remove("greenPitchBtnColor");
    scndPitchBtn.classList.remove("ashPitchBtnColor");

    myWorkBtn.classList.remove("greenWorkBtnColor");
    myWorkBtn.classList.remove("ashWorkBtnColor");

    blueShip.classList.remove("disappear");
    ashShip.classList.add("disappear");
    greenShip.classList.add("disappear");

    for (let i = 0; i < projectTitle.length; i++) {
        projectTitle[i].classList.remove("ashTitleColor");
        projectTitle[i].classList.remove("greenTitleColor");
    }

    ePitchBtn.classList.remove("greenePitchColor");
    ePitchBtn.classList.remove("ashePitchColor");

    abtBtnMobile.classList.remove("ashLearnColor2");
    abtBtnMobile.classList.remove("greenLearnColor2");

    pitchBtnMobile.classList.remove("greenePitchColor2");
    pitchBtnMobile.classList.remove("ashePitchColor2");

    
    htmlBar.classList.remove("htmlBarGreen");
    htmlBar.classList.remove("htmlBarAsh");

    cssBar.classList.remove("cssBarGreen");
    cssBar.classList.remove("cssBarAsh");
    
    jsBar.classList.remove("jsBarGreen");
    jsBar.classList.remove("jsBarAsh");
    
    reactBar.classList.remove("reactBarGreen");
    reactBar.classList.remove("reactBarAsh");

    pythonBar.classList.remove("pythonBarGreen");
    pythonBar.classList.remove("pythonBarAsh");
    
    excelBar.classList.remove("excelBarGreen");
    excelBar.classList.remove("excelBarAsh");

    document.querySelector(".projectsSection").classList.remove("ashProjectSecBg");
    document.querySelector(".projectsSection").classList.remove("greenProjectSecBg");
    
    document.querySelector(".project").classList.remove("ashProject");
    document.querySelector(".project").classList.remove("greenProject");
})

projectsSection.addEventListener('click', () => {
    navMenu.style.width = "0px";
    openBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
})

document.getElementById("ePitch").addEventListener("click", () => {
    elevatorSection.classList.remove("hidden");
})

pitchBtnMobile.addEventListener("click", () => {
    elevatorSection.classList.remove("hidden");
})



const sites = ['#', '#', 'https://www.achievingreatness.com.ng', 'https://www.intervoicetechnologiesltd.com', 'https://www.achievingreatnesproperty.com', 'https://youtu.be/sMz4WkthelE', 'https://drive.google.com/file/d/1c-n9Ogz-1K7G0umwVq7jhRilYjETqCtC/view'];
const projectImg = document.querySelectorAll(".projectImg");

for (let i = 0; i < projectImg.length; i++) {
    projectImg[i].addEventListener("click", () => {
        window.open(`${sites[i]}`, '_blank');
    })
}

const links = ['https://www.instagram.com/jamxs.dev/', '', 'https://www.twitter.com/jamxs_dev/', 'https://www.linkedin.com/in/james-moses-167723148/'];
const socialIcons = document.querySelectorAll(".icon");

for (let i = 0; i < socialIcons.length; i++) {
    socialIcons[i].addEventListener("click", () => {
        window.open(`${links[i]}`, '_blank');
    })
}