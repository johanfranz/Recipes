//let age=prompt("edad? ");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
function pepe(age){
    let hour=getRandomInt(0,13);
    if(age<18){
        alert(`no pasa! ${age}`);
    }
    if(age>18){
        if(hour<2){
            payment=prompt("pagueme")
            alert("Welcome, Come in!");
        }
    }
}
//pepe(age);


class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
    }
    install(){
        alert("instalando...! <br>");
    }
    uninstall(){
        alert("desinstalando...! <br>");
    }
    open(){
        alert("open...! <br>");
    }
    close(){
        alert("close...! <br>");
    }
}

app1 = new App(100,5,2000);
app2 = new App(99,4.5,3000);
app3 = new App(96,4,3000);
app4 = new App(92,4.5,3000);
app5 = new App(90,4,3000);

class Materia{
    constructor(nombre, matriculados){
        this.nombre = nombre;
        this.matriculados = matriculados;
    }
    matricular(){
        if((this.matriculados).length > 2){
            alert("Ya hay 20 alumnos en la materia");
        }
        let alumno = prompt("nombre: ");
        this.matriculados.push(alumno);
        return this.matriculados;
    }
    infoMateria(){
        document.write(`Esta es la materia ${this.nombre} que consta de ${(this.matriculados).length} matriculados cuyos alumnos son: ${this.matriculados}<br>`)
    }
}


let h1 = document.getElementById("h1-simple");
console.log(h1);


let h=document.getElementById(".Contenido");
document.write(h+"<br>");
const texto = document.querySelector(".Contenido");
texto.style.backgroundColor = "red";


document.write(`<input class="pichula" type="number" value = "4222" name="">`);

const gettipo = document.querySelector(".pichula");
gettipo.minLength = 4;

const input = document.querySelector("#input");
input.maxLength = 4;
input.required = " ";

const items = document.querySelector(".items");
items.style.backgroundColor = "black";
items.style.color = "white";
const fragmento = document.createDocumentFragment();
for(let i = 0; i<2; i++){
    const item = document.createElement("LI");
    item.innerHTML = `texto pichulon nro ${i}`;
    item.className = `lista${i}`;
    fragmento.appendChild(item);
}
items.appendChild(fragmento);
document.write(items);


const changeHidden = (number) =>{
    document.querySelector(".key-data").value = number;
}
class Llave{
    constructor(modelo, precio, imagen){
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen;
    }
    infoHtml(){
        const llavesContenedor = document.querySelector(".llavesContenedor");
        const llaveImg = document.createElement("img");
        llaveImg.src = `${this.imagen}`;
        llaveImg.className = "llaveImg";
        const llave = document.createElement("DIV");
        llave.addEventListener("click", ()=>{changeHidden(this.modelo)});
        llave.tabIndex = this.modelo;
        llave.className = `flex-item`;
        //llave.innerHTML = `<img class="img${this.modelo} src=${this.imagen}>`
        
        llave.innerHTML = `${this.modelo}<br>${this.precio}<br>`;
        llave.appendChild(llaveImg);
        llavesContenedor.appendChild(llave);

        //document.write(llavesContenedor);
    }
}
/*
llave1 = new Llave(1,"22$","descarga.jpg");
llave1.infoHtml();

llave3 = new Llave(2,"22$","descarga.jpg");
llave3.infoHtml();
llave4 = new Llave(3,"22$","descarga.jpg");
llave4.infoHtml();
llave5 = new Llave(4,"22$","descarga.jpg");
llave5.infoHtml();
llave6 = new Llave(5,"22$","descarga.jpg");
llave6.infoHtml();
*/

let p;
for(let k; k<10; k++){
    p.push(new Llave(k+10,"22$","descarga.jpg"))
    p[k].infoHtml();
}



