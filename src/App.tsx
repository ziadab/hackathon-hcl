import { Outlet } from "react-router-dom";

export default function App() {
  return (
  <div className="grid h-screen font-bold place-items-center">
    <Outlet />
  </div>
)
}
