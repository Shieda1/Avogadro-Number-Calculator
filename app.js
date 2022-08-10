// https://calculator.swiftutors.com/avogadros-number-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const avogadrosNumberRadio = document.getElementById('avogadrosNumberRadio');
const noofAtomsRadio = document.getElementById('noofAtomsRadio');
const atomicMassRadio = document.getElementById('atomicMassRadio');
const densityRadio = document.getElementById('densityRadio');
const volumeRadio = document.getElementById('volumeRadio');

let avogadrosNumber;
let noofAtoms = v1;
let atomicMass = v2;
let density = v3;
let volume = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

avogadrosNumberRadio.addEventListener('click', function() {
  variable1.textContent = '(Z) No. of Atoms (g/mole)';
  variable2.textContent = '(M) Atomic Mass';
  variable3.textContent = '(D) Density (g/cm³)';
  variable4.textContent = '(F) Volume (cm³)';
  noofAtoms = v1;
  atomicMass = v2;
  density = v3;
  volume = v4;
  result.textContent = '';
});

noofAtomsRadio.addEventListener('click', function() {
  variable1.textContent = '(N) Avogadro\'s Number (mole-1)';
  variable2.textContent = '(M) Atomic Mass';
  variable3.textContent = '(D) Density (g/cm³)';
  variable4.textContent = '(F) Volume (cm³)';
  avogadrosNumber = v1;
  atomicMass = v2;
  density = v3;
  volume = v4;
  result.textContent = '';
});

atomicMassRadio.addEventListener('click', function() {
  variable1.textContent = '(N) Avogadro\'s Number (mole-1)';
  variable2.textContent = '(Z) No. of Atoms (g/mole)';
  variable3.textContent = '(D) Density (g/cm³)';
  variable4.textContent = '(F) Volume (cm³)';
  avogadrosNumber = v1;
  noofAtoms = v2;
  density = v3;
  volume = v4;
  result.textContent = '';
});

densityRadio.addEventListener('click', function() {
  variable1.textContent = '(N) Avogadro\'s Number (mole-1)';
  variable2.textContent = '(Z) No. of Atoms (g/mole)';
  variable3.textContent = '(M) Atomic Mass';
  variable4.textContent = '(F) Volume (cm³)';
  avogadrosNumber = v1;
  noofAtoms = v2;
  atomicMass = v3;
  volume = v4;
  result.textContent = '';
});

volumeRadio.addEventListener('click', function() {
  variable1.textContent = '(N) Avogadro\'s Number (mole-1)';
  variable2.textContent = '(Z) No. of Atoms (g/mole)';
  variable3.textContent = '(M) Atomic Mass';
  variable4.textContent = '(D) Density (g/cm³)';
  avogadrosNumber = v1;
  noofAtoms = v2;
  atomicMass = v3;
  density = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(avogadrosNumberRadio.checked)
    result.textContent = `Avogadro's Number = ${computeAvogadrosNumber().toFixed(2)} mole-1`;

  else if(noofAtomsRadio.checked)
    result.textContent = `No. of Atoms = ${computeNoofAtoms().toFixed(2)} g/mole`;

  else if(atomicMassRadio.checked)
    result.textContent = `Atomic Mass = ${computeAtomicMass().toFixed(2)}`;

  else if(densityRadio.checked)
    result.textContent = `Density = ${computeDensity().toFixed(2)} g/cm³`;

  else if(volumeRadio.checked)
    result.textContent = `Volume = ${computeVolume().toFixed(2)} cm³`;
})

// calculation

function computeAvogadrosNumber() {
  return (Number(noofAtoms.value) * Number(atomicMass.value)) / (Number(density.value) * Number(volume.value));
}

function computeNoofAtoms() {
  return (Number(avogadrosNumber.value) * Number(density.value) * Number(volume.value)) / Number(atomicMass.value);
}

function computeAtomicMass() {
  return (Number(avogadrosNumber.value) * Number(density.value) * Number(volume.value)) / Number(noofAtoms.value);
}

function computeDensity() {
  return (Number(noofAtoms.value) * Number(atomicMass.value)) / (Number(avogadrosNumber.value) * Number(volume.value));
}

function computeVolume() {
  return (Number(noofAtoms.value) * Number(atomicMass.value)) / (Number(avogadrosNumber.value) * Number(density.value));
}