const h2 = document.querySelector('h2');
const input1 = document.querySelector('#calculo1');
const btn = document.querySelector('#btnCalcular');
const parrafo1 = document.createElement('p');
const parrafo2 = document.createElement('p');
const parrafo3 = document.createElement('p');
const parrafo4 = document.createElement('p'); 
const parrafo5 = document.createElement('p');
const parrafo6 = document.createElement('p');
const parrafo7 = document.createElement('p'); 
const mostrarParent = document.querySelector('.MostrarCalculos'); 



btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    const PesoPlanetaTierra = parseFloat(input1.value);
    const PesoVenus = PesoPlanetaTierra * 0.78;
    const PesoMercurio = PesoPlanetaTierra * 0.38;
    const PesoMarte = PesoPlanetaTierra * 0.39; 
    const PesoJupiter = PesoPlanetaTierra * 2.65;
    const PesoSaturno = PesoPlanetaTierra * 1.17;
    const PesoUrano = PesoPlanetaTierra * 1.05;
    const PesoNeptuno = PesoPlanetaTierra * 1.23;
    h2.innerHTML = 'El Peso en otros planetas es :';
    mostrarParent.append(parrafo1,parrafo2,parrafo3,parrafo4,parrafo5,parrafo6,parrafo7);
    parrafo1.innerHTML = 'Venus : ' + PesoVenus + 'kg';
    parrafo2.innerHTML = 'Mercurio : ' + PesoMercurio + 'kg';
    parrafo3.innerHTML = 'Marte : ' + PesoMarte + 'kg';
    parrafo4.innerHTML = 'Jupiter : ' + PesoJupiter + 'kg';
    parrafo5.innerHTML = 'Saturno : ' + PesoSaturno + 'kg';
    parrafo6.innerHTML = 'Urano : ' + PesoUrano + 'kg';
    parrafo7.innerHTML = 'Neptuno : ' + PesoNeptuno + 'kg';
}