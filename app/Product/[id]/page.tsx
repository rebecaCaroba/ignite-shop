
interface ProductProps {
  params: {
    id: string
  }
}

export default function Productoone({ params }: ProductProps) {
    return (
      <div>Produtos.. {params.id} </div>
    )
  }