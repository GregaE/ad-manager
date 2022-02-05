import Reflux from "reflux";
import ShopData from "../db-mock/shop_data"

const adActions = Reflux.createActions(["createAd", "updateAd", "deleteAd"]);

class AdStore extends Reflux.Store
{
  constructor()
	{
		super();
		this.state = { productList: ShopData.products };
		this.listenTo(adActions.createAd, this.createAd);
		this.listenTo(adActions.updateAd, this.updateAd);
		this.listenTo(adActions.deleteAd, this.deleteAd);
	}

	createAd(headline, description, image, productId)
	{
		const { productList } = this.state;
		const ad = {
			// vaguely unique id for demo purposes only
			id: Math.random().toString(16).slice(2),
      headline: headline,
      description: description,
      image: image
		}
	};
	updateAd(productId, adId)
	{
		const { productList } = this.state;
	};
	deleteAd(productId, adId)
	{
		const { productList } = this.state;
	};
}

export default AdStore;