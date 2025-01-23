const getDynamicPadding = (screens) => {
    if (screens.lg) {
      return "4rem 6.25rem"; // Large screens: top/bottom 2rem, left/right 6.25rem
    } else if (screens.md) {
      return "2rem 2rem"; // Medium screens: top/bottom 2rem, left/right 2rem
    } else {
      return "2rem 1rem"; // Small screens: top/bottom 2rem, left/right 1rem
    }
  };

  export default getDynamicPadding;