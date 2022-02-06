import Reflux from "reflux";
import AdActions from "./actions/AdActions";

class AdStore extends Reflux.Store
{
  constructor()
	{
		super();
		this.state = { adList: [{
			// vaguely unique id for demo purposes only
			id: Math.random().toString(16).slice(2),
      header: "Don't miss out!",
      description: "This is a great offer, super amazing offer that you've never seen before",
      image: "https://media.istockphoto.com/photos/bled-island-picture-id143921515?k=20&m=143921515&s=612x612&w=0&h=78iGd8BaZwiJQS9xAwPsLnzE_wlkvNVamnEOqPxxop4=",
			productId: "5fa1c587ae2ac23e9c46510g"
		}] };
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