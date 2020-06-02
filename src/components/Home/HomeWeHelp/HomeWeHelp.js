import React, {useEffect, useState, useContext } from 'react';
import './HomeWeHelp.scss'
import { FirebaseContext } from "../../Firebase";

const HomeWeHelp = () => {


    const firebase = useContext(FirebaseContext)
    const [foundations, setFoundations] = useState([])

    useEffect( ()=>{
        firebase.app.firestore()
            .collection('fundacje')
            .onSnapshot( querySnapshot =>{
                const elements = [];
                querySnapshot.forEach(el => elements.push({id: el.id, ...el.data() }))
                console.log(elements);
                setFoundations(elements)
                console.log(foundations);
            } )
    }, [] )

    return(
        <div className="homeWeHelp" id="homeWeHelp">

            {/*<ul>
                {elements.map(el =>
                <li key = {el.id}>
                    {el.name} <br /> {el.descr} <br/> {el.items}
                </li>)
                }
            </ul>*/}
            <p>homeWeHelp</p>
        </div>

    )

}
export default HomeWeHelp;