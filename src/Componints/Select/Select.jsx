import { useRef, useEffect, useState} from "react"

import "./Select.css"

function Select () {

  const [open, setOpen] = useState(false)

  const optionRef = useRef()

  useEffect(() => {

    if(open) {
      var element = document.querySelectorAll(".option")
      console.log(element.classList.add("close"));

    }
    else {
      console.log(open);
    }
  }, [open])

  return (
    <>
      <ul className="select">
        <li onClick={e => setOpen(!open)} className="option ">Ko'ksulton</li>
        <li className="option close">Olcha</li>
        <li ref={optionRef} className="option close">Xurmo</li>
        <li className="option close">Shaftoli</li>
        <li className="option close">Olma</li>
        <li className="option close">Behi</li>
        <li className="option close">Uzum</li>
      </ul>

      <br/>
      <br/>

      <select name="" id="">
        <option value="">Ali</option>
        <option value="">Abdurahmon</option>
        <option value="">Abdulloh</option>
        <option value="">Xamza</option>
      </select>
    </>
  )
}

export default Select