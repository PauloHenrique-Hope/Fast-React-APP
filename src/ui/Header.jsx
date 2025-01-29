import { Link } from "react-router-dom";
import { SearchOrder } from "../features/order/SearchOrder";

export function Header() {
  return (
    <header>
      <Link>Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Satoko</p>
    </header>
  );
}
