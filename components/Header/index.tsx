import Logo from '../../assets/Logo.svg'
import Image from 'next/image'
import './style.scss'

export function Header() {
    return (
        <div className='header'>
            <Image src={Logo} alt="Logo"></Image>
        </div>
    )
}