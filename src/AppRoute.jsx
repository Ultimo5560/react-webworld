import { Route, Routes } from "react-router-dom"
import { Body } from "./components/body/Body"
import { CardsRouter } from "./routes/CardsRouter"
import { HistorialPaye } from "./pages/HistorialPaye"

export const AppRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/*" element={<CardsRouter />} />
        <Route path="historial" element={<HistorialPaye />} />
    </Routes>
  )
}
