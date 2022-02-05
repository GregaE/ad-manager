import Reflux from "reflux";
import AdActions from "./actions/AdActions";

class AdStore extends Reflux.Store
{
  constructor()
	{
		super();
		this.state = { adList: [] };
		this.listenTo(AdActions.createAd, this.createAd);
		this.listenTo(AdActions.updateAd, this.updateAd);
		this.listenTo(AdActions.deleteAd, this.deleteAd);
	}

	createAd(header, description, image, productId)
	{
		console.log("hello")
		const { adList } = this.state;
		const ad = {
			// vaguely unique id for demo purposes only
			id: Math.random().toString(16).slice(2),
      header: header,
      description: description,
      image: image,
			productId: productId
		}
		this.setState({adList: [...adList, ad]})
	};
	updateAd(header, description, image, productId)
	{
		const { adList } = this.state;
		const ad = {
			// vaguely unique id for demo purposes only
			id: Math.random().toString(16).slice(2),
      header: header,
      description: description,
      image: image,
			productId: productId
		}
	};
	deleteAd(productId, adId)
	{
		const { productList } = this.state;
	};
}

export default AdStore;