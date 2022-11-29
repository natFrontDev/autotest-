import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
import User from "../hw08/User";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name:string)=>void // need to fix any
}

export const pureAddUser = (name: string, setError: (value: string) => void, setName: (value: string) => void, addUserCallback: (name: string) => void ) => {// если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (name && !/^\s*$/.test(name)){
        addUserCallback(name)
        setName("")
    } else
    {setError ("Ошибка! Введите имя!")}
}

export const pureOnBlur = (name: string, setError: (value: string) => void) => {
    if (!name || /^\s*$/.test(name)) {
        setError ("Ошибка! Введите имя!")
    }
}// если имя пустое - показать ошибку


export const pureOnEnter = (event:KeyboardEvent<HTMLInputElement>, addUser:()=>void) => {
    if (event.key === "Enter") {
     addUser()}}
 // если нажата кнопка Enter - добавить

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(event.currentTarget.value) // need to fix
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users[users.length-1]?.name // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
