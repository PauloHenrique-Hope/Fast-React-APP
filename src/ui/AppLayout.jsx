import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Loader } from "./Loader";

export function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
