import {createMuiTheme, useMediaQuery} from "@material-ui/core";
import {useMemo} from "react";

export default function useApplicationTheme() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    return useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );
}