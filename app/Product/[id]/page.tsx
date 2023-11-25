import Image from 'next/image'
import './style.scss'
import camiseta from '../../../assets/camisaVtex.png'
interface ProductProps {
  params: {
    id: string
  }
}

export default function Productoone({ params }: ProductProps) {
    return (
      <main className="product-container">
        <div className="img-container">
        <Image src={camiseta} alt='camisetas' width={520} height={480} />
        </div>
        <div className="product-details">
          <h1>Camiseta x</h1>
          <span>R$ 99,90</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio provident porro ut fugit impedit recusandae asperiores corrupti, libero quibusdam sed cum harum accusantium cumque unde aperiam dolore eaque soluta. Voluptatum?
          </p>
          <button>
            Comprar agora
          </button>
        </div>
      </main>
    )
  }