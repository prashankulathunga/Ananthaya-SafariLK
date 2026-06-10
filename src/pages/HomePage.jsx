import { HeroBanner } from '../components/HeroBanner'
import { NavBar } from '../components/NavBar'
import { Package } from '../components/Package'

export const HomePage = ()=>{
    return (
        <div>
            <NavBar/>
            <HeroBanner/>
            <Package/>
        </div>
    )
}
