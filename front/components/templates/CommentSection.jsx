import React, { useEffect, useState } from 'react';
import styles from './../styles/style';
import {
    Text,
    TextInput,
    View,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
  
    const commentArray = [{id: 1, name: "Test username", date: "20 Décembre 2023", content: "Je suis un texte par défaut"}, {id: 2, name: "Test username 2", date: "21 Décembre 2023", content: "J'aime ce studio"}]; // La date peut aussi etre au format 20/12/2023
  
    useEffect(() => {
        setCommentsLoad();
    }, []);
  
    const setCommentsLoad = () => {

      // Récupération des commentaires

      const updatedComments = [];
      commentArray.forEach(comment => {
        updatedComments.push(comment);
      });
      setComments(updatedComments);
    }
  
  const addComment = () => {
    
    // Envoi du nouveau commentaire au back

    setCommentsLoad()
  }

  return (
    <View>
        <View style={styles.commentArea}>
            <TextInput style={styles.commentText} value={newComment} onChangeText={setNewComment} multiline></TextInput>
            <TouchableOpacity onPress={addComment}>
                <Image style={styles.commentButton} source={require("../images/send.png")}/>
            </TouchableOpacity>
        </View>
        <FlatList 
        data={comments}
        renderItem={({ item }) => (
            <View style={styles.commentCard}>
                <Text style={styles.commentName}>{item.name}</Text>
                <Text style={styles.commentDate}>{item.date}</Text>
                <Text style={styles.commentContent}>{item.content}</Text>
            </View>
        )}
        keyExtractor={item => item.id.toString()}
        />
    </View>
    
  )
}

export default CommentSection;