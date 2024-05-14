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
  text: {
    color: 'white',
  },
  hiddenfield: {
    display: 'none'
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
  addMargin: {
    marginLeft: 20,
    marginRight: 20
  },
  socialLink: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
    margin: 5
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
    marginTop: 30
  },
  socialText: {
    display: 'flex',
    flexDirection: 'column',
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

  // Profile


  profileSendButton: {
      width: 10,
      height: 'auto'
  },
  profileSendButtonImage: {
      width: 'auto',
      height: 10,
  },
  profileModifyImage: {
    resizeMode: 'contain',
    width: 30,
    height: 30
  },
  hiddenProfileModifyImage: {
    display: 'none',
    resizeMode: 'contain',
    width: 30,
    height: 30
  },

  // DetailsJeu

  detGameTagList: {
    display: 'flex',
    flexDirection: 'row'
  },
  detGameTag: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 50,
    marginRight: 5
  },
  detGameTagText: {
    color: 'white',
    textAlign: 'center'
  },
  detGameText: {
    color: 'white'
  },
  detGameDescription: {
    color: 'white',
    marginTop: 10,
    marginBottom: 10
  },
  detGameImg: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  detGameButton: {
    backgroundColor: '#FAEBD7',
		color: '#4D2673',
    paddingTop: 10,
    paddingBottom: 10,
		borderRadius: 30,
		fontWeight: '700',
		textAlign: 'center'
  },
  favorite: {
    width: 30,
    height: 30
  }
});

export default styles;