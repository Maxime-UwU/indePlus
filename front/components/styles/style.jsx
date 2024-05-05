import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	backgroundStyle: {
    backgroundColor: "#4D2672",
		flex: 1
  },
  line: {
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20
  },
  fullPage: {
    paddingTop: 75,
    paddingBottom: 75
  },
  carrousel: {
    display: 'flex',
    flexDirection: 'row'
  },
	input: {
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FAEBD7',
    backgroundColor: "white",
    color: "black",
    width: 200,
  },
	bigBeigeButton: {
		backgroundColor: '#FAEBD7',
		color: '#4D2673',
		padding: 15,
		borderRadius: 30,
		fontWeight: '700',
		textAlign: 'center',
		width: 80
	},
	beigeButton: {
		backgroundColor: '#FAEBD7',
		color: '#4D2673',
		padding: 15,
		borderRadius: 30,
		fontWeight: '700',
		textAlign: 'center'
	},
	loginRedirection: {
		marginTop: 10, 
		color: '#FAEBD7'
	},
	logo: {
		width: 200, 
		height: 200, 
		marginBottom: 20
	},
	formAuth: {
		flexGrow: 1, 
		justifyContent: 'space-evenly', 
		alignItems: 'center'
	},
  gameCard: {
    width: 150,
    borderRadius: 10,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20
  },
  imageCard: {
    width: 'auto',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10
  },
  titleCard: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  textCard: {
    color: 'white'
  },
  logoCard: {
    width: 20,
    height: 20,
    resizeMode: 'center',
    marginRight: 10,
    marginTop: 5,
    backgroundColor: '#4D2672',
  },
  studioCard: {
    width: 150,
    borderRadius: 10,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
	infoApp: {
		fontSize: 30,
		fontWeight: '700',
		textAlign: 'center',
		margin: 10,
		color: 'white',
	},

  // TabBar

  tabbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 70,
    backgroundColor: "#FAEBD7",
  },
  tabbarText: {
    color: "#4D2673"
  }
});

export default styles;