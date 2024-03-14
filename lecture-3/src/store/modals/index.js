import StoreModule from "../module";

class Modals extends StoreModule {

  initState() {
    return {
      name: null
    }
  }

  open(name) {
    this.setState({name}, `Открытие модалки ${name}`);
  }

  close() {
    this.setState({name: null}, `Закрытие модалки`);
  }
}

export default Modals;
