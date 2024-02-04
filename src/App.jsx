import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
const[length,setlength] = useState(6);
const[numberAllowled,setnumberAllowled] = useState(false);
const[charAllowled,setcharAllowled] = useState(false);

const[password,setpaaword] = useState("");

const passwordRef = useRef(null);


const passwordGenerator = useCallback( () => {
    let pass ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowled) str += "0123456789";
    if(charAllowled) str += "!?/~{}[]().,";

    for(let i=1;i<=length;i++){
        let char = (Math.floor(Math.random()*str.length + 1))
    
    pass += str.charAt(char);
    }
    setpaaword(pass);},
    [length,numberAllowled,charAllowled,setpaaword])

    useEffect(() => {
        passwordGenerator()
    },[length,passwordGenerator,numberAllowled,charAllowled])

    const copyPasword = useCallback(() => {
      passwordRef.current?.select();
       window.navigator.clipboard.writeText(password);
    },[password])

  return (
    <>
    <div id='warraper'> 
    <div className='container '>
          <h1 className='text-4xl text-centre'>Password Generator</h1>
          <div className='display'>
                <input type='text' placeholder='password' value={password} ref={passwordRef}/>
                <button className='copy' onClick={copyPasword}>Copy</button>
                
          </div>
          <div className='data'>
           <div className='rangee'>
             <input type='range' min={6} max={20} readOnly value={length}
              onChange={(e) => {setlength(e.target.value)}}></input>
              <label>length:{length}</label>
            </div>
           
           <div className='checkBoxx'>
                  <input type='checkbox' defaultChecked={numberAllowled} id='numberId'
                  onChange={() =>{setnumberAllowled((prev) => !prev); }}></input>
                  <label>Number</label>
           </div>

           <div className='checkBoxx1'>
                  <input type='checkbox' defaultChecked={charAllowled} id='charId'
                  onChange={() =>{setcharAllowled((prev) => !prev); }}></input>
                  <label>Charater</label>
           </div>


          </div>
    </div>
    </div>
    </>
  )
}

export default App
