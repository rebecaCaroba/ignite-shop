'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './style.scss'
import camisetas from '../../assets/camiseta.png'
import Image from 'next/image'

interface SliderProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string | null
  }[]
}

export function Slider({ products }: SliderProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    }
  })

  return (
    <div className='homeContainer keen-slider' ref={sliderRef}>
      {products.map(product => (
        <div key={product.id} className='product keen-slider__slide'>
          <a href="">
            <Image src={product.imageUrl} alt='camisetas' width={520} height={480} />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </a>
        </div>
      ))}
    </div>
  );
}
