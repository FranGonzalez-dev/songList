import logo from '/logo-caf.svg'
import { Link, useLocation } from 'react-router-dom'
import { Button, DarkModeButton } from '../../components';
import { useAppContext } from '../../context';


export function Header () {

    
    const { user, removeUser } = useAppContext();

    let location = useLocation();

    
    return (
        <header className='w-full border-b-2 border-gray-100 dark:border-transparent transition ease-in-out duration-300'>
            <div className="flex flex-row items-center justify-between container max-w-screen-xl px-4 mx-auto rounded">
                <Link to='/' className='flex flex-row items-center justify-center gap-4 py-1'>
                    <img src={logo} alt="" />
                    <span className='font-semibold text-gray-900 dark:text-gray-100 capitalize'>
                        { user.isLoggedIn ? user.username : 'Ensayos' }
                    </span>
                </Link>
                <nav className="flex flex-row gap-4 items-center">
                    {
                        location.pathname !== '/login' ?
                            <Button 
                                text={ user.isLoggedIn ? 'Log Out' : 'Log In' }
                                bg='bg-blue-500' 
                                hoverBg = 'hover:bg-blue-600'
                                icon= { user.isLoggedIn ? 'logout-box-line' : 'login-box-line' }
                                link='/login'
                                textColor='text-white'
                                action={ removeUser }
                            />
                        : null
                    }
                    <DarkModeButton />
                </nav>
            </div>
        </header>
    )
}