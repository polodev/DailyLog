/**
 * @providesModule ImageSliderGeneric
 * @flow
 */

/**
props inside this component
images
height
closeBtnBg
closeBtnColor
closeBtnIcon
buttonBg,
buttonSelectedBg
 */

import React, {Component} from 'react'
import {
    Image,
    View,
    ScrollView,
    StyleSheet,
    PanResponder,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    Modal,
    Text,
    Alert
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#222'
  },
  buttons: {
    height: 15,
    marginTop: -15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    margin: 3,
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    opacity: 0.9
  },
  buttonSelected: {
    opacity: 1
  },
  closeBtn: {
    height: 40,
    width: 40,
    position: 'absolute',
    top: 30,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeBtnText: {
    fontSize: 20
  }
})

export default class ImageSliderGeneric extends Component {
  constructor (props) {
    super(props)

    this.state = {
      position: 0,
      height: Dimensions.get('window').width * (4 / 9),
      width: Dimensions.get('window').width,
      scrolling: false,
      modalVisible: false
    }
  }

  _onRef (ref) {
    this._ref = ref
    if (ref && this.state.position !== this._getPosition()) {
      this._move(this._getPosition())
    }
  }

  _move (index) {
    const isUpdating = index !== this._getPosition()
    this._ref.scrollTo({x: this.state.width * index, y: 0, animated: true})
    this.setState({position: index})
    if (isUpdating && this.props.onPositionChanged) {
      this.props.onPositionChanged(index)
    }
  }

  _getPosition () {
    if (typeof this.props.position === 'number') {
      return this.props.position
    }
    return this.state.position
  }

  componentDidUpdate (prevProps) {
    if (prevProps.position !== this.props.position) {
      this._move(this.props.position)
    }
  }

  componentWillMount () {
    let release = (e, gestureState) => {
      const width = this.state.width
      const relativeDistance = gestureState.dx / width
      const vx = gestureState.vx
      let change = 0

      if (relativeDistance < -0.5 || (relativeDistance < 0 && vx <= 0.5)) {
        change = 1
      } else if (relativeDistance > 0.5 || (relativeDistance > 0 && vx >= 0.5)) {
        change = -1
      }
      const position = this._getPosition()
      if (position === 0 && change === -1) {
        change = 0
      } else if (position + change >= this.props.images.length) {
        change = (this.props.images.length) - (position + change)
      }
      this._move(position + change)
      return true
    }

    this._panResponder = PanResponder.create({
      onPanResponderRelease: release
    })

    this._interval = setInterval(() => {
      const newWidth = Dimensions.get('window').width
      if (newWidth !== this.state.width) {
        this.setState({width: newWidth})
      }
    }, 16)
  }

  componentWillUnmount () {
    clearInterval(this._interval)
  }
  _renderView = (_onPress, explicitHeight) => {
    const width = this.state.width
    let height = explicitHeight || this.props.height || this.state.height
    const position = this._getPosition()
    return (
      <View>
        <ScrollView
          ref={ref => this._onRef(ref)}
          decelerationRate={0.99}
          horizontal
          showsHorizontalScrollIndicator={false}
          {...this._panResponder.panHandlers}
          style={[styles.container, this.props.style, {height: height}]}>
          {this.props.images.map((image, index) => {
            const imageObject = typeof image === 'string' ? {uri: image} : image
            const imageComponent = <Image
              key={index}
              backgroundColor={this.props.imageBgColor || '#fff'}
              resizeMode='contain'
              source={imageObject}
              style={{height, width}}
                        />
            if (_onPress) {
              return (
                <TouchableOpacity
                  key={index}
                  style={{height, width}}
                  onPress={() => _onPress({image, index})}
                  delayPressIn={200}
                >
                  {imageComponent}
                </TouchableOpacity>
              )
            } else {
              return imageComponent
            }
          })}
        </ScrollView>
        <View style={styles.buttons}>
          {
            this.props.images.map((image, index) => {
              return (<TouchableHighlight
                key={index}
                underlayColor='#ccc'
                onPress={() => {
                  return this._move(index)
                }}
                style={[styles.button, {backgroundColor: this.props.buttonBg || '#ccc'}, position === index && styles.buttonSelected, position === index && {backgroundColor: this.props.buttonSelectedBg || '#ff5252'}]}>
                <View />
              </TouchableHighlight>)
            })
        }
        </View>
      </View>
    )
  }

  _onImagePress = ({image, index}) => {
    console.log('image', image)
    console.log('index', index)
    this._move(0)
    this.setModalVisible(true)
  }
  _onImagePressInsideModal = ({image, index}) => {
    return false
  }
  setModalVisible = (modalVisible) => {
    this.setState({modalVisible})
  }
  render () {
    let closeBtnBg = this.props.closeBtnBg || 'transparent'
    let closeBtnColor = this.props.closeBtnColor || '#ff5252'
    return (
      <View>
        <View style={{marginBottom: 15}}>
          {this._renderView(this._onImagePress)}
        </View>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { Alert.alert('Modal has been closed.') }}
          >
          <View>
            {this._renderView(this._onImagePressInsideModal, (Dimensions.get('window').height))}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.setModalVisible(false)}
              style={[styles.closeBtn, {backgroundColor: closeBtnBg}]} >
              {
                this.props.closeBtnIcon || <Text style={[styles.closeBtnText, {color: closeBtnColor}]}>X</Text>
              }
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }
}
