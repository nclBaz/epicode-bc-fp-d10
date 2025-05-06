import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../redux/themeActions"

const ThemeToggler = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.theme)

  return (
    <div>
      <Button onClick={() => dispatch(toggleTheme())}>{theme === "dark" ? "🌛" : "🌞"}</Button>
    </div>
  )
}

export default ThemeToggler
