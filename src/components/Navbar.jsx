//importação de CSS
import '../index.css'

//importação dos SVGs como ReactComponents
import Home from '../assets/nav/nav-home.svg?react'
import Dm from '../assets/nav/nav-dm.svg?react'
import Post from '../assets/nav/nav-post.svg?react'
import Search from '../assets/nav/nav-search.svg?react'
import Profile from '../assets/nav/nav-profile.svg?react'

//Navbar
function Navbar() {
    return (

        
        <nav className=' bg-fundo fixed 
        bottom-0 sm:top-0 sm:left-0 flex justify-between sm:flex-col
        px-1 w-screen sm:w-[400px]'>

            <div className='flex w-full h-16 items-center justify-around border-t-2 border-discreto px-1 sm:flex-col'>
                <a className='nav'>
                    <Home /> <p className='hidden sm:flex'> Início</p>
                </a>
                <a className='nav'>
                    <Dm />
                </a>
                <a className='nav'>
                    <Post />
                </a>
                <a className='nav'>
                    <Search />
                </a>
                <a className='nav'>
                    <Profile />
                </a>
            </div>
        </nav>
    )
}

export default Navbar