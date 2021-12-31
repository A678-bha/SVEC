import React ,{useState} from 'react'

export default function StateInFunctionalComponent() {
    let [name,updateName]=useState("bhargavi");
    return (
        <div>
            <h1 onMouseOver={()=>{updateName("bhargavi s")}}
            onmouseleave={()=>{updateName("bhargavi")}}>
                {name}
                </h1>
        </div>
    )
}
