import StoreModule from "../module";

class Loading extends StoreModule {

  initState() {
    return {
      isLoading: false
    }
  }

  start() {
    this.setState({ isLoading: true }, 'Начало загрузки')
  }

  finish() {
    this.setState({ isLoading: false }, 'Конец загрузки')
  }
}

export default Loading;