
import React, {useState} from 'react';
import {Alert, View ,StyleSheet ,Text, TouchableOpacity, Image, ScrollView, Modal, TouchableHighlight} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

   

const showAlertHandler = () => {
  Alert.alert(
    'Pesan',
    'Berhasil Booking Lapangan A !', 
    [
      { text: 'Done' },
    ],
    { cancelable: true }
  );
};

const showAlertHandler2 = () => {
  Alert.alert(
    'Pesan',
    'Berhasil Booking Lapangan B !', 
    [
      { text: 'Done' },
    ],
    { cancelable: true }
  );
};

const showAlertHandler3 = () => {
  Alert.alert(
    'Pesan',
    'Berhasil Booking Lapangan C !', 
    [
      { text: 'Done' },
    ],
    { cancelable: true }
  );
};

  const HomeScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    return (
      <ScrollView style={styles.container}>

      {/* Lapangan A */}
        <View style={styles.card}>

          <Image style={styles.imgHome} source={require('./futsal1.jpg')} />  
          <Text style={styles.title}>Lapangan A</Text>

          <Text style={{borderBottomWidth: 1, width: 350, marginLeft: 25, marginBottom: 10}}></Text>

          <Text style={styles.Desc}>Tiang Gawang 2</Text>
          <Text style={styles.Desc}>Bola 4</Text>
          <Text style={styles.Desc}>Rumput Sempurna</Text>

           
          <View style={{ marginLeft: 10, flexDirection: 'row', marginVertical: 10}}>
            <Ionicons name="ios-star" size={24} color="#f09826" />
            <Ionicons name="ios-star" size={24} color="#f09826" />
            <Ionicons name="ios-star" size={24} color="#f09826" />
            <Ionicons name="ios-star-half" size={24} color="#f09826" />
            <Ionicons name="ios-star-outline" size={24} color="#f09826" />
          </View>
          
          <View style={{flexDirection: 'row', marginVertical: 10}}>
           <Text style={styles.Disc}>Rp 100.000/jam</Text>
           <Text style={styles.Price}>Rp 80.000/jam</Text>
          </View>

          <Text style={{borderBottomWidth: 1, width: 350, marginLeft: 25, marginBottom: 10}}></Text>


          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible1}
          >
          <View style={styles.modalView}>

            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'lightgrey', borderBottomWidth: 1, width: 300, textAlign: 'center', marginBottom: 10}}>Detail</Text>
            
            <Image style={styles.imgHome} source={require('./futsal1.jpg')} />  
            <Text style={styles.title}>Lapangan A</Text>

            <Text style={{borderBottomWidth: 1, width: 350, marginLeft: 25, marginBottom: 10}}></Text>

            <Text style={styles.Desc}>Tiang Gawang 2</Text>
            <Text style={styles.Desc}>Bola 4</Text>
            <Text style={styles.Desc}>Rumput Sempurna</Text>

            <Text style={{fontSize: 16, textAlign: 'justify', marginVertical: 10}}>
               Bagi pemula, lapangan ini sangat cocok untuk digunakan latihan karena lapangan ini menggunakan rumput sintetis yang membuatnya mampu mengurangi resiko cedera parah.
            </Text>

            <View style={{ marginLeft: 10, flexDirection: 'row', marginVertical: 10}}>
              <Ionicons name="ios-star" size={24} color="#f09826" />
              <Ionicons name="ios-star" size={24} color="#f09826" />
              <Ionicons name="ios-star" size={24} color="#f09826" />
              <Ionicons name="ios-star-half" size={24} color="#f09826" />
              <Ionicons name="ios-star-outline" size={24} color="#f09826" />
            </View>
            
            <View style={{flexDirection: 'row', marginVertical: 10}}>
              <Text style={styles.Disc}>Rp 100.000/jam</Text>
              <Text style={styles.Price}>Rp 80.000/jam</Text>
            </View>

          
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{...styles.openButton, backgroundColor: '#1af20f', marginVertical: 5 }} onPress={showAlertHandler}>
                <Text style={styles.txtPesan}>Booking Sekarang</Text>
              </TouchableOpacity>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3", marginLeft: 5, height: 35, marginTop: 5 }}
                onPress={() => {
                  setModalVisible1(!modalVisible1);
                }}
              >
                <Text style={styles.txtPesan}>Close</Text>
            </TouchableHighlight>
            </View>
            
          </View>
          </Modal>
            <TouchableHighlight
              style={styles.Pesan}
              onPress={() => {
              setModalVisible1(true);
            }}
          >
            <Text style={styles.textStyle}>Detail</Text>
            </TouchableHighlight>
        </View>  


      {/* Lapangan B */}
        <View style={styles.card}>

          <Image style={styles.imgHome} source={require('./36.jpg')} />  
          <Text style={styles.title}>Lapangan B</Text>

          <Text style={{borderBottomWidth: 1, width: 350, marginLeft: 25, marginBottom: 10}}></Text>

          <Text style={styles.Desc}>Tiang Gawang 2</Text>
          <Text style={styles.Desc}>Bola 4</Text>
          <Text style={styles.Desc}>Rumput Sempurna</Text>

          <View style={{ marginLeft: 10, flexDirection: 'row', marginVertical: 10}}>
            <Ionicons name="ios-star" size={24} color="#f09826" />
            <Ionicons name="ios-star" size={24} color="#f09826" />
            <Ionicons name="ios-star" size={24} color="#f09826" />
            <Ionicons name="ios-star-outline" size={24} color="#f09826" />
            <Ionicons name="ios-star-outline" size={24} color="#f09826" />
          </View>
          
          <View style={{flexDirection: 'row', marginVertical: 10}}>
           <Text style={styles.Disc}>Rp 100.000/jam</Text>
           <Text style={styles.Price}>Rp 80.000/jam</Text>
          </View>

          <Text style={{borderBottomWidth: 1, width: 350, marginLeft: 25, marginBottom: 10}}></Text>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
          >
          <View style={styles.modalView}>

            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'lightgrey', borderBottomWidth: 1, width: 300, textAlign: 'center', marginBottom: 10}}>Detail</Text>
            
            <Image style={styles.imgHome} source={require('./36.jpg')} />  
            <Text style={styles.title}>Lapangan B</Text>

            <Text style={{borderBottomWidth: 1, width: 350, marginLeft: 25, marginBottom: 10}}></Text>

            <Text style={styles.Desc}>Tiang Gawang 2</Text>
            <Text style={styles.Desc}>Bola 4</Text>
            <Text style={styles.Desc}>Rumput Sempurna</Text>

            <Text style={{fontSize: 16, textAlign: 'justify', marginVertical: 10}}>
              Bagi pemula, lapangan ini sangat cocok untuk digunakan latihan karena lapangan ini menggunakan rumput sintetis yang membuatnya mampu mengurangi resiko cedera parah.
            </Text>

            <View style={{ marginLeft: 10, flexDirection: 'row', marginVertical: 10}}>
              <Ionicons name="ios-star" size={24} color="#f09826" />
              <Ionicons name="ios-star" size={24} color="#f09826" />
              <Ionicons name="ios-star" size={24} color="#f09826" />
              <Ionicons name="ios-star-outline" size={24} color="#f09826" />
              <Ionicons name="ios-star-outline" size={24} color="#f09826" />
            </View>
            
            <View style={{flexDirection: 'row', marginVertical: 10}}>
              <Text style={styles.Disc}>Rp 100.000/jam</Text>
              <Text style={styles.Price}>Rp 80.000/jam</Text>
            </View>

          
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{...styles.openButton, backgroundColor: '#1af20f', marginVertical: 5 }} onPress={showAlertHandler2}>
                <Text style={styles.txtPesan}>Booking Sekarang</Text>
              </TouchableOpacity>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3", marginLeft: 5, height: 35, marginTop: 5 }}
                onPress={() => {
                  setModalVisible2(!modalVisible2);
                }}
              >
                <Text style={styles.txtPesan}>Close</Text>
            </TouchableHighlight>
            </View>
            
          </View>
          </Modal>
            <TouchableHighlight
              style={styles.Pesan}
              onPress={() => {
              setModalVisible2(true);
            }}
          >
            <Text style={styles.textStyle}>Detail</Text>
            </TouchableHighlight>
        </View>  

      {/* Lapangan C */}
        <View style={styles.card}>

          <Image style={styles.imgHome} source={require('./Vinyl.jpg')} />  
          <Text style={styles.title}>Lapangan C</Text>

          <Text style={{borderBottomWidth: 1, width: 350, marginLeft: 25, marginBottom: 10}}></Text>

          <Text style={styles.Desc}>Tiang Gawang 2</Text>
          <Text style={styles.Desc}>Bola 5</Text>
          <Text style={styles.Desc}>Lapangan Vinyl</Text>

          <View style={{ marginLeft: 10, flexDirection: 'row', marginVertical: 10}}>
            <Ionicons name="ios-star" size={24} color="#f09826" />
            <Ionicons name="ios-star" size={24} color="#f09826" />
            <Ionicons name="ios-star" size={24} color="#f09826" />
            <Ionicons name="ios-star" size={24} color="#f09826" />
            <Ionicons name="ios-star" size={24} color="#f09826" />
          </View>
          
          <View style={{flexDirection: 'row', marginVertical: 10}}>
           <Text style={styles.Disc}>Rp 200.000/jam</Text>
           <Text style={styles.Price}>Rp 185.000/jam</Text>
          </View>

          <Text style={{borderBottomWidth: 1, width: 350, marginLeft: 25, marginBottom: 10}}></Text>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
          <View style={styles.modalView}>

            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'lightgrey', borderBottomWidth: 1, width: 300, textAlign: 'center', marginBottom: 10}}>Detail</Text>
            
            <Image style={styles.imgHome} source={require('./Vinyl.jpg')} />  
            <Text style={styles.title}>Lapangan C</Text>

            <Text style={{borderBottomWidth: 1, width: 350, marginLeft: 25, marginBottom: 10}}></Text>

            <Text style={styles.Desc}>Tiang Gawang 2</Text>
            <Text style={styles.Desc}>Bola 5</Text>
            <Text style={styles.Desc}>Lapangan Vinyl</Text>

            <Text style={{fontSize: 16, textAlign: 'justify', marginVertical: 10}}>
              Menurut mereka yang sering bermain futsal disini, lapang ini menjadi lapangan favorit mereka karena selain menggunakan vinyl, lapangan ini jauh luas dibandingkan dengan lapangan A dan B. Lapangan ini cocok untuk latihan mereka yang sudah masuk dalam Liga Profesional.
            </Text>

            <View style={{ marginLeft: 10, flexDirection: 'row', marginVertical: 10}}>
              <Ionicons name="ios-star" size={24} color="#f09826" />
              <Ionicons name="ios-star" size={24} color="#f09826" />
              <Ionicons name="ios-star" size={24} color="#f09826" />
              <Ionicons name="ios-star" size={24} color="#f09826" />
              <Ionicons name="ios-star" size={24} color="#f09826" />
            </View>
            
            <View style={{flexDirection: 'row', marginVertical: 10}}>
              <Text style={styles.Disc}>Rp 200.000/jam</Text>
              <Text style={styles.Price}>Rp 185.000/jam</Text>
            </View>

          
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{...styles.openButton, backgroundColor: '#1af20f', marginVertical: 5 }} onPress={showAlertHandler3}>
                <Text style={styles.txtPesan}>Booking Sekarang</Text>
              </TouchableOpacity>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3", marginLeft: 5, height: 35, marginTop: 5 }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.txtPesan}>Close</Text>
            </TouchableHighlight>
            </View>
            
          </View>
          </Modal>
            <TouchableHighlight
              style={styles.Pesan}
              onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>Detail</Text>
            </TouchableHighlight>
        </View>  


      </ScrollView>
    );
  };

  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 35
    },

    card: {
      borderWidth: 1,
      width: 400,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginVertical: 20,
      backgroundColor: '#fff'
    },

    imgHome: {
      width: 400,
      height: 350,
    },

    title: {
      fontSize: 34,
      textAlign: 'center',
      marginVertical: 10,
      fontWeight: '800'
    },

    Desc: {
      fontSize: 20,
      marginLeft: 10
    },

    Disc: {
      fontSize: 16,
      flexDirection: 'row',
      marginHorizontal: 10,
      textDecorationLine: 'line-through',
      color: 'grey',
      fontWeight: 'bold'
    },

    Price: {
      fontSize: 16,
      fontWeight: 'bold',
    },

    Pesan: {
      borderRadius: 10,
      borderWidth: 1,
      backgroundColor: '#1af20f',
      width: 200,
      paddingVertical: 10,
      marginLeft: 100,
      marginVertical: 10
    },

    txtPesan: {
      textAlign: 'center',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },

    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      paddingVertical: 10,
      elevation: 2,
      width: 150
    },
    textStyle: {
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
      textTransform: 'uppercase'
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
   
  export default HomeScreen;