import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const API_KEY = 'c04d372c4e354a079603e6508bea7578';
const base_url =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + API_KEY;
export default function NewsFeed() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get(base_url).then((response: any) => {
      console.log(response.data);
      setArticles(response.data.articles);
    });
  }, []);

  const renderItem = ({item}: any) => {
    console.log(item);
    return (
      <View style={styles.feedContainer}>
        <Text style={styles.titleTxt}>{item.title}</Text>
        <Image
          source={{uri: `${item.urlToImage}`}}
          style={styles.imageContainer}
        />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={articles}
        renderItem={item => renderItem(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  feedContainer: {
    borderWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  titleTxt: {
    fontSize: 20,
  },
  imageContainer: {
    width: 400,
    height: 500,
  },
});
