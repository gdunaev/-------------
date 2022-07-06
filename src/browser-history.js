import {createBrowserHistory} from "history";

// дает возможность использовать history не только в компонентах,
// можно переопределить history компонента на этот, для этого изменить
// Router as BrowserRouter и потом <BrowserRouter history={browserHistory}>
const browserHistory = createBrowserHistory();

export default browserHistory;
