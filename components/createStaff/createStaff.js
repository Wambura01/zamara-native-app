import React, {useState} from 'react';
import {View, Button} from 'react-native';
import CreateStaffForm from './createForm';

const CreateStaff = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreate = async newStaff => {
    try {
      const response = await fetch(
        'https://crudcrud.com/api/2421fc9230e348ca973e36b62d3602e5/staff',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newStaff),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to create staff member');
      }

      // handle success
      console.log('Staff member created successfully');
    } catch (error) {
      // handle error
      console.error(error);
    }
  };

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      }}>
      <Button
        color="black"
        title="Create Staff Member"
        onPress={() => setModalVisible(true)}
      />
      <CreateStaffForm
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onCreate={handleCreate}
      />
    </View>
  );
};

export default CreateStaff;
