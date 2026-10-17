import { useNavigate } from "react-router-dom"
import Button1 from "./Button1"

const RoleButton = ({ text, extraStyling, role }) => {
  const navigate = useNavigate()

  return (
    <div>
      <Button1
        text={text}
        extraStyling={extraStyling}
        onClick={() => navigate(`/login-signup?role=${role}`)}
      />
    </div>
  )
}

export default RoleButton