const CoffeeSection = () => {

  const coffees = [
    {
      img: "capuccino.png",
      title: "Capuccino",
      price: "24,00",
      description: "Café expresso, leite vaporizado, espuma e um toque de caramelo.",
      bg: "bg-gradient-pink"
    },
    {
      img: "cafe-ao-leite.png",
      title: "Café ao Leite",
      price: "16,00",
      description: "O clássico, amado pelos brasileiros, com um toque de sofisticação!",
      bg: "bg-gradient-light-brown"
    },
    {
      img: "expresso.png",
      title: "Café Preto",
      price: "12,00",
      description: "Grãos selecionados feitos no seu método de preparo favorito.",
      bg: "bg-gradient-dark-brown"
    }
  ]


  return (
    <section className="relative w-full flex justify-center">
      <div className="sm:absolute min-h-screen top-44 text-headings">
        <div className="sm:w-[34rem] m-auto text-center space-y-7">

          <h2 className="w-28 items-center m-auto font-semibold text-4xl border-headings border-b-2">Cafés</h2>
          <p className="w-80 sm:w-full m-auto">Conheça nossos cafés exclusivos pensados e preparados por nossos baristas renomados. </p>
          <p className="font-semibold hover:translate-x-8 duration-500">Veja Todos &gt;</p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-16">
          {coffees.map(coffee => (
            <div key={coffee.title}
              className={`flex flex-col ${coffee.bg} w-[300px] py-6 items-center text-center text-white rounded-3xl space-y-4 px-4`}
            >
                <img src={coffee.img} alt={coffee.title} 
                className="h-40"
                />
                <span className="text-lg font-medium">R$ {coffee.price}</span>
                <p className="text-2xl font-medium">{coffee.title}</p>
                <p className="text-sm">{coffee.description}</p>
                <span className="font-semibold bg-white text-text-3 rounded-full px-24 drop-shadow-lg py-3">Delivery</span>
            </div>
          ))}
        </div>
      </div>
      <img src="image-bg.png" alt="bg-drinks" className="bg-cover w-full hidden sm:block" />
    </section>
  )
}

export default CoffeeSection;