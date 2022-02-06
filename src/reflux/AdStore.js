import Reflux from "reflux";
import AdActions from "./actions/AdActions";

class AdStore extends Reflux.Store
{
  constructor()
	{
		super();
		this.state = {
			adList: [{
				id: 'b6b7e801640c6',
				header: "Don't miss out!",
				description: "This is a great offer, super amazing offer that you've never seen before",
				image: "https://res.cloudinary.com/dyiuxe5fa/image/upload/v1626282482/coding-challenge/wp3699391.jpg",
				productId: "5fa1c587ae2ac23e9c46510g"
			}],
			deleteModal: false
		};
		this.listenTo(AdActions.createAd, this.createAd);
		this.listenTo(AdActions.updateAd, this.updateAd);
		this.listenTo(AdActions.deleteAd, this.deleteAd);
		this.listenTo(AdActions.toggleDeleteModal, this.toggleDeleteModal);
	}

	createAd(header, description, image, productId)
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
		this.setState({adList: [...adList, ad]})
	};
	updateAd(adId, header, description, image, productId)
	{
		const { adList } = this.state;
		const updatedAd = {
			id: adId,
      header: header,
      description: description,
      image: image,
			productId: productId
		}
		const updatedList = adList.map(function(ad) {
			if (ad.id === adId) {
				console.log('hello')
				return updatedAd
			}
			else {
				console.log(ad.id, adId)
				return ad
			}
		})
		this.setState({ adList: updatedList })
	};
	deleteAd(adId)
	{
		const { adList } = this.state;
		const filteredList = adList.filter(ad => !ad.id === adId);
		this.setState({ adList: filteredList })
	};
	toggleDeleteModal()
	{
		const { deleteModal } = this.state;
		const toggledState = !deleteModal;
		this.setState({ deleteModal: toggledState })
	};
}

export default AdStore;