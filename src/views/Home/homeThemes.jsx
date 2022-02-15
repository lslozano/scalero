// Themes for Calendar Day Views
const COLUMN = {
  flexDirection: {
    gamesContainer: 'column',
  },
  flexWrap: {
    gamesContainer: 'initial',
  },
  justifyContent: {
    gamesContainer: 'initial',
  },
  marginTop: {
    gamesCard: '0',
  },
  width: {
    gameCard: 'auto',
  },
};

const GRID = {
  flexDirection: {
    gamesContainer: 'row',
  },
  flexWrap: {
    gamesContainer: 'wrap',
  },
  justifyContent: {
    gamesContainer: 'space-between',
  },
  marginTop: {
    gamesCard: '25px',
  },
  width: {
    gameCard: '300px',
  },
};

// Get theme for Home on view selected
export default function getThemeForHomeViewOn(homeViewSelected) {
  if (homeViewSelected === 'grid') return GRID;

  return COLUMN;
}
