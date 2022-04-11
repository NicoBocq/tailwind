const App = ():JSX.Element => {
  const listProduct = [
    { id: 1, name: 'Chaussures de Running Nike ZoomX Vaporfly Next% 2', price: 197.99, image: 'https://media.alltricks.com/medium/2087615613a6a5561f4d3.41778734.jpg' },
    { id: 2, name: 'Chaussures de Running adidas running adizero Adios Pro 2 ', price: 220, image: 'https://media.alltricks.com/medium/218648761c5a1170e2327.59377374.jpg' },
    { id: 3, name: 'Chaussures de Running Nike ZoomX Invincible Run Flyknit ', price: 154.99, image: 'https://media.alltricks.com/medium/213434661483fb9f12178.51276459.jpg' },
    { id: 4, name: 'Chaussures de Running Asics Gel Noosa Tri 13', price: 105.99, image: 'https://media.alltricks.com/medium/209412160db207169b003.75674757.jpg' },
    { id: 5, name: 'Chaussures de Running Saucony Endorphin Speed 2 Reverie', price: 97.99, image: 'https://media.alltricks.com/medium/207740360ae2c32b11a14.59472615.jpg' },
    { id: 6, name: 'Chaussures de Running Hoka One One Rincon 3', price: 84.99, image: 'https://media.alltricks.com/medium/207844861279e2ad90c30.33565549.jpg' },
    { id: 7, name: 'Chaussures de Running Nike Air Zoom Pegasus 38', price: 84.99, image: 'https://media.alltricks.com/medium/218520261bb280813a280.51162126.jpg' }
  ]

  type Product = {
    id: number,
    name: string,
    price: number,
    image: string
  }

  return (
    <>
      <div className="w-full bg-gradient-to-r from-brand-500 to-brand-900 px-5 py-6">
        <h1 className="text-white font-extrabold text-3xl">Alltricks</h1>
      </div>
      <section className="max-w-7xl mx-auto px-5 py-6 space-y-5">
        <div className="border-b border-gray-200 py-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-800">Liste des produits</h2>
          <input className="border px-5 py-2 border-gray-200 shadow-lg focus:outline-none focus:ring focus:ring-brand-900 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
          {listProduct.map((product: Product) => (
            <div key={product.id} className="group rounded-lg cursor-pointer hover:shadow-lg transition duration-500 ease-in-out py-4 px-6">
              <h2 className="font-bold truncate group-hover:text-brand-500 text-xl">{product.name}</h2>
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto group-hover:opacity-40"
              />
              <span className="text-white before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-600 relative inline-block">
                <span className="relative text-white">{product.price} €</span></span>
            </div>
          )
          )}
        </div>
      </section>
    </>
  )
}

export default App
