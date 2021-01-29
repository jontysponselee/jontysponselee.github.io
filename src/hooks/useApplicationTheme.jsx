import {createMuiTheme, useMediaQuery} from "@material-ui/core";
import {useMemo} from "react";
import {deepPurple} from "@material-ui/core/colors";

export default function useApplicationTheme() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    primary: deepPurple,
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    console.log(theme)
    return theme;
}