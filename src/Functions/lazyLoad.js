import { lazy } from "react";

const LazyLoad = (path) => {
  return lazy(() => import(path));
};

export default LazyLoad;
