const DeliverySection = () => {
  return (
    <section className="flex flex-col relative m-auto mt-28 lg:w-[72rem] md:w-[40rem]">
      <div className="bg-gradient-pink-brown h-[23rem] rounded-3xl mb-20">
      <div className="absolute -top-14">
        <img src="embalagens.png" alt="embalagem-café"
        className="hidden lg:block" />
      </div>
        <div className="md:ml-32 lg:ml-0 absolute px-4 lg:text-right lg:right-8 lg:w-[31rem] space-y-8 mt-10 lg:mt-20">
          <h3 className="text-white font-bold text-4xl lg:text-5xl">Levamos até você!</h3>
          <p className="text-white lg:w-full w-56 m-auto lg:text-base text-lg">Estamos nos principais aplicativos de Delivery!</p>
          <button className="ml-10 lg:ml-0 font-semibold bg-white text-text-3 rounded-full px-24 drop-shadow-lg py-3">Delivery</button>
        </div>
      </div>
    </section>
  )
}

export default DeliverySection;