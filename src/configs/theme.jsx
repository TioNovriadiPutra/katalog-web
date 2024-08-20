import { defaultTheme, mergeTheme } from "evergreen-ui";

const customTheme = mergeTheme(defaultTheme, {
  components: {
    Switch: {
      appearances: {
        main: {
          selectors: {
            _base: {
              backgroundColor: "#E8E8E8",
            },
            _checked: {
              backgroundColor: "#58BE62",
            },
          },
        },
      },
    },
  },
});

export default customTheme;
