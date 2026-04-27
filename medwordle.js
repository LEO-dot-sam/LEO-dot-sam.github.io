
function getStats(){
return JSON.parse(localStorage.getItem("stats")||"{}");
}

function saveStats(s){
localStorage.setItem("stats",JSON.stringify(s));
}

function renderHeatmap(){
const grid=document.getElementById("heatmapGrid");
grid.innerHTML="";
const stats=getStats();
const days=stats.days||{};
const today=new Date();

for(let i=27;i>=0;i--){
let d=new Date();
d.setDate(today.getDate()-i);
let key=d.toISOString().slice(0,10);

let cell=document.createElement("div");
cell.className="heatmap-cell";

if(days[key]) cell.classList.add("active");

grid.appendChild(cell);
}
}

function openStats(){
document.getElementById("statsModal").classList.remove("hidden");
renderHeatmap();
}

function closeStats(){
document.getElementById("statsModal").classList.add("hidden");
}

document.getElementById("statsBtn").onclick=openStats;

// example pearl
function getPearl(){
return "STEMI: Immediate PCI within 90 minutes (ACC/AHA). Consider dual antiplatelet therapy (aspirin + ticagrelor). Supported by DANAMI-2 trial.";
}
