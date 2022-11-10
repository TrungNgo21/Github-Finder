import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { FaExclamationCircle } from "react-icons/fa";

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <h1 className="flex items-center mb-4 space-x-2 text-red-500 text-2xl">
        {alert.type === "error" && <FaExclamationCircle />}
        <p className="flex-1 text-base font-semibold leading-7 text-white">
            <strong>{alert.msg}</strong>
        </p>
      </h1>
    )
  );
}

export default Alert;
   