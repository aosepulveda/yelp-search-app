import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResult] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        term,
        location: 'Santiago, Chile',
        limit: 50
      }
    });
    setResult(response.data.businesses);
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi()} />
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
