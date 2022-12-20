import React, {useEffect} from 'react'
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/juniorplus',
}

 function Pages() {
    const navigate = useNavigate()
    const location = useLocation()

     useEffect(() => {
         if (location.pathname === '/') {
             navigate(PATH.PRE_JUNIOR)
         }
     }, [location.pathname])
     console.log(location.pathname)
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                <Route path = {'/'} element={<PreJunior/>}/>

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                <Route path = {PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path = {PATH.JUNIOR} element={<Junior/>}/>
                <Route path = {PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route path = {'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
