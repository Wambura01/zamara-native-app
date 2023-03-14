import React, {useState} from 'react';
import {View, Text, Modal, TextInput, Button} from 'react-native';

const UpdateStaffForm = ({visible, onClose, onUpdate, staff}) => {
  const [staffNo, setStaffNo] = useState('');
  const [staffName, setStaffName] = useState('');
  const [staffEmail, setStaffEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');

  const handleUpdate = () => {
    // create a new staff member object
    const newStaff = {
      _id: staff._id,
      staffNo: staffNo,
      staffName: staffName,
      staffEmail: staffEmail,
      department: department,
      salary: salary,
    };

    // call the onUpdate prop to submit the new staff member to the API
    onUpdate(newStaff);

    // reset the form fields
    setStaffNo('');
    setStaffName('');
    setStaffEmail('');
    setDepartment('');
    setSalary('');

    // close the modal
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, marginBottom: 20}}>
          Update Staff Member
        </Text>
        <TextInput
          placeholder={`${staff?.staffNo}`}
          value={staffNo}
          onChangeText={setStaffNo}
          style={{borderWidth: 1, padding: 10, marginBottom: 10, width: '80%'}}
        />
        <TextInput
          placeholder={staff?.staffName}
          value={staffName}
          onChangeText={setStaffName}
          style={{borderWidth: 1, padding: 10, marginBottom: 10, width: '80%'}}
        />
        <TextInput
          placeholder={staff?.staffEmail}
          value={staffEmail}
          onChangeText={setStaffEmail}
          style={{borderWidth: 1, padding: 10, marginBottom: 10, width: '80%'}}
        />
        <TextInput
          placeholder={staff?.department}
          value={department}
          onChangeText={setDepartment}
          style={{borderWidth: 1, padding: 10, marginBottom: 10, width: '80%'}}
        />
        <TextInput
          placeholder={`${staff?.salary}`}
          value={salary}
          onChangeText={setSalary}
          style={{borderWidth: 1, padding: 10, marginBottom: 10, width: '80%'}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '80%',
          }}>
          <Button title="Cancel" onPress={onClose} />
          <Button color="black" title="Update" onPress={handleUpdate} />
        </View>
      </View>
    </Modal>
  );
};

export default UpdateStaffForm;
