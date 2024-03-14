import StoreModule from "../module";


class Item extends StoreModule {

  initState() {
    return {
      selectedItem: {}
    }
  }

  async load({ _id }) {
    this.store.actions.loading.start();
    const itemResponse = await fetch('/api/v1/articles/' + _id + '?fields=_id,title,description,price,madeIn,edition,category');
    const itemJson = await itemResponse.json();
    const countryResponse = await fetch('/api/v1/countries/' + itemJson.result.madeIn._id);
    const countryJson = await countryResponse.json();
    const categoryResponse = await fetch('/api/v1/categories/' + itemJson.result.category._id)
      .then(this.store.actions.loading.finish());
    const categoryJson = await categoryResponse.json();
    this.setState({
      ...this.getState(),
      selectedItem: { ...itemJson.result, country: countryJson.result, category: categoryJson.result }
    }, 'Загружен товар с _id=' + _id);
  }
}

export default Item;