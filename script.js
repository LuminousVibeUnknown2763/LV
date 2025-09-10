//variable.create
let stdGra = {
  left: 'rgb(128, 0, 128)',
  right: 'rgb(74, 144, 226)'
};

let misGra = {
  left: `rgb(${128 - 45}, ${0 - 45}, ${128 - 45})`,
  right: `rgb(${74 - 45}, ${144 - 45}, ${226 - 45})`
};

const svgIconHome = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" 
    fill="currentColor" 
    style="width: 24px; height: 24px; flex-shrink: 0;">
    <path fill-rule="evenodd" 
        d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" 
        clip-rule="evenodd" />
</svg>
`;

const svgIconLightbulb = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" 
     width="24" height="24" style="margin-bottom:2px;">
  <path d="M10.618 10.26c-.361.223-.618.598-.618 1.022 0 .226-.142.43-.36.49A6.006 6.006 0 0 1 8 12c-.569 0-1.12-.08-1.64-.227a.504.504 0 0 1-.36-.491c0-.424-.257-.799-.618-1.021a5 5 0 1 1 5.235 0ZM6.867 13.415a.75.75 0 1 0-.225 1.483 9.065 9.065 0 0 0 2.716 0 .75.75 0 1 0-.225-1.483 7.563 7.563 0 0 1-2.266 0Z" />
</svg>
`;

const svgIconSettings = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="24" height="24" style="margin-bottom:2px;">
  <path fill-rule="evenodd" d="M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848l.186-1.858Zm-.177 7.567-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997Z" clip-rule="evenodd" />
</svg>
`;

const svgIconCheck = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="27" height="27" style="margin-bottom:2px;">
  <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
</svg>
`;

const svgIconBrush = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="20" height="20" style="margin-bottom:2px;">
  <path d="M12.613 1.258a1.535 1.535 0 0 1 2.13 2.129l-1.905 2.856a8 8 0 0 1-3.56 2.939 4.011 4.011 0 0 0-2.46-2.46 8 8 0 0 1 2.94-3.56l2.855-1.904ZM5.5 8A2.5 2.5 0 0 0 3 10.5a.5.5 0 0 1-.7.459.75.75 0 0 0-.983 1A3.5 3.5 0 0 0 8 10.5 2.5 2.5 0 0 0 5.5 8Z" />
