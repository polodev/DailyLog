/**
 * This is the generic grid
 * it will show the grid view of your components
 * it requires 3 props
 * 1. items [the array which you want to iterate through]
 * 2. items per row
 * 3. renderGridComponent [A component which will get two props from this factory. item and index]
 *
 */
'use strict';
import React, { Component } from 'react';
import {ListView, StyleSheet, View} from 'react-native'

class GenericGrid extends Component {
  constructor(props) {
    super(props)
    this.groupItems = this.groupItems.bind(this);
    this.renderGroup = this.renderGroup.bind(this);
  }
  groupItems (items, itemsPerRow) {
    var itemsGroups = [];
      var group = [];
      items.forEach((item) => {
        if (group.length === itemsPerRow) {
          itemsGroups.push(group);
          group = [item];
        } else {
          group.push(item);
        }
      });

      if (group.length > 0) {
        itemsGroups.push(group);
      }
      return itemsGroups;
  }

  renderGroup (group) {
    let RenderGridComponent = this.props.renderGridComponent;
    var items = group.map((item, index) => {
      return <RenderGridComponent item={item} index={index} key={index}  />
    });
    return (
      <View style={styles.group}>
        {items}
      </View>
    );
  }

  render() {
    console.log("all props inside GenericGrid", this.props);
    const {items, itemsPerRow} = this.props ;
    let itemsGroups = this.groupItems(items, itemsPerRow);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (<ListView renderRow={this.renderGroup} dataSource={ds.cloneWithRows(itemsGroups)} />);
  }
}

const styles = StyleSheet.create({
  group: {
    flex : 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  }
});

export default GenericGrid;
