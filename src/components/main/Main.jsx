import React from 'react'
import Card from '../card/Card.jsx'
import Info from '../info/Info.jsx'


const Main = () => {
    return (
        <div className=' h-[100vh] relative items-center justify-between flex w-full ite '>
            <Card className="" />
            <Info className=' block medium:hidden ' />
        </div>
    )
}

export default Main