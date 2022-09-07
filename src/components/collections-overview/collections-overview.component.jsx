import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import CollectionPreview from "../collection-preview/collection-preview.component";

import { selectCollectionsForOverview } from "../../redux/shop/shop.selectors";

import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {
          collections.map(({id, ...othercollections}) => (
            <CollectionPreview key={id} {...othercollections} />
          ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForOverview
  })  

export default connect(mapStateToProps)(CollectionsOverview)