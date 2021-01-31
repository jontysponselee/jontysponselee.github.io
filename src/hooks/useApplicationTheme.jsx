import {createMuiTheme, useMediaQuery} from "@material-ui/core";
import {useMemo} from "react";
import {deepPurple} from "@material-ui/core/colors";

export default function useApplicationTheme() {
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const prefersDarkMode = true;

    return useMemo(
        () =>
            createMuiTheme({
                palette: {
                    primary: deepPurple,
                    secondary: {
                        main: "#fff"
                    },
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );
}