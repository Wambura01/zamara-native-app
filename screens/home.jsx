import React from 'react';
import {Text, View} from 'react-native';

function Home({userData}) {
  console.log('user data >>> ', userData);

  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'black',
          fontSize: 20,
          marginHorizontal: 20,
        }}>
        User Data
      </Text>
      <View style={{marginVertical: 10, marginHorizontal: 20}}>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text>
            Welcome:{' '}
            <Text
              style={{
                fontWeight: 'bold',
              }}>{`${userData?.firstName} ${userData?.lastName}`}</Text>
          </Text>
          <Text>Your profile details is as below:</Text>
        </View>
        <View style={{marginVertical: 10}}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Age:{' '}
              <Text
                style={{
                  fontWeight: 'normal',
                }}>
                {userData?.age}
              </Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Gender:{' '}
              <Text
                style={{
                  fontWeight: 'normal',
                }}>
                {userData?.gender}
              </Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Email:{' '}
              <Text
                style={{
                  fontWeight: 'normal',
                }}>
                {userData?.email}
              </Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Phone:{' '}
              <Text
                style={{
                  fontWeight: 'normal',
                }}>
                {userData?.phone}
              </Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Birth Date:{' '}
              <Text
                style={{
                  fontWeight: 'normal',
                }}>
                {userData?.birthDate}
              </Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Blood Group:{' '}
              <Text
                style={{
                  fontWeight: 'normal',
                }}>
                {userData?.bloodGroup}
              </Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Height:{' '}
              <Text
                style={{
                  fontWeight: 'normal',
                }}>
                {userData?.height}
              </Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Weight:{' '}
              <Text
                style={{
                  fontWeight: 'normal',
                }}>
                {userData?.weight}
              </Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Eye Color:{' '}
              <Text
                style={{
                  fontWeight: 'normal',
                }}>
                {userData?.eyeColor}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Home;
