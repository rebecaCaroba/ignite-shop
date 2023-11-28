import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { Slider } from '@/components/Slider'

export const revalidate = 7200

export default async function Home() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price?.unit_amount
        ? new Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100)
        : null,
    }
  })

  return (
    <>
      <Slider products={products} />
    </>
  )
}
