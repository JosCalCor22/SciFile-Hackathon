/* Components */
import { AsideComponent } from "./components/AsideMarketplace/asideMarketplace";
import { MainComponentMarketplace } from "./components/mainMarketplace";
import { HeaderComponentMarketplace } from "./components/HeaderMarketplace/headerMarketplace";

function Marketplace({ toggleState }) {
  return (
    <section className="marketplace">
      <AsideComponent />
      <HeaderComponentMarketplace toggleState={toggleState} />
      <MainComponentMarketplace />
    </section>
  )
}

export { Marketplace }