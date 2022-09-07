import React from "react";
import { useLocation } from "react-router-dom"

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ match }) => {
  let { pathname } = useLocation();
  return(
      <div className="shop-page">
          {(() => {if ({pathname} === '/shop') {
            return <CollectionsOverview /> }
          })()}
      </div>
    )
  
}
export default ShopPage;