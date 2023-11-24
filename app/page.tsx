import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { Slider } from '@/components/Slider'
import next from 'next'

export const revalidate = 3600

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
      price: price.unit_amount,
    }
  })

  return (
    <>
      <Slider products={products} />
    </>
  )
}
