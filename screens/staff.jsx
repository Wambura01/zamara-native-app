import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CreateStaff from '../components/createStaff/createStaff';
import UpdateStaffForm from '../components/createStaff/updateStaff';

function Staff() {
  const [staffData, setStaffData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  // open update modal
  const handleOpenModal = staff => {
    setSelectedStaff(staff);
    setModalVisible(true);
  };

  // handle update staff
  const handleUpdate = async newStaff => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/2421fc9230e348ca973e36b62d3602e5/staff/${newStaff.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newStaff),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to update staff member');
      }

      // handle success
      console.log('Staff member updated successfully');
    } catch (error) {
      // handle error
      console.error(error);
    }
  };

  // handle delete staff
  const handleDelete = staff => {
    Alert.alert(
      'Delete Staff Member',
      `Are you sure you want to delete ${staff.staffName}?`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const newData = staffData.filter(
              item => item.staffNo !== staff.staffNo,
            );
            setStaffData(newData);
          },
          style: 'destructive',
        },
      ],
      {cancelable: false},
    );
  };

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        await fetch(
          'https://crudcrud.com/api/2421fc9230e348ca973e36b62d3602e5/staff',
        )
          .then(response => response.json())
          .then(data => setStaffData(data));
      } catch (err) {
        console.log('Error while fetching staff: ', err);
      }
    };

    fetchStaff();
  }, []);

  console.log('staff data >>> ', staffData);

  const renderItem = ({item}) => (
    <View style={{display: 'flex', flexDirection: 'row', marginHorizontal: 20}}>
      <Text style={{flex: 1}}>{item?.staffNo}</Text>
      <Text style={{flex: 1}}>{item?.staffName}</Text>
      <Text style={{flex: 1}}>{item?.staffEmail}</Text>
      <Text style={{flex: 1}}>{item?.department}</Text>
      <Text style={{flex: 1}}>{item?.salary}</Text>
      <TouchableOpacity key={item.id} onPress={() => handleOpenModal(item)}>
        <MaterialCommunityIcons name="pencil" color="gray" size={18} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(item)}>
        <MaterialCommunityIcons name="delete" color="gray" size={18} />
      </TouchableOpacity>
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
      <UpdateStaffForm
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onUpdate={handleUpdate}
        staff={selectedStaff}
      />
    </View>
  );
}

export default Staff;
