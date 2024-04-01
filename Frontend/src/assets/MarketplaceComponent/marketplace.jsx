/* Components */
import { AsideComponent } from "./components/AsideMarketplaace/asideMarketplace";
import { MainComponentMarketplace } from "./components/mainMarketplace";
import { HeaderComponentMarketplace } from "./components/headerMarketplace";

function Marketplace({ toggleState }) {
  return (
    <section className="marketplace">
      <AsideComponent />
      <MainComponentMarketplace />
      <HeaderComponentMarketplace toggleState={toggleState} />
    </section>
  )
}

export { Marketplace }