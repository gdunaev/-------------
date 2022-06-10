import React from "react";
import {AppRoute} from "../../const";

import {Link} from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <section>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.MAIN}>Вернуться на главную</Link>
    </section>
  );
};

export default NotFoundScreen;
