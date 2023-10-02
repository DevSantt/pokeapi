import './index.scss'
import { useThemeContext } from "../../contexts/theme";



export const ThemeSwitcher = () => {

  const { changeTheme } = useThemeContext();


  return (

    <label class="toggle-control" onChange={changeTheme}>
      <input type="checkbox" />
      <span class="control"></span>
    </label>

  )
}




