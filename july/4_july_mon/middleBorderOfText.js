<View style={styles.middleBorderViewWrapper}>
  <View style={styles.innerViewForEmptiness}></View>
  <View style={styles.middleBorderView}></View>
  <View style={styles.innerViewForEmptiness}></View>
</View>

const styles = StyleSheet.create({
  middleBorderViewWrapper : {
    //suppose bootstrap grid
    flex : 1,
    flexDirection : 'row'
  },
  middleBorderView : {
    alignItems : "center",
    borderBottomColor : "black",
    borderBottomWidth : 5,
    borderStyle : "solid",
    flex : 1
  },
  innerViewForEmptiness : {
    flex : 2
  }
});
