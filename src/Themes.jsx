import { useThemes } from "./hooks";

function Themes () {

    const { isDarkMode } = useThemes();
    
    return (
        <link
        rel="stylesheet"
        href={`https://cdn.jsdelivr.net/npm/water.css@2/out/${ isDarkMode ? "dark" : "light"}.css`}
        
      />
    )
}
export default Themes;