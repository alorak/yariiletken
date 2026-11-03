/* Pure models for Lesson 04. No actual Si band structure or DFT is implied. */
(() => {
"use strict";
const EV=1.602176634e-19, HB=1.054571817e-34, ME=9.1093837139e-31;
const finite=(...xs)=>xs.every(Number.isFinite);
function states(N){
  if(!Number.isInteger(N)||N<1||N>200)throw new RangeError("N");
  return {shells:[2*N,2*N,6*N,2*N,6*N],occupied:[2*N,2*N,6*N,2*N,2*N],
    totalStates:18*N,totalElectrons:14*N,valenceStates:8*N,valenceElectrons:4*N,
    valenceBand:4*N,conductionBand:4*N};
}
function oscillator(j,N,r){
  if(!Number.isInteger(N)||N<2||N>200||!Number.isInteger(j)||j<0||j>=N||!finite(r)||r<0)throw new RangeError("mode");
  return Math.sqrt(1+2*r*(1-Math.cos(j*Math.PI/N)));
}
function density(E,W,nAtom=5e22){
  if(!finite(E,W,nAtom)||W<=0||nAtom<=0)throw new RangeError("DOS");
  if(E< -W||E>0)return 0;
  const u=(E+W)/W;
  return 4*nAtom*6*u*(1-u)/W;
}
function densityArea(W,nAtom=5e22){
  if(!finite(W,nAtom)||W<=0||nAtom<=0)throw new RangeError("DOS");
  return 4*nAtom; // integral of the illustrative 6u(1-u) distribution.
}
function energy(k,t){
  if(!finite(k,t)||t<=0)throw new RangeError("tight binding");
  return -2*t*Math.cos(k);
}
function mass(t,aNm){
  if(!finite(t,aNm)||t<=0||aNm<=0)throw new RangeError("mass");
  return HB*HB/(2*t*EV*(aNm*1e-9)**2*ME); // m*/m_e in a 1D parabola at ka=0.
}
function edges(chi=4.05,Eg=1.12,W=12){
  if(!finite(chi,Eg,W)||Math.min(chi,Eg,W)<=0)throw new RangeError("edges");
  return {E0:0,Ec:-chi,Ev:-(chi+Eg),Eb:-(chi+Eg+W),chi,Eg,W,escapeValence:chi+Eg};
}
function event(mode,E,state="none",Eg=1.12,chi=4.05){
  if(!Number.isInteger(mode)||mode<0||mode>5||!finite(E,Eg,chi)||E<0||Eg<=0||chi<=0||
    !["none","pair","hole"].includes(state))throw new RangeError("transition");
  // 0 generate; 1 recombine; 2 electron kinetic; 3 hole kinetic;
  // 4 conduction electron escapes; 5 valence electron escapes.
  const threshold=[Eg,0,0,0,chi,chi+Eg][mode];
  const stateOk=(mode===0||mode===5)?state==="none":state==="pair";
  const energyOk=E+1e-12>=threshold;
  const allowed=stateOk&&energyOk;
  const next=!allowed?state:mode===0?"pair":mode===1?"none":mode>=4?"hole":"pair";
  return {allowed,stateOk,energyOk,threshold,next};
}
function graph(kind,p,lang="tr"){
  const english=lang==="en";
  if(kind==="counts"){
    const N=p.N,s=states(N);
    return {xMin:1,xMax:20,yMin:0,yMax:160,xTicks:[1,5,10,15,20],
      xLabel:english?"Number of atoms N":"Atom sayısı N",
      yLabel:english?"Spin states / electrons":"Spin durumları / elektronlar",marker:N,
      curves:[{label:"3s · 2N",f:x=>2*x},{label:"3p · 6N",f:x=>6*x},
        {label:"3s + 3p · 8N",f:x=>8*x},{label:"4N e⁻",f:x=>4*x}],
      info:[["1s, 2s",2*N+" / "+2*N],["2p, 3p",6*N+" / "+6*N],
        ["8N",s.valenceStates+" "+(english?"states":"durum")],
        ["4N",s.valenceElectrons+" e⁻"],["1s–3p",s.totalStates+" / "+s.totalElectrons]]};
  }
  if(kind==="modes"){
    const r=p.r,small=[0,1,2].map(j=>({label:"N=3, j="+j,f:x=>oscillator(j,3,x)}));
    const big=Array.from({length:20},(_,j)=>({label:"N=20, j="+j,ghost:true,f:x=>oscillator(j,20,x)}));
    return {xMin:0,xMax:2,yMin:1,yMax:3.2,marker:r,
      xLabel:"kᶜ/k",yLabel:"ω/ω₀",curves:[...big,...small],
      info:[["N=3, ω/ω₀",small.map((_,j)=>oscillator(j,3,r).toFixed(3)).join(" · ")],
        ["N=20, max",oscillator(19,20,r).toFixed(3)],
        [english?"Width N=3":"Genişlik N=3",(oscillator(2,3,r)-1).toFixed(3)+" ω₀"],
        [english?"Width N=20":"Genişlik N=20",(oscillator(19,20,r)-1).toFixed(3)+" ω₀"]]};
  }
  if(kind==="dos"){
    const W=p.W,nAtom=p.nAtom*1e22;
    return {xMin:-16,xMax:0,yMin:0,yMax:8,marker:-W/2,
      xLabel:english?"E − Eᵛ (eV)":"E − Eᵛ (eV)",
      yLabel:"N(E) (×10²² cm⁻³ eV⁻¹)",
      curves:[{label:"N(E)",f:x=>density(x,W,nAtom)/1e22}],
      info:[[english?"Valence width":"Valans genişliği",W.toFixed(1)+" eV"],
        [english?"Si atom density":"Si atom yoğunluğu",p.nAtom.toFixed(1)+"×10²² cm⁻³"],
        ["∫N(E)dE",(densityArea(W,nAtom)/1e23).toFixed(2)+"×10²³ cm⁻³"],
        ["N(Eᵛ−W/2)",(density(-W/2,W,nAtom)/1e22).toFixed(2)+"×10²² cm⁻³eV⁻¹"]]};
  }
  if(kind==="dispersion"){
    return {xMin:-Math.PI,xMax:Math.PI,yMin:-2.5,yMax:2.5,marker:p.ka,
      xLabel:"ka (rad)",yLabel:english?"E(k) (eV)":"E(k) (eV)",
      curves:[{label:"E(k)=−2t cos(ka)",f:k=>energy(k,p.t)}],
      info:[["t",p.t.toFixed(2)+" eV"],["a",p.a.toFixed(2)+" nm"],
        ["E(ka)",energy(p.ka,p.t).toFixed(3)+" eV"],
        [english?"Band-edge m*":"Bant kenarı m*",mass(p.t,p.a).toFixed(3)+" mₑ"],
        [english?"Bandwidth":"Bant genişliği",(4*p.t).toFixed(2)+" eV"]]};
  }
  throw new RangeError("graph");
}
window.BandTheory04Model={states,oscillator,density,densityArea,energy,mass,edges,event,graph};
})();
