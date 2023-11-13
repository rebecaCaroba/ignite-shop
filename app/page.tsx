'use client'

import './style.scss'
import { useKeenSlider } from 'keen-slider/react'
import camisetas from '../assets/camiseta.png'
import Image from 'next/image'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [ sliderRef ]  = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })
  
  return (
    <div className='homeContainer keen-slider' ref={sliderRef}>
      <a className='product keen-slider__slide' href="">
        <Image src={camisetas} alt='camisetas' width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,99</span>
        </footer>
      </a>
      <a className='product keen-slider__slide' href="">
        <Image src={camisetas} alt='camisetas' width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,99</span>
        </footer>
      </a>
      <a className='product keen-slider__slide' href="">
        <Image src={camisetas} alt='camisetas' width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,99</span>
        </footer>
      </a>
      <a className='product keen-slider__slide' href="">
        <Image src={camisetas} alt='camisetas' width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,99</span>
        </footer>
      </a>
    </div>
  )
}
