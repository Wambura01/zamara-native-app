import React, {useState, useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import CreateStaff from '../components/createStaff/createStaff';

function Staff() {
  const [staffData, setStaffData] = useState(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await fetch(
          'https://crudcrud.com/api/3236001342de4609b09c9c2d44a62b1c/staff',
        );
        const data = response.json();
        setStaffData(JSON.parse(data));
        console.log('STAFF DATA >>> ', data);
      } catch (err) {
        console.log('Error while fetching staff: ', err);
      }
    };

    fetchStaff();
  }, []);

  const renderItem = ({item}) => (
    <View style={{display: 'flex', flexDirection: 'row', marginHorizontal: 20}}>
      <Text style={{flex: 1}}>{item?.staffName}</Text>
      <Text style={{flex: 1}}>{item?.staffEmail}</Text>
      <Text style={{flex: 1}}>{item?.department}</Text>
      <Text style={{flex: 1}}>{item?.salary}</Text>
    </View>
  );

  return (
    <View>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
            marginHorizontal: 20,
          }}>
          Staff Data Table and its CRUD
        </Text>
      </View>
      <CreateStaff />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginVertical: 15,
          marginHorizontal: 20,
        }}>
        <Text style={{flex: 1, fontWeight: 'bold'}}>Staff Name</Text>
        <Text style={{flex: 1, fontWeight: 'bold'}}>Staff Email</Text>
        <Text style={{flex: 1, fontWeight: 'bold'}}>Department</Text>
        <Text style={{flex: 1, fontWeight: 'bold'}}>Staff Salary</Text>
      </View>
      <FlatList
        data={staffData}
        renderItem={renderItem}
        keyExtractor={item => item?.staffNo}
      />
    </View>
  );
}

export default Staff;
