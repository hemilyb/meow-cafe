const Footer = () => {
  return (
    <section className="relative m-auto mt-80 lg:mt-14 lg:w-[72rem] md:w-[40rem] w-80 mb-20">
      <div className="border-b-2"></div>
      <div className="lg:flex mt-16 text-footer justify-between space-y-6 lg:space-y-0">
      <div className="w-[20rem] space-y-4">
        <span className="text-text-4 font-medium text-lg">Informações</span>
        <p>Todos os direitos reservados Meow Cafe Ltda.</p>
        <p>Um lugar perfeito para pais de pets e amantes de café!</p>
      </div>
      <div className="space-y-4">
        <span className="text-text-4 font-medium text-lg">Links Úteis</span>
        <ul>
          <li>Inicio</li>
          <li>Produtos</li>
          <li>Delivery</li>
          <li>Sobre</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="space-y-4">
        <span className="text-text-4 font-medium text-lg">Institucional</span>
        <ul>
          <li><span className="font-medium">CNPJ: </span> XX. XXX. XXX/0001-XX</li>
          <li><span className="font-medium">Endereço: </span>Lorem ipsum, 64</li>
          <li>Política de Privacidade</li>
          <li>Dúvidas Frequentes</li>
          <li>Ajuda</li>
          <li>Acessibilidade</li>
        </ul>
      </div>
      </div>
    </section>
  )
}

export default Footer;