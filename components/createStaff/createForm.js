import React, {useState} from 'react';
import {View, Text, Modal, TextInput, Button} from 'react-native';

const CreateStaffForm = ({visible, onClose, onCreate}) => {
  const [staffNo, setStaffNo] = useState('');
  const [staffName, setStaffName] = useState('');
  const [staffEmail, setStaffEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');

  const handleCreate = () => {
    // create a new staff member object
    const newStaff = {
      staffNo: staffNo,
      staffName: staffName,
      staffEmail: staffEmail,
      department: department,
      salary: salary,
    };

    // call the onCreate prop to submit the new staff member to the API
    onCreate(newStaff);

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
          Add New Staff Member
        </Text>
        <TextInput
          placeholder="Staff Number"
          value={staffNo}
          onChangeText={setStaffNo}
          style={{borderWidth: 1, padding: 10, marginBottom: 10, width: '80%'}}
        />
        <TextInput
          placeholder="Staff Name"
          value={staffName}
          onChangeText={setStaffName}
          style={{borderWidth: 1, padding: 10, marginBottom: 10, width: '80%'}}
        />
        <TextInput
          placeholder="Staff Email"
          value={staffEmail}
          onChangeText={setStaffEmail}
          style={{borderWidth: 1, padding: 10, marginBottom: 10, width: '80%'}}
        />
        <TextInput
          placeholder="Department"
          value={department}
          onChangeText={setDepartment}
          style={{borderWidth: 1, padding: 10, marginBottom: 10, width: '80%'}}
        />
        <TextInput
          placeholder="Salary"
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
          <Button title="Create" onPress={handleCreate} />
        </View>
      </View>
    </Modal>
  );
};

export default CreateStaffForm;
