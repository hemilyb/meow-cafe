const AboutSection = () => {
  return (
    <section className="relative sm:-mt-40 mt-24 flex justify-center">
      <div className="sm:absolute sm:flex items-center sm:w-[72rem] min-h-screen gap-40 w-96 px-4 sm:px-0">
        <div className="text-brand-2 sm:w-[30rem] space-y-1">
          <h3 className="font-medium text-xl">Sobre nós</h3>
          <p className="font-bold text-3xl sm:text-5xl">Nós oferecemos uma experiência inesquecível para amantes de café e pais de pet!</p>
        </div>
        <div className="w-96 space-y-6">
          <span className="text-brand-2 font-bold">O melhor lugar para apreciar o seu café</span>
          <div className="text-headings space-y-6 sm:text-base text-lg font-medium w-80">
            <p>No Meow Cafe, priorizamos a criação de um espaço onde tanto os seres humanos quanto seus animais de estimação possam relaxar e desfrutar.</p>
            <p>
              Nosso design interior é inspirado na harmonia e conforto, com sofás aconchegantes, iluminação suave e uma decoração que remete à natureza e à alegria que os animais trazem para nossas vidas.
            </p>
          </div>
        </div>
      </div>
      <img src="bg-2.png" alt="bg-drinks" className="bg-cover w-full sm:block hidden" />
    </section>
  )
}

export default AboutSection;