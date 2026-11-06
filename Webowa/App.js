import { useState } from 'react';
import './App.css';
function App() {
  const [kwiaty, setKwiaty] = useState(true)
  const [zwierzeta, setZwierzeta] = useState(true)
  const [samochod, setSamochod] = useState(true)
  const [dane,setDane] = useState([
    {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}
  ])

  const widoczneZdjecie =
    dane.filter((data)=>{
      return (
        data.category === 1 && kwiaty || data.category === 2 && zwierzeta || data.category === 3 && samochod
      )
    })
  

  return (
    <div className="container-fluid">
        <h1>Kategorie zdjęć</h1>
      <div className='gap-3 boxy'>
        <div className="form-check form-switch">
            <input className="form-check-input" type='checkbox' checked={kwiaty} onChange={(e) => setKwiaty(e.target.checked)} /><label className="form-check-label">Kwiaty</label>
        </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type='checkbox' checked={zwierzeta} onChange={(e) => setZwierzeta(e.target.checked)} /><label className="form-check-label">Zwierzeta</label>
         </div> 
          <div className="form-check form-switch">
            <input className="form-check-input" type='checkbox' checked={samochod} onChange={(e) => setSamochod(e.target.checked)} /><label className="form-check-label">Samochod</label>
        </div>
      </div>
      <div className='div_zdjecia'>
        {widoczneZdjecie.map((data)=>(
        <div key={data.id} className='col-md-4'>
          <img src={"/assets/" + data.filename} alt={data.alt} className="img-fluid rounded m-1"/>
          <h4>Pobrań: {data.downloads}</h4>
          <button onClick={()=>{
            data.downloads++
            setDane([...dane])
          }} className='btn btn-success'>Pobierz</button>
        </div>
        ))}
        </div>
    </div>
  );
}

export default App;
