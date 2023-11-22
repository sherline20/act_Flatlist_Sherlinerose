import * as React from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet } from 'react-native';
import FiMoreHorizontal from './src/FiMoreHorizontal';

const DATA = [
    
    {id: '1',lastname: 'Amang',firstname:'Jesse',add:'Corella, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '2',lastname: 'Amora',firstname: 'Kent Ivan', add:'Cortes, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '3',lastname: 'Angcahan', firstname:'Ria Mae', add:'Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '4',lastname: 'Antopina' ,firstname: 'Deborah Jane', add:'Tagbilaran, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '5',lastname: 'Ayuban', firstname:'Katherine Mae', add:'Dauis, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '6',lastname: 'Banaga', firstname:'Bernadeth', add:'Loboc, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '7',lastname: 'Bongcaras', firstname:'Airen Mae', add:'Dauis, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '8',lastname: 'Bucia', firstname:'James Warren', add:'Cortes, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '9',lastname: 'Bunol', firstname:'Raymond', add:'Cortes, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '10',lastname: 'Carbonilla', firstname:'Marlon', add:'Antiquera, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '11',lastname: 'Coquilla', firstname:'Nathaniel Louise', add:'Antiquera, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '12',lastname: 'Dalen', firstname:'Rhizabelle Jhaine', add:'Dauis, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '13',lastname: 'Dela Cruz', firstname:'Mary Anne', add:'Balilihan, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '14',lastname: 'Dondoyano', firstname:'Sherline Rose', add:'Balilihan, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />} ,
    {id: '15',lastname: 'Escuadro', firstname:'Nelbrey Jillian', add:'Lapaz, Cortes, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '16',lastname: 'Eusalan', firstname:'Daisy Dianne', add:'Dauis, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '17',lastname: 'Felisilda', firstname:'Arnold James', add:'Valencia, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '18',lastname: 'Fuentes', firstname:'Loui', add:'Corella, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '19',lastname: 'Garcia', firstname:'Rodel', add:'Hanopol, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '20',lastname: 'Jagunos', firstname:'Joana', add:'Hanopol, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '21',lastname: 'Juntilla', firstname:'Hershiel Jay', add:'Sevilla, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '22',lastname: 'Lahoy', firstname:'Sherwen', add:'Cortes, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '23', lastname: 'Linog', firstname:'Jesriel', add:'Sevilla, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '24',lastname: 'Luayon', firstname:'Hazel Mae', add:'Corella, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '25',lastname: 'Madanguit', firstname:'Rusel Nino', add:'Cortes, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '26',lastname: 'Magale', firstname:'Pearly Diane', add:'Maribojoc, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />}, 
    {id: '27',lastname: 'Magsino', firstname:'Lovelyn', add:'Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '28',lastname: 'Malanguis', firstname:'Donilyn', add:'Corella, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '29',lastname: 'Maldora', firstname:'Angelo', add:'Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '30',lastname: 'Marabulas', firstname:'Ailen Mae', add:'Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '31',lastname: 'Maslog', firstname:'Cloyd', add:'Tagbilaran, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '32',lastname: 'Mirabite', firstname:'Mic Roland', add:'Maribojoc, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '33',lastname: 'Oring', firstname:'Jea Norene', add:'Boctol, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '34',lastname: 'Paguican', firstname:'Nicole James', add:'Jagna, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '35',lastname: 'Pajota', firstname:'Arnel', add:'Tagbilaran, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '36',lastname: 'Pilipino', firstname:'Jesrel',add:'Tagbilaran, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '37',lastname: 'Sarabia', firstname:'Earl Mike',add:'Tagbilaran, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '38',lastname: 'Saraga', firstname:'Sheilo',add:'Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '39',lastname: 'Tabanyag', firstname:'John',add:'Cortes, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '40', lastname: 'Tadlas', firstname:'Kenneth',add:'Tagbilaran, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '41',lastname: 'Tahil', firstname:'Adriane Jane',add:'Hanopol, Bohol' , icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '42',lastname: 'Tinaja', firstname:'Ma. Luisa', add:'Tagbilaran, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '43',lastname: 'Valiente', firstname:'Melrose', add:'Tagbilaran, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
];

const Item = ({ lastname, firstname, add,icon }) => {
  // Extract the first letters of the first name and last name
  const firstInitial = firstname.charAt(0);
  const lastInitial = lastname.charAt(0);

  return (
    <View style={styles.wholeContainer}>
      <View style={styles.intialsContainer}><Text style={styles.initials}>{firstInitial}{lastInitial}</Text></View>
      <View style={styles.listItem}>
        
        <Text style={styles.listItemText}>{lastname}, {firstname}</Text>
        <Text style={styles.listItemAdd}>{add}</Text>
        
      </View>
      
     
      <View style={styles.iconContainer}>{icon}</View>
   
    </View>
  );
};

export default function App() {
   
      return (
        <SafeAreaView>
            <View style={styles.container}>
                
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Item lastname={item.lastname} firstname={item.firstname} add={item.add}  icon={item.icon}/>}
                    
                />
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
      
      backgroundColor: 'white',
      alignItems: 'left',
      height: 670,
      marginTop:170,
      
  },
  text: {
      fontSize: 18,
      color: '#101010',
      marginTop: 5,
      fontWeight: '700',
      fontFamily:'Arial',
      marginBottom:10
  },
  listItem: {
      marginTop: 15,
      
      alignItems: 'left',
      backgroundColor: '#fff',
      width: '70%'
  },
  listItemText: {
      fontSize: 18,
      fontWeight:'bold',
      fontFamily:'Arial'
    
  },
  listItemAdd:{
      fontSize:15,
      fontFamily:'Arial'
  },
  wholeContainer:{
      flexDirection:'row' ,
      

  },
  initials:{
    fontSize:15,
    fontWeight:'bold',
    fontFamily:'Arial',
    alignSelf:'center',
    margin:10,
    color:'white'
    
  },
  intialsContainer:{
      alignContent:'center',
      alignItems:'center',
     margin:10,
      backgroundColor:'lightgreen',
      height:35,
      width:35,
      borderRadius:70
  },
  iconContainer: {
      margin: 10,
    },
});