const h2 = document.querySelector('h2');
const input1 = document.querySelector('#calculo1');
const btn = document.querySelector('#btnCalcular');

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
}