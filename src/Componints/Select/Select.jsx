import { useRef, useEffect, useState} from "react"

import "./Select.css"

function Select () {

  const [open, setOpen] = useState(false)

  const optionRef = useRef()
  const [textContent, setTextContent] = useState("Yaxshi ko'rgan sahobangiz")
  useEffect(() => {
    var element = document.querySelectorAll(".option")

    if(open) {

      element.forEach(e => {
        e.classList.add("open")
      })
    }
    else {

      element.forEach(e => {
        e.classList.remove("open")
      })
    }
  }, [open, textContent])

  return (
    <>
      <div className="container">
        <ul className="select">
          <li onClick={e => setOpen(!open)} className="option open">{textContent}</li>

          <li onClick={e => {
            setOpen(!open)
            setTextContent(e.target.textContent)
          }} className="option close">Abu Bakr as-Siddik r.a</li>

          <li onClick={e => {
            setOpen(!open)
            setTextContent(e.target.textContent)
          }} className="option close">Umar ibn al-Hattob r.a
          </li>

          <li onClick={e => {
            setOpen(!open)
            setTextContent(e.target.textContent)
          }} className="option close">Usmon ibn Affon r.a</li>

          <li onClick={e => {
            setOpen(!open)
            setTextContent(e.target.textContent)
          }} className="option close">Ali ibn Abu Tolib r.a</li>

          <li onClick={e => {
            setOpen(!open)
            setTextContent(e.target.textContent)
          }} className="option close">Talha ibn Ubaydulloh</li>

          <li onClick={e => {
            setOpen(!open)
            setTextContent(e.target.textContent)
          }} className="option close">Said ibn Zayd r.a</li>

          <li onClick={e => {
            setOpen(!open)
            setTextContent(e.target.textContent)
          }} className="option close">Zubayr ibn Avvom r.a</li>

          <li onClick={e => {
            setOpen(!open)
            setTextContent(e.target.textContent)
          }} className="option close">Sa'd ibn Abu Vakkos r.a</li>

          <li onClick={e => {
            setOpen(!open)
            setTextContent(e.target.textContent)
          }} className="option close">Abdurahmon ibn Avf  r.a</li>

          <li onClick={e => {
            setOpen(!open)
            setTextContent(e.target.textContent)
          }} className="option close">Abu Ubayda ibn al-Jarroh r.a</li>
        </ul>
      </div>
    </>
  )
}

export default Select