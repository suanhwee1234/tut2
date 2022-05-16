import { createTheme } from "@material-ui/core";
import { green, purple,blue } from "@material-ui/core/colors";

const theme=createTheme({
    palette:{
        primary:purple,
        secondary:blue,
    },
    status:{
        danger:'orange',
    }
}
)

export default theme;