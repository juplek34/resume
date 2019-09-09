import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Linking, FlatList} from 'react-native';



export default class screen2 extends Component<{}> {
  render() {
    return (
       <View>
       <ScrollView>
         <Text> </Text>
         <Text> </Text>
         <Text> </Text>
         <Text style={styles.sectionHeader}>Summary</Text>
        <FlatList
          data={[
          {key: 'I am a hard worker who wants to develop something in the internet world, and wants to make something more for my followers. and I will do anything to achieve what I want.'}
          ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />


         <Text style={styles.sectionHeader}>Work Experience</Text>
         <Text>System Administrator, native devoloper</Text>
         <Text>animeflix.id, Jabodetabek , Indonesia</Text>
         <Text>Desember 2018 - Februari 2019</Text>
         <Text></Text>
         <Text></Text>
         <Text></Text>
         <Text>Stasiun Engineer Sistem</Text>
         <Text>PT Indonesia Asahan Aluminium (Persero), Medan, Sumatera Utara, Indonesia</Text>
         <Text>Agustus 2016 - September 2019</Text>


         <Text style={styles.sectionHeader}>Education</Text>
         <Text>06/2013-12/2018</Text>
         <Text>Universitas Malikussaleh, Jl. Cot Tengku Nie Reuleut, Utara,
Reuleut Timur, Muara Batu, Reuleut Tim., Muara Batu, Kabupaten
Aceh Utara, Aceh</Text>
         <Text>Gelar Sarjana, Teknik Elektro dan Listrik · (2013 - 2018)</Text>
         <Text></Text>
         <Text>04/2010-05/2013</Text>
         <Text>SMA NEGERI 1 NISAM, Mns Meucat, Nisam, Kabupaten Aceh Utara,
Aceh 24184</Text>
         <Text>IPA</Text>
         <Text></Text>
         <Text>04/2006-04/2010</Text>
         <Text>SMP SWASTA AL'ALAQ, Paloh Lada, Dewantara, Kabupaten Aceh
Utara, Aceh</Text>
         <Text></Text>
         <Text>05/2000-04/2006</Text>
         <Text>SD NEGERI 3 DEWANTARA, Keude Krueng Geukueh, Dewantara,
Kabupaten Aceh Utara, Aceh 24184</Text>

         <Text style={styles.sectionHeader}>Additional Skills</Text>
          <FlatList
          data={[
             {key: 'HTML'},
             {key: 'React native '},
             {key: 'Node.js'},
             {key: 'PHP'},
             {key: 'Adsense'},
             {key: 'Microcontrollers'},
             {key: 'Arduino IDE'},
             {key: 'office'},
             {key: 'traget iklan'}
             ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />

         
         <Text style={styles.sectionHeader}>Languages</Text>
         <Text></Text>

         <FlatList
          data={[
             {key: 'INGGRIS     - MEDIUM'},
             {key: 'INDONESIA   - EXPERT'},
             {key: 'BAHASA ARAB - MEDIUM'}
             ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />

       </ScrollView>
       </View>
     );
   }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,204,255,1)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
;