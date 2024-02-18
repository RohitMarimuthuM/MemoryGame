import { useState } from 'react'
import Cards from './Cards.js'

function App(){
    const [items, setItems] = useState([
        { id: 1, img: 'https://img.freepik.com/free-vector/hand-drawn-eyeball-cartoon-illustration_23-2150850778.jpg?w=740&t=st=1708001488~exp=1708002088~hmac=cbe2c02b0fe4bb8409c514ab82181d87f48fd2bf273bbe5a358102bb81453441', stat: "" },
        { id: 1, img: 'https://img.freepik.com/free-vector/hand-drawn-eyeball-cartoon-illustration_23-2150850778.jpg?w=740&t=st=1708001488~exp=1708002088~hmac=cbe2c02b0fe4bb8409c514ab82181d87f48fd2bf273bbe5a358102bb81453441', stat: "" },
        { id: 2, img: 'https://img.freepik.com/free-vector/angry-chicken-cartoon-character-standing-vector-illustration_1308-160317.jpg?w=360&t=st=1708002484~exp=1708003084~hmac=3c726112d4769e755cc15d44f9f4504d56d04058eec84cf47e3672b4a3053ca0', stat: "" },
        { id: 2, img: 'https://img.freepik.com/free-vector/angry-chicken-cartoon-character-standing-vector-illustration_1308-160317.jpg?w=360&t=st=1708002484~exp=1708003084~hmac=3c726112d4769e755cc15d44f9f4504d56d04058eec84cf47e3672b4a3053ca0', stat: "" },
        { id: 3, img: 'https://img.freepik.com/free-photo/cute-bird-with-big-eyes-isolated-white-background-3d-illustration_1142-36760.jpg?w=740&t=st=1708002521~exp=1708003121~hmac=c5e766aadab4542c329333782666bcee91210e4bb27eb41b31ba1e65d3168128', stat: "" },
        { id: 3, img: 'https://img.freepik.com/free-photo/cute-bird-with-big-eyes-isolated-white-background-3d-illustration_1142-36760.jpg?w=740&t=st=1708002521~exp=1708003121~hmac=c5e766aadab4542c329333782666bcee91210e4bb27eb41b31ba1e65d3168128', stat: "" },
        { id: 4, img: 'https://img.freepik.com/free-vector/happy-little-boy-mummy-costume_74855-745.jpg?w=740&t=st=1708002595~exp=1708003195~hmac=9e938a38ea8fcfb81494bc1c782526e3f11dce10f7a1ad443c179960d1d0bee5', stat: "" },
        { id: 4, img: 'https://img.freepik.com/free-vector/happy-little-boy-mummy-costume_74855-745.jpg?w=740&t=st=1708002595~exp=1708003195~hmac=9e938a38ea8fcfb81494bc1c782526e3f11dce10f7a1ad443c179960d1d0bee5', stat: "" },
        { id: 5, img: 'https://img.freepik.com/premium-vector/speech-bubble-cartoon-doing-wave-hand-gesture_309278-9534.jpg?w=740', stat: "" },
        { id: 5, img: 'https://img.freepik.com/premium-vector/speech-bubble-cartoon-doing-wave-hand-gesture_309278-9534.jpg?w=740', stat: "" },
        { id: 6, img: 'https://img.freepik.com/premium-photo/white-rabbit-with-white-face-ears-its-head_14117-9472.jpg?w=1380', stat: "" },
        { id: 6, img: 'https://img.freepik.com/premium-photo/white-rabbit-with-white-face-ears-its-head_14117-9472.jpg?w=1380', stat: "" },
       
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Cards key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}

export default App