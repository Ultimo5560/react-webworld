import { Route, Routes } from "react-router-dom"
import { BasicPage } from "../pages/BasicPage"
import { EmpresarialPage } from "../pages/EmpresarialPage"
import { ProfessionalPage } from "../pages/ProfessionalPage"

export const CardsRouter = () => {
  return (
    <>
        <Routes>
            <Route path="basico" element={<BasicPage />} />
            <Route path="empresarial" element={<EmpresarialPage />} />
            <Route path="profesional" element={<ProfessionalPage />} />

            {/* <Route path="/" element={<Navigate to="" />} /> */}
        </Routes>
    </>
  )
}