</svg>
`;





//body.get
const body = document.body;

//body.styles
body.style.background = `linear-gradient(to right, ${misGra.left}, ${misGra.right})`;
body.style.fontFamily = 'Arial, sans-serif';
body.style.width = '97%';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
body.style.gap = '85px';
body.style.paddingTop = '80px';





//nav.create
const nav = document.createElement('nav');
nav.id = 'nav';

//nav.styles
nav.style.position = 'fixed';
nav.style.top = "0";
nav.style.left = "0";
nav.style.width = "100%";
nav.style.height = "8%";
nav.style.zIndex = '1000';
nav.style.background = 'rgba(255, 255, 255, 0.08)';
nav.style.backdropFilter = 'blur(35px)';
nav.style.webkitBackdropFilter = 'blur(35px)';
nav.style.border = '1.5px solid rgba(255, 255, 255, 0.1)';
nav.style.borderTop = 'none';
nav.style.borderLeft = 'none';
nav.style.borderRight = 'none';
nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
nav.style.display = 'flex';
nav.style.flexDirection = 'row';
nav.style.alignItems = 'center';
nav.style.justifyContent = 'center';
nav.style.gap = '25px';

//nav.exist
body.appendChild(nav);





//a.home.create
const ah = document.createElement('a');
ah.id = 'ah';
ah.href = '#home';

//a.home.styles
ah.style.color = 'white';	
ah.style.fontWeight = 'bold';
ah.style.fontSize = '10px';
ah.style.textDecoration = 'none';
ah.style.position = 'relative';
ah.style.display = 'flex';
ah.style.flexDirection = 'column';
ah.style.alignItems = 'center';
ah.style.gap = '0.5px';

//a.home.icon
ah.innerHTML = svgIconHome + 'Home';

//a.home.exist
nav.appendChild(ah);





//div.ah.create
const diah = document.createElement('div');
diah.id = 'diah';

//div.ah.styles
diah.style.position = 'absolute';
diah.style.background = 'rgba(255, 255, 255, 0.08)';
diah.style.height = '35px';
diah.style.width = '5px';
diah.style.left = '122%';
diah.style.top = '50%';
diah.style.transform = 'translate(-0%, -50%)';
diah.style.borderRadius = '25px';
diah.style.webkitBackdropFilter = 'blur(35px)';
diah.style.backdropFilter = 'blur(35px)';

//div.ah.exist
ah.appendChild(diah);




//a.projectsBar.create
const apb = document.createElement('a');
apb.id = 'apb';
apb.href = '#projectBar';

//a.projectsBar.styles
apb.style.color = 'white';	
apb.style.fontWeight = 'bold';
apb.style.fontSize = '10px';
apb.style.textDecoration = 'none';
apb.style.position = 'relative';
apb.style.display = 'flex';
apb.style.flexDirection = 'column';
apb.style.alignItems = 'center';
apb.style.gap = '0.5px';

//a.projectsBar.icon
apb.innerHTML = svgIconLightbulb + 'Projects Bar';

//a.projectsBar.exist
nav.appendChild(apb);





//div.apb.create
const diapb = document.createElement('div');
diapb.id = 'diapb';

//div.apb.styles
diapb.style.position = 'absolute';
diapb.style.background = 'rgba(255, 255, 255, 0.08)';
diapb.style.height = '35px';
diapb.style.width = '5px';
diapb.style.left = '111.5%';
diapb.style.top = '50%';
diapb.style.transform = 'translate(-0%, -50%)';
diapb.style.borderRadius = '25px';
diapb.style.webkitBackdropFilter = 'blur(35px)';
diapb.style.backdropFilter = 'blur(35px)';

//div.apb.exist
apb.appendChild(diapb);





//a.settings.create
const aS = document.createElement('a');
aS.id = 'aS'; 
aS.href = '#settings';

//a.settings.styles
aS.style.color = 'white';	
aS.style.fontWeight = 'bold';
aS.style.fontSize = '10px';
aS.style.textDecoration = 'none';
aS.style.position = 'relative';
aS.style.display = 'flex';
aS.style.flexDirection = 'column';
aS.style.alignItems = 'center';
aS.style.gap = '0.5px';

//a.settings.icon
aS.innerHTML = svgIconSettings + 'Settings';

//a.settings.exist
nav.appendChild(aS);





//section.home.create
const home = document.createElement('section');
home.id = 'home';

//section.home.styles
home.style.background = 'rgba(255, 255, 255, 0.08)';
home.style.backdropFilter = 'blur(35px)';
home.style.webkitBackdropFilter = 'blur(35px)';
home.style.border = '1.5px solid rgba(255, 255, 255, 0.1)';
home.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
home.style.display = 'flex';
home.style.flexDirection = 'column';
home.style.alignItems = 'center';
home.style.justifyContent = 'center';
home.style.width = 'calc(100% + 30px)';
home.style.height = '280px';
home.style.gap = '-35px';
home.style.padding = '10px';

//section.home.exist
body.appendChild(home)





//logo.create
const logo = document.createElement('div');
logo.id = 'logo';
logo.textContent = 'LV';

//logo.styles
logo.style.background = `linear-gradient(to right, ${stdGra.left}, ${stdGra.right})`;
logo.style.fontWeight = 'bold';
logo.style.color = 'white';
logo.style.fontSize = '45px';
logo.style.textShadow = '3px 3px 3px rgba(0, 0, 0, 0.5)';
logo.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 0.5)';
logo.style.display = 'flex';
logo.style.flexDirection = 'column';
logo.style.alignItems = 'center';
logo.style.justifyContent = 'center';
logo.style.width = '85px';
logo.style.height = '85px';
logo.style.borderRadius = '50%';
logo.style.fontFamily = 'Copperplate, fantasy';


//logo.exist
home.appendChild(logo);





//h1.lv.create
const holv = document.createElement('h1');
holv.id = 'holv';
holv.textContent = 'LuminousVibe';

//h1.lv.styles
holv.style.color = 'white';
holv.style.fontWeight = 'bold';
holv.style.fontSize = '35px';
holv.style.fontFamily = 'Copperplate, fantasy';
//h1.lv.exist
home.appendChild(holv);





//p.homedes.create
const hode = document.createElement('p');
hode.id = 'hode';
hode.textContent = 'Let creativity live on';

//p.homedes.styles
hode.style.color = 'white';
hode.style.fontWeight = 'bold';
hode.style.fontSize = '20px';

//p.homedes.exist
home.appendChild(hode);





//button.letMa.create
const bulema = document.createElement('button');
bulema.id = 'bulema';

//button.letma.styles
bulema.style.fontSize = '20px';
bulema.style.color = 'white';
bulema.style.display = 'flex';
bulema.style.padding = '5px';
bulema.style.flexDirection = 'row';
bulema.style.alignItems = 'center';
bulema.style.justifyContent = 'center';
bulema.style.borderRadius = '8px';
bulema.style.background = 'rgba(255, 255, 255, 0.08)';
bulema.style.border = '1px solid rgba(255, 255, 255, 0.1)';
bulema.style.transition = 'all 0.3s ease';

//button.lema.icon
bulema.innerHTML = svgIconBrush + 'Lets Make Something!';

//find the icon inside the button
const svgEl = bulema.querySelector('svg');
svgEl.style.transition = 'transform 0.3s ease';

//button.letma.hover
bulema.onmouseover = () => {
  bulema.style.background = 'rgba(0, 0, 0, 0.25)';
  bulema.style.flexDirection = 'column';
  bulema.style.fontSize = '10px';
  svgEl.style.transform = 'scale(1.5)';
};

bulema.onmouseout = () => {
  bulema.style.background = 'rgba(255, 255, 255, 0.1)';
  bulema.style.flexDirection = 'row';
  bulema.style.fontSize = '20px';
  svgEl.style.transform = 'scale(1)';
}

//button.letma.func
bulema.onclick = function redirectToPfp(){
  window.location.href = 'https://www.facebook.com/jerwynnrhys.mula?';
};

//button.letma.exist
home.appendChild(bulema);





//section.pb.create
const pb = document.createElement('section');
pb.id = 'projectBar';

//section.pb.styles
pb.style.background = `transparent`;
pb.style.display = 'flex';
pb.style.flexDirection = 'column';
pb.style.alignItems = 'center';
pb.style.justifyContent = 'center';
pb.style.width = 'calc(100% + 30px)';
pb.style.height = '250px';

//section.pb.exist
body.appendChild(pb);





//h1.pb.create
const hopb = document.createElement('h1');
hopb.id = 'hopb';
hopb.textContent = 'Projects';

//h1.pb.styles
hopb.style.fontWeight = 'bold';
hopb.style.fontSize = '35px';
hopb.style.fontFamily = 'Copperplate, fantasy';
hopb.style.color = 'white';
hopb.style.fontSize = '35px';

//h1.pb.exist
pb.appendChild(hopb);





//cont.pr.create
const copr = document.createElement('div');
copr.id = 'copr';

//cont.pr.styles
copr.style.width = '100%';
copr.style.background = 'rgba(255, 255, 255, 0.08)';
copr.style.backdropFilter = 'blur(35px)';
copr.style.webkitBackdropFilter = 'blur(35px)';
copr.style.border = '1.5px solid rgba(255, 255, 255, 0.1)';
copr.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
copr.style.display = 'flex';
copr.style.flexWrap = 'wrap';
copr.style.alignItems = 'center';
copr.style.justifyContent = 'space-evenly';
copr.style.gap = '10px';
copr.style.paddingTop = '10px';
copr.style.paddingBottom = '10px';
copr.style.paddingLeft = '10px';
copr.style.paddingRight = '10px';

//cont.pr.exist
pb.appendChild(copr);





//contcont.pr1.create
const cocopr1 = document.createElement('button');
cocopr1.id = 'pr1';
cocopr1.textContent = 'LVAccounts';

//contcont.pr1.styles
cocopr1.style.height = '127.5px';
cocopr1.style.background = 'rgba(255, 255, 255, 0.05)';
cocopr1.style.backdropFilter = 'blur(35px)';
cocopr1.style.webkitBackdropFilter = 'blur(35px)';
cocopr1.style.border = '1.5px solid rgba(255, 255, 255, 0.1)';
cocopr1.style.borderRadius = '8px';
cocopr1.style.boxShadow = '4px 4px 6px rgba(0, 0, 0, 0.3)';
cocopr1.style.textDecoration = 'none';
cocopr1.style.color = 'white';
cocopr1.style.fontWeight = 'bold';
cocopr1.style.flexGrow = '1';
cocopr1.style.flexBasis = '200';
cocopr1.style.fontFamily = 'Impact, fantasy';
cocopr1.style.fontSize = '25px';

//contcont.pr1.funtion
cocopr1.onclick = function pr1(){
  window.location.href = 'https://luminousvibeunknown2763.github.io/LuminousVibeAccounts/';
};

//contcont.pr1.exist
copr.appendChild(cocopr1);





//contcont.pr2.create
const cocopr2 = document.createElement('button');
cocopr2.id = 'pr2';
cocopr2.textContent = 'Lumi-Search';

//contcont.pr2.styles
cocopr2.style.height = '127.5px';
cocopr2.style.background = 'rgba(255, 255, 255, 0.05)';
cocopr2.style.backdropFilter = 'blur(35px)';
cocopr2.style.webkitBackdropFilter = 'blur(35px)';
cocopr2.style.border = '1.5px solid rgba(255, 255, 255, 0.1)';
cocopr2.style.borderRadius = '8px';
cocopr2.style.boxShadow = '4px 4px 6px rgba(0, 0, 0, 0.3)';
cocopr2.style.color = 'white';
cocopr2.style.fontWeight = 'bold';
cocopr2.style.flexGrow = '1';
cocopr2.style.flexBasis = '200';
cocopr2.style.fontFamily = 'Impact, fantasy';
cocopr2.style.fontSize = '25px';

//contcont.pr2.funtion
cocopr2.onclick = function pr2(){
  window.location.href = 'https://luminousvibeunknown2763.github.io/Lumi-Search/';
};

//contcont.pr2.exist
copr.appendChild(cocopr2);





//contcont.pr3.create
const cocopr3 = document.createElement('button');
cocopr3.id = 'pr3';
cocopr3.textContent = 'LV (Old ver)';

//contcont.pr3.styles
cocopr3.style.height = '127.5px';
cocopr3.style.background = 'rgba(255, 255, 255, 0.05)';
cocopr3.style.backdropFilter = 'blur(35px)';
cocopr3.style.webkitBackdropFilter = 'blur(35px)';
cocopr3.style.border = '1.5px solid rgba(255, 255, 255, 0.1)';
cocopr3.style.borderRadius = '8px';
cocopr3.style.boxShadow = '4px 4px 6px rgba(0, 0, 0, 0.3)';
cocopr3.style.color = 'white';
cocopr3.style.fontWeight = 'bold';
cocopr3.style.flexGrow = '1';
cocopr3.style.flexBasis = '200';
cocopr3.style.fontFamily = 'Impact, fantasy';
cocopr3.style.fontSize = '25px';

//contcont.pr3.funtion
cocopr3.onclick = function pr3(){
  window.location.href = 'https://luminousvibeunknown2763.github.io/LuminousVibe/';
};

//contcont.pr3.exist
copr.appendChild(cocopr3);





//section.settings.create
const seset = document.createElement('section');
seset.id = 'settings';

//section.settings.styles
seset.style.width = '100%';
seset.style.display = 'flex';
seset.style.flexDirection = 'column';
seset.style.alignItems = 'center';
seset.style.justifyContent = 'space-evenly';
seset.style.gap = '10px';
seset.style.background = 'transparent';

//section.settings.exist
body.appendChild(seset);





//pfp.create
const pfp = document.createElement('div');
pfp.textContent = '?';
pfp.id = 'pfp';

//pfp.styles
pfp.style.borderRadius = '50%';
pfp.style.height = '85px';
pfp.style.width = '85px';
pfp.style.background = `rgba(255, 255, 255, 0.08)`;
pfp.style.display = 'flex';
pfp.style.justifyContent = 'center';
pfp.style.alignItems = 'center';
pfp.style.color = 'white';
pfp.style.fontWeight = 'bold';
pfp.style.fontFamily = 'Copperplate, fantasy';
pfp.style.fontSize = '45px';
pfp.style.textShadow = '3px 3px 3px rgba(0, 0, 0, 0.5)';
pfp.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 0.5)';

//pfp.exist
seset.appendChild(pfp);





//h1.account.create
const hoac = document.createElement('div');
hoac.textContent = 'Account/Settings';
hoac.id = 'hoac';

// h1.account.styles
hoac.style.color = 'white';
hoac.style.fontWeight = 'bold';
hoac.style.fontSize = '35px';
hoac.style.fontFamily = 'Copperplate, fantasy';
hoac.style.fontSize = '35px';

//h1.account.exist
seset.appendChild(hoac);




//cont.settings.create
const coset = document.createElement('div');
coset.id = 'coset';

//cont.settings.styles
coset.style.width = '100%';
coset.style.height = '80px';
coset.style.display = 'flex';
coset.style.flexWrap = 'wrap';
coset.style.alignItems = 'center';
coset.style.justifyContent = 'space-evenly';
coset.style.gap = '10px';
coset.style.paddingTop = '10px';
coset.style.paddingBottom = '10px';
coset.style.paddingLeft = '10px';
coset.style.paddingRight = '10px';
coset.style.background = 'rgba(255, 255, 255, 0.08)';
coset.style.backdropFilter = 'blur(35px)';
coset.style.webkitBackdropFilter = 'blur(35px)';
coset.style.border = '1.5px solid rgba(255, 255, 255, 0.1)';
coset.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
coset.style.borderRadius = '8px';

//cont.settings.exist
seset.appendChild(coset);





//in.username.create
const inus = document.createElement('input');
inus.placeholder = 'Username';
inus.id = 'inus';

//in.username.style
inus.style.color = 'white';
inus.style.fontSize = '10px';
inus.style.outline = 'none';
inus.style.width = '100%';
inus.style.background = 'transparent';
inus.style.border = 'none';
inus.style.borderRadius = '0px'
inus.style.borderBottom = '3px solid white';
inus.style.transition = 'all 0.3s ease';

//in.username.hover
inus.onmouseover = () => {
  inus.style.border = '3px solid #4a90e2';
  inus.style.borderRadius = '8px';
  inus.style.background = 'rgba(0, 0, 0, 0.25)';
  inus.style.fontSize = '15px';
};

inus.onmouseout = () => {
  inus.style.border = 'none';
  inus.style.borderRadius = '0px';
  inus.style.borderBottom = '3px solid white';
  inus.style.background = 'transparent';
  inus.style.fontSize = '10px';
};

//in.username.exist
coset.appendChild(inus);





//in.color1.create
const inco = document.createElement('input');
inco.type = 'color';
inco.id = 'inco';

//in.color1.styles
inco.style.flexBasis = '200';

//in.color1.exist
coset.appendChild(inco);





//in.color2.create
const incs = document.createElement('input');
incs.type = 'color';
incs.id = 'incs';

//in.color2.styles
incs.style.flexBasis = '200';

//in.color2.exist
coset.appendChild(incs);





//button.submitset.create
const bususe = document.createElement('button');
bususe.id = 'bususe';

//button.submitset.styles
bususe.style.color = 'white';
bususe.style.background = 'rgba(255, 255, 255, 0.08)';
bususe.style.border = '1px solid rgba(255, 255, 255, 0.1)';
bususe.style.borderRadius = '8px';
bususe.style.fontSize = '27px';
bususe.style.flexGrow = '1';
bususe.style.maxWidth = '300px';
bususe.style.flexBasis = '200';
bususe.style.fontFamily = 'Copperplate, fantasy';
bususe.style.display = 'flex';
bususe.style.flexDirection = 'row';
bususe.style.alignItems = 'center';
bususe.style.justifyContent = 'center';

//button.submitset.function
bususe.onclick = function submitSet() {

inusv = inus.value;
incov = inco.value;
incsv = incs.value;
incor = hexToRgb(incov);
incsr = hexToRgb(incsv);

stdGra = {
  left: `rgb(${incor.r}, ${incor.g}, ${incor.b})`,
  right: `rgb(${incsr.r}, ${incsr.g}, ${incsr.b})`
}

misGra = {
  left: `rgb(${incor.r - 45}, ${incor.g - 45}, ${incor.b - 45})`,
  right: `rgb(${incsr.r - 45}, ${incsr.g - 45}, ${incsr.b - 45})`
}

body.style.background = `linear-gradient(to right, ${misGra.left}, ${misGra.right})`;
body.style.transition = 'background 0.8s ease';

logo.style.background = `linear-gradient(to right, ${stdGra.left}, ${stdGra.right})`;
logo.style.transition = 'background 0.8s ease';

function hexToRgb(hex) {
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
}

pfp.textContent = inusv[0];

};

//button.submitset.icon
bususe.innerHTML = svgIconCheck + 'Apply Changes';

//button.submitset.exist
coset.appendChild(bususe);
