import { useContext } from "react";
import PacientesContext from "../contex/PacientesProvider";

const usePacientes = () => {
    return useContext(PacientesContext);
}

export default usePacientes;