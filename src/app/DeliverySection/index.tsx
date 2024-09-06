const DeliverySection = () => {
  return (
    <section className="relative m-auto mt-28 sm:w-[72rem]">
      <div className="bg-gradient-pink-brown h-[23rem] rounded-3xl mb-20">
      <div className="absolute -top-14">
        <img src="embalagens.png" alt="embalagem-café"
        className="hidden sm:block" />
      </div>
        <div className="absolute px-4 sm:text-right sm:right-8 sm:w-[31rem] space-y-8 mt-10 sm:mt-20">
          <h3 className="text-white font-bold text-4xl sm:text-5xl">Levamos até você!</h3>
          <p className="text-white sm:w-full w-56 m-auto sm:text-base text-lg">Estamos nos principais aplicativos de Delivery!</p>
          <button className="ml-10 sm:ml-0 font-semibold bg-white text-text-3 rounded-full px-24 drop-shadow-lg py-3">Delivery</button>
        </div>
      </div>
    </section>
  )
}

export default DeliverySection;