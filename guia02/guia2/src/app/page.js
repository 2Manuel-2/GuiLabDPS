/*import styles from "./page.module.css"; const Equipos = ({ equipos }) => { return (
<div className={styles.container__list}>
 <h2 className={styles.title}>Equipos de Fútbol</h2>
 {equipos.map((equipo) => (
 <div key={equipo.id}>
 <h3 className={styles.nameclub}>{equipo.nombre}</h3>
 <ul >
 {equipo.plantilla.map((jugador) => (
 <li className={styles.container__list} key={jugador.id}>
  <img className={styles.imgJugador} src={jugador.foto}></img>

 <strong>{jugador.nombre}</strong>
 <p>Altura: {jugador.Altura}m <br></br> Peso:
{jugador.Peso}Kg</p>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
);
}; 


export default function Home() {
 // Simula la obtención de datos desde tu JSON 
 const equiposData = [
 {"id" : 1, "nombre": "Real Madrid", "plantilla":[{"id": 1,"nombre":"Eden Hazard","Altura":"1.75","Peso":"74Kg", "foto" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTGL272YLf2In89QT9Oi3JU0DoyX0sxp-gAoohWqAJMgt1uPL6ZkB-BfUWrU6ye4Exik&usqp=CAU"},
 {"id": 2,"nombre":"Gonzalo García","Altura":"1.82","Peso":"74Kg", "foto" : "https://www.zerozero.pt/img/jogadores/42/896942_20231104152455_gonzalo.jpg"}, 
 {"id": 3,"nombre":"Karim Benzema","Altura":"1.85","Peso":"81Kg", "foto" : "https://thumbs.dreamstime.com/b/karim-benzema-de-real-madrid-48817696.jpg"}
 ]},

 {"id": 2, "nombre": "Barcelona", "plantilla":[{"id": 1,"nombre":"Marc-André ter Stegen","Altura":"1.75","Peso":"74Kg", "foto" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIu8hIgxYvRz0S8ry3euKhNdK4USfobHkQw&s  "},
 {"id": 2,"nombre":"Iñigo Martinez","Altura":"1.82","Peso":"74Kg", "foto" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWTRtERuosQElN9FUefFAuBjvCKcha3yMhQ&s"},
 {"id": 3,"nombre":"Gavi","Altura":"1.85","Peso":"81Kg", "foto" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJFSeYHzA9RdJUjwxsnSH97yYrCDJrL0uQg&s"}
 ]}
 // ... agregar otros equipos

 ];
 return (
  <main className={styles.main}>
<div>
 <h1>Mi Aplicación de Fútbol</h1>
 <Equipos equipos={equiposData} />
 </div>
 </main>
);

}
*/




"use client";
import { useState } from "react"; import styles from "./page.module.css";

export default function Home() { const [numero1, setNumero1] = useState(''); const [numero2, setNumero2]
= useState(''); const [resultado, setResultado] = useState(null);

const sumar = () => {
 const resultadoSuma = parseFloat(numero1) + parseFloat(numero2); setResultado(`Resultado de la suma:
${resultadoSuma}`);
};
const restar = () => {
 const resultadoResta = parseFloat(numero1) - parseFloat(numero2); setResultado(`Resultado de la resta:
${resultadoResta}`);
};

const multiplicar = () => {
 const resultadomultiplicacion = parseFloat(numero1) * parseFloat(numero2); setResultado(`Resultado de la multiplicación:
${resultadomultiplicacion}`);
};

const dividir = () => {
 const resultadoDividir = parseFloat(numero1) / parseFloat(numero2); setResultado(`Resultado de la División:
${resultadoDividir}`);
};

 return ( <main className={styles.main}>
 <div className={styles.calculadora}>
 <div className={styles.numeros}>
 <label className={styles.text}>Número 1:</label> <input className={styles.inputnum}
type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
 </div>
 <div className={styles.numeros}>
 <label className={styles.text} >Número 2:</label> <input
className={styles.inputnum} type="number" value={numero2} onChange={(e) =>
setNumero2(e.target.value)} />
 </div>
 <div>
 <button className={styles.button} onClick={sumar}>+</button>
 <button className={styles.button} onClick={restar}>-</button>
  <button className={styles.button} onClick={multiplicar}>x</button>
 <button className={styles.button} onClick={dividir}>/</button>
 </div>
 {resultado && <div
className={styles.resultado}>{resultado}</div>}
 </div>
 </main>
);
} 
 

