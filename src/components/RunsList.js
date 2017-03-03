import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import {ListItem} from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Challenge extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
      {
        this.props.runs.map((run) => {
         return (
            <ListItem
              key={run.id}
              divider
              leftElement={<Icon size={20} color="black" name="directions-run" />}
              centerElement={{
                primaryText: run.name,
                secondaryText: run.created,
              }}
              onPress={() => {this.props.onRunSelect(run);}}
            />
          );
        })
      }
      </ScrollView>
    );
  }
}