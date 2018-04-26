import Loadable from "react-loadable";
import Loading from './Shared/Loading';

export const Home = Loadable({loader: () => import("./Home/index"), loading: Loading,});
export const ProductDetail = Loadable({loader: () => import("./Products/ProductDetail"), loading: Loading,});
export const ProductList = Loadable({loader: () => import("./Products/ProductList"), loading: Loading,});
