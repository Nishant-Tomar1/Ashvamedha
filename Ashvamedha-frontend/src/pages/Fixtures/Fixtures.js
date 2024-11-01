import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { fixtures } from '../../constants'
import { useParams } from 'react-router-dom'
import FixtureCard1 from '../../components/FixtureCard/FixtureCard1'
import FixtureCard2 from '../../components/FixtureCard/FixtureCard2'
import "./Fixtures.scss"

function Fixtures() {
  const type2 = ["athletics", "gym", "bgmi"]
  const params = useParams()
  const [type, setType] = useState();
  useEffect(()=>{
    setType(type2.includes(params.sportname) ? 2 : 1);
  })
  const day = () => {
    const date = new Date();
    return "day"+(date.getDate()).toString()
  }
  
  return (
    <div>
        <Navbar/>
        <div className='fixtures'>
        {fixtures?.[day()][params.sportname]?.length ?<>
          <h1>{ params.sportname.toUpperCase()} FIXTURES</h1>
            {fixtures[day()][params.sportname].map(( item, index) => {
              if(type === 1) { return <FixtureCard1 key={index} match={item}/>}
              else return <FixtureCard2 key={index} match={item}/>
            }
            )}
            </>
          :
          <h1>No Fixtures available for today</h1>
         }
        </div>
        <Footer/>
    </div>
  )
}

export default Fixtures
