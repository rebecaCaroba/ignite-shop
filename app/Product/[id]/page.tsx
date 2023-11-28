import Image from 'next/image'
import './style.scss'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
interface ProductProps {
  params: {
    id: string
  }
  
}

export const revalidate = 7200

export default async function Productoone({ params }: ProductProps) {
    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
      expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price

    const priceValue = price.unit_amount
    ? new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100)
    : null

    return (
      <main className="product-container">
        <div className="img-container">
        <Image src={product.images[0]} alt='camisetas' width={520} height={480} />
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <span>{priceValue}</span>
          <p>
            {product.description}
          </p>
          <button>
            Comprar agora
          </button>
        </div>
      </main>
    )
  }