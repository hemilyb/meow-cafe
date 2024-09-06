const LocationSection = () => {
  return (
    <section className="relative m-auto mt-14 w-[22rem] sm:w-[72rem] mb-24">
      <div className="sm:flex h-[27rem] sm:w-[72rem]">
        <div className="bg-gradient-pink-white-1 w-full sm:rounded-l-3xl rounded-t-3xl sm:rounded-t-none h-[27rem]">
          <div className="w-[23rem] p-8 text-white space-y-4">
            <span className="font-bold text-7xl">Meow Enjoy</span>
            <p className="text-lg">Todos os sábados e domingos</p>
            <p>Venha tomar o seu brunch com a gente!</p>
            <p className="sm:mt-0 mt-14 font-semibold text-headings">Faça uma reserva &gt;</p>
          </div>
        </div>
        <div className="bg-gradient-pink-white-2 sm:w-[40rem] sm:rounded-r-3xl sm:rounded-b-none rounded-b-3xl">
          <div className="w-[23rem] p-8 text-white space-y-8">
            <span className="font-bold text-4xl border-b-2 py-3">Onde estamos</span>
            <p>Você pode nos encontrar no endereço:</p>
            <div className="flex gap-2 drop-shadow-sm">
              <span className="material-symbols-outlined">
                location_on
              </span>
              <p>Rua do Miado 234, Gatolândia</p>
            </div>
          </div>
        </div>
        <div className="absolute sm:-top-24 sm:right-72 bottom-0 right-0">
          <img src="enjoy.png" alt="café" className="w-48 sm:w-[40rem]" />
        </div>
      </div>
    </section>
  )
}

export default LocationSection;