import React from 'react'
import DashboardHeader from './DashboardHeader'
import OverAllReport from './OverAllReport'
import DashboardTables from './DashboardTables'
import InsertProduct from './InsertProduct'

function MainInsertSection({setShowText , showText}: {setShowText: any , showText:boolean}) {
  return (
    <div className=' w-full flex flex-col '>
        <DashboardHeader setShowText={setShowText} showText={showText} />
        <InsertProduct/>
    </div>
  )
}

export default MainInsertSection