'use client'

import {  Input, ListItem, UnorderedList } from "@chakra-ui/react"
import Button from "../componets/button"
import { useState } from "react"

const TODO = () => {

    const [value,setValue] =useState("")
    const [todos, setTodos] =useState<string[]>([])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleclick = () =>{
        setTodos([...todos,value])
    }


    return (
    <div className="h-screen flex flex-col items-center">
        <h1>TODO</h1>
        <Input value={value}onChange={handleChange}/>
        <Button onClick={handleclick}>追加</Button>
        <UnorderedList>
        {todos.map((todo) =>(
        <ListItem key={todo}>{todo}</ListItem>
        ))}
 </UnorderedList>
    </div>
    )
}


export default TODO


