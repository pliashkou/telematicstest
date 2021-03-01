import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';

const CARDS = [
  {
    title: 'My Driver Score',
    score: 80,
    description: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo',
  },
  {
    title: 'Acceleration Score',
    score: 22,
    description: 'Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt,',
  },
  {
    title: 'Braking Score',
    score: 42,
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
  },
  {
    title: 'Cornering Score',
    score: 11,
    description: 'Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur',
  },
  {
    title: 'Eco Driving Score',
    score: 9,
    description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus',
  },
];

const MyDriverScoreScreen = () => {
  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category='h6'>
        {info.item.title}: {info.item.score}
      </Text>
    </View>
  );

  const renderItem = (info) => {
    return (
      <Card
        style={styles.item}
        status='basic'
        header={headerProps => renderItemHeader(headerProps, info)}
      >
        <Text>
          {info.item.description}
        </Text>
      </Card>
    );
  }

  return (
    <List
      contentContainerStyle={styles.contentContainer}
      data={CARDS}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});

export default MyDriverScoreScreen;