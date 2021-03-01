import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, List, ListItem } from '@ui-kitten/components';

const TRIPS = [
  {
    type: 'personal',
    start: '2019-12-30T20:02:03.000Z',
    end: '2020-01-01T10:42:03.000Z'
  },
  {
    type: 'business',
    start: '2020-01-02T10:00:00.000Z',
    end: '2020-01-10T20:30:00.000Z'
  },
  {
    type: 'personal',
    start: '2020-02-14T10:20:15.100Z',
    end: '2020-02-15T16:52:43.000Z'
  },
  {
    type: 'business',
    start: '2020-03-08T00:30:00.000Z',
    end: '2020-03-08T06:20:00.000Z'
  },
  {
    type: 'business',
    start: '2020-08-09T23:00:00.000Z',
    end: '2021-02-02T20:20:00.000Z'
  },
];

const MyTripsScreen = () => {
  const renderItemChevron = (props) => (
    <TouchableOpacity onPress={() => console.log('navigate to more')}>
      <Icon {...props} name='chevron-right' />
    </TouchableOpacity>
  );

  const renderItemIcon = (props, type) => {
    let iconName;

    switch (type) {
      case 'personal':
        iconName = 'person';
        break;
      case 'business':
        iconName = 'briefcase';
        break;
    }

    return (
      <Icon {...props} name={iconName} />
    );
  };

  const renderItem = ({ item }) => {
    const tripStartingTime = (new Date(Date.parse(item.start))).toUTCString();
    const tripEndingTime = (new Date(Date.parse(item.end))).toUTCString();

    return (
      <ListItem
        title={`Start: ${tripStartingTime} \n End: ${tripEndingTime}`}
        accessoryLeft={(props) => renderItemIcon(props, item.type)}
        accessoryRight={renderItemChevron}
      />
    )
  };

  return (
    <List
      data={TRIPS}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
});

export default MyTripsScreen;