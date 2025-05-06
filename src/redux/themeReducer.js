const initialState = {
  theme: "light",
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "theme/toggle":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" }

    default:
      return state
  }
}

export default themeReducer
