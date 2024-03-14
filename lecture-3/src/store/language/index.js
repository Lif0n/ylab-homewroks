import StoreModule from "../module";
import eng from '../../lang/en.json'
import ru from '../../lang/ru.json'

class Language extends StoreModule {

  initState() {
    const locale = localStorage.getItem('locale');
    this.changeLanguage(locale ? locale : 'ru-RU');
  }

  changeLanguage(lang) {

    localStorage.setItem('locale', lang);
    this.setState({
      ...this.getState(),
      texts: lang == "ru-RU" ? ru : eng
    }, `смена языка на ${lang}`)
  }
}

export default Language;