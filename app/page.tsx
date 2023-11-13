import './style.scss'

import camisetas from '../assets/camiseta.png'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='homeContainer'>
      <a className='product' href="">
        <Image src={camisetas} alt='camisetas' width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,99</span>
        </footer>
      </a>
      <a className='product' href="">
        <Image src={camisetas} alt='camisetas' width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,99</span>
        </footer>
      </a>
    </div>
  )
}
