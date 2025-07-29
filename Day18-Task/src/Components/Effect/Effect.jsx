import React from 'react'
import {useEffect, useState } from 'react'

export default function Effect() {

    console.log("Render Done");

    let [counter,setCounter] = useState(0)
    let [Name,setName] = useState ("Shahd")
    

    // useEffect( () => {
    //     console.log("Mounting Done");
    // }) this is bad because there isn't the array part , will enter infinite loop or times of logging


    useEffect( () => {
        console.log("Mounting From Counter");
    }, [counter])

    useEffect( () => {
        console.log("Mounting From Name");
    }, [Name])

    useEffect( () => {
        if (counter === 0)
            return;
        console.log("Updating Counter");
    }, [counter])

    useEffect( () => {
        if (Name === "Shahd")
            return;
        console.log("Updating Name");
    }, [Name])

    useEffect( () => {
        if (counter === 0 && Name === "Shahd")
            return;
        console.log("Updating");
    }, [counter,Name])

    useEffect( () => {
        return() => {
        console.log("unmounting");
        }
    }, [])


    function show(){
        console.log("Hello fron function");
    }


    function increaseCounter (){
        setCounter (counter+10)
    }

    function changeName (){
        setName ("Sara")
    }

    

return (
    <>
    <div>
        <h3>counter: {counter}</h3>
        <h3>Name: {Name}</h3>
        <button className='btn btn-primary ms-1' onClick={increaseCounter}>Increase Counter {}</button>
        <button className='btn btn-primary ms-2' onClick={changeName}>Change Name</button>

    </div>


    </>
)
}
