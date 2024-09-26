const LocationSection = () => {
  return (
    <section className="relative m-auto mt-14 w-[22rem] md:w-[40rem] lg:w-[72rem] mb-24">
      <div className="lg:flex h-[27rem] lg:w-[72rem]">
        <div className="bg-gradient-pink-white-1 w-full lg:rounded-l-3xl rounded-t-3xl lg:rounded-t-none h-[27rem]">
          <div className="w-[23rem] p-8 text-white space-y-4">
            <span className="font-bold text-7xl">Meow Enjoy</span>
            <p className="text-lg">Todos os sábados e domingos</p>
            <p>Venha tomar o seu brunch com a gente!</p>
            <p className="lg:mt-0 mt-14 font-semibold text-headings">Faça uma reserva &gt;</p>
          </div>
        </div>
        <div className="bg-gradient-pink-white-2 lg:w-[40rem] lg:rounded-r-3xl lg:rounded-b-none rounded-b-3xl">
          <div className="w-[23rem] p-8 text-white space-y-8">
            <span className="font-bold text-4xl border-b-2 py-3">Onde estamos</span>
            <p>Você pode nos encontrar no endereço:</p>
            <div className="flex gap-2 drop-shadow-lg">
              <span className="material-symbols-outlined">
                location_on
              </span>
              <p>Rua do Miado 234, Gatolândia</p>
            </div>
          </div>
        </div>
        <div className="absolute lg:-top-24 lg:right-72 bottom-0 right-0">
          <img src="enjoy.png" alt="café" className="w-48 md:w-[20rem] lg:w-[40rem]" />
        </div>
      </div>
    </section>
  )
}

export default LocationSection;