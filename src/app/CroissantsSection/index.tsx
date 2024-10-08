const CroissantsSection = () => {
  return (
    <section>
      <div className="sm:flex items-center m-auto justify-between lg:w-[72rem] mt-20 lg:mt-56">
        <div className="flex-col w-[35rem] lg:px-14 px-6 text-headings space-y-4">
          <span className="bg-white text-pink-2 font-medium px-3 py-1 rounded-full text-lg">R$ 12,00</span>
          <h2 className="text-brand-2 font-bold text-4xl lg:text-7xl">Croissants</h2>
          <p className="font-medium text-lg lg:text-4xl">Conheça nossa receita</p>
          <p className="w-72">A nossa receita de Croissant vai te surpreender. Croissants clássicos ou recheados!</p>
          <span className="font-semibold">Todos os croissants &gt;</span>
        </div>
        <img src="croissants.png" alt="croissant" />
      </div>
    </section>
  )
}

export default CroissantsSection;