import * as React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/colection-preview";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = { collections: SHOP_DATA };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shope-page">
        {collections.map(({ id, ...othercollections }) => (
          <CollectionPreview key={id} {...othercollections} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
