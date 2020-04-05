
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  TextInput,
  Text,
  FlatList,
  Image
} from 'react-native';
import { fetchData, fetchSearchData } from '../Store/Actions/action';
import { connect } from "react-redux";
import { styles } from './styles';



const MainComponent = (props) => {

  let data = props.data;
  let searchData = props.searchData;
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    props.getData();
  }, []);


  function onSearch(text) {
    setSearchText(text);
    const filterData = data.filter((item, index) => {
      return item.title.startsWith(text) ? item : null
    });
    props.getSearchData(filterData);
  }

  return (
    <View style={styles.maincontainer} >
      <View style={styles.innerontainer}>
        <KeyboardAvoidingView>
          <TextInput onChange={(e) => onSearch(e.nativeEvent.text.toLowerCase())} style={styles.input} placeholder=' Search title ...' />
        </KeyboardAvoidingView>
        {searchData && searchData.length > 0 ?
          (<ScrollView style={styles.scroll} >
            {searchData.map((item, index) => {
              return (
                <SearchedItemComponent key={index} item={item} index={index} />
              )
            })}
          </ScrollView>)
          : searchText ?
            (<NoSearchItemComponent />)
            : (<FlatList
              contentContainerStyle={{
                paddingTop: 10
              }}
              ListFooterComponent={<Loader />}
              data={data}
              renderItem={({ item }, index) => <ShowDataCompoent index={index} data={item} />}
              keyExtractor={(item, index) => index}
              onEndReached={() => props.getData(data.length)}
              onEndReachedThreshold={0.8}
            />)}

      </View>
    </View>
  );
};



const ShowDataCompoent = (item, index) => {
  return (
    <View key={index} style={styles.card}>
      <Image source={{ uri: item.data.thumbnailUrl }} style={styles.img} />
      <View style={styles.box} >
        <Text style={styles.header}>{item.data.title}</Text>
      </View>
    </View>
  );
}

const SearchedItemComponent = ({ item, index }) => {
  return (
    <View key={index} style={styles.card}>
      <Image source={{ uri: item.thumbnailUrl }} style={styles.img} />
      <View style={styles.box} >
        <Text style={styles.header}>{item.title}</Text>
      </View>
    </View>
  )
}

const Loader = () => {
  return (
    <View style={styles.loading}>
      <Text>Loading...</Text>
    </View>
  )
}

const NoSearchItemComponent = () => {
  return (
    <View style={styles.loading}>
      <Text>No results found</Text>
    </View>
  )
}



const mapStateToProps = state => {
  return {
    data: state.data.data,
    searchData: state.data.searchedItem
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: (startIndex) => dispatch(fetchData(startIndex)),
    getSearchData: (searchData) => dispatch(fetchSearchData(searchData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
