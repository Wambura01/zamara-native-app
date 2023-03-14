import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {parseString} from 'react-native-xml2js';

const Continents = () => {
  const [continents, setContinents] = useState([]);

  const fetchContinents = async () => {
    const url =
      'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso';
    const headers = new Headers();
    headers.append('Content-Type', 'text/xml;charset=UTF-8');
    headers.append(
      'SOAPAction',
      'http://www.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfContinentsByName',
    );
    const data = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">
        <soapenv:Header/>
        <soapenv:Body>
          <web:ListOfContinentsByName/>
        </soapenv:Body>
      </soapenv:Envelope>
    `;
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: data,
    });
    const responseText = await response.text();
    const result = await new Promise((resolve, reject) => {
      parseString(
        responseText,
        {
          explicitArray: false,
          explicitRoot: false,
          tagNameProcessors: [name => name.replace('m:', '')],
        },
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            console.log('result:', JSON.stringify(result, null, 2));
            const continents =
              result &&
              result['soap:Body'] &&
              result['soap:Body'].ListOfContinentsByNameResponse &&
              result['soap:Body'].ListOfContinentsByNameResponse
                .ListOfContinentsByNameResult &&
              result['soap:Body'].ListOfContinentsByNameResponse
                .ListOfContinentsByNameResult.tContinent;
            resolve(continents);
          }
        },
      );
    });
    return result;
  };

  useEffect(() => {
    fetchContinents().then(data => {
      console.log('continents >>>', data);
      setContinents(data);
    });
  }, []);

  // console.log('CONTINENTS >>> ', continents);

  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
            marginHorizontal: 20,
          }}>
          Continent Code and Name
        </Text>
      </View>
      <View style={{marginHorizontal: 20, marginVertical: 15}}>
        {continents?.map(continent => (
          <View
            style={{display: 'flex', flexDirection: 'row'}}
            key={continent?.sCode}>
            <Text style={{fontWeight: 'bold'}}>{continent?.sCode}</Text>
            <Text> - </Text>
            <Text>{continent?.sName}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Continents;
