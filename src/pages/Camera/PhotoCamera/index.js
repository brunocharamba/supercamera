import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  CameraRoll,
  PermissionsAndroid
} from 'react-native'
import { RNCamera } from 'react-native-camera'

import styles from './styles'

export default class PhotoCamera extends Component {
  state = {
    cameraStyle: styles.camera,
    canDetectFaces: false,
    faces: [],
    cursor: ''
  }

  componentWillMount = async () => {
    await this.requestCameraPermission()
    // this.loadGallery()
  }

  loadGallery = () => {
    CameraRoll.getPhotos({
      first: 5,
      after: this.state.cursor,
      assetType: 'Photos'
    })
      .then(a => {
        console.tron.log(a.edges)
        a.page_info.has_next_page &&
          this.setState({ cursor: a.page_info.end_cursor })
      })
      .catch(e => {
        console.tron.log('error', e)
      })
  }

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.tron.log('You can use the camera')
      } else {
        console.tron.log('Camera permission denied')
      }
    } catch (err) {
      console.tron.warn(err)
    }
  }

  handleCameraSize = () => {
    // this.state.cameraStyle === styles.camera &&
    //   this.setState({ cameraStyle: styles.cameraSquared })

    this.setState({ canDetectFaces: !this.state.canDetectFaces })
  }

  render () {
    const { canDetectFaces } = this.state

    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref
          }}
          style={{
            flex: 1,
            justifyContent: 'space-between'
          }}
          type="front"
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel'
          }}
          faceDetectionLandmarks={
            RNCamera.Constants.FaceDetection.Landmarks
              ? RNCamera.Constants.FaceDetection.Landmarks.all
              : undefined
          }
          onFacesDetected={canDetectFaces ? this.facesDetected : null}
        >
          <View>
            <TouchableOpacity onPress={this.loadGallery}>
              <Text>GALERIA</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.toggle('canDetectFaces')}
              style={styles.flipButton}
            >
              <Text style={styles.flipText}>
                {!canDetectFaces ? 'OFF' : 'ON'}
              </Text>
            </TouchableOpacity>
          </View>
          {!!canDetectFaces && this.renderFaces()}
          {!!canDetectFaces && this.renderLandmarks()}
        </RNCamera>
      </View>
    )
  }

  renderLandmarksOfFace = face => {
    const renderLandmark = position =>
      position && (
        <View
          style={[
            styles.landmark,
            {
              left: position.x - 2 / 2,
              top: position.y - 3 / 2
            }
          ]}
        />
      )
    return (
      <View key={`landmarks-${face.faceID}`}>
        {renderLandmark(face.leftEyePosition)}
        {renderLandmark(face.rightEyePosition)}
        {renderLandmark(face.leftEarPosition)}
        {renderLandmark(face.rightEarPosition)}
        {renderLandmark(face.leftCheekPosition)}
        {renderLandmark(face.rightCheekPosition)}
        {renderLandmark(face.leftMouthPosition)}
        {renderLandmark(face.mouthPosition)}
        {renderLandmark(face.rightMouthPosition)}
        {renderLandmark(face.noseBasePosition)}
        {renderLandmark(face.bottomMouthPosition)}
      </View>
    )
  }

  toggle = value => () =>
    this.setState(prevState => ({ [value]: !prevState[value] }))

  facesDetected = ({ faces }) => this.setState({ faces })

  renderFace = ({ bounds, faceID, rollAngle, yawAngle }) => (
    <View
      key={faceID}
      transform={[
        { perspective: 600 },
        { rotateZ: `${rollAngle.toFixed(0)}deg` },
        { rotateY: `${yawAngle.toFixed(0)}deg` }
      ]}
      style={[
        styles.face,
        {
          ...bounds.size,
          left: bounds.origin.x,
          top: bounds.origin.y
        }
      ]}
    >
      <Text style={styles.faceText}>ID: {faceID}</Text>
      <Text style={styles.faceText}>rollAngle: {rollAngle.toFixed(0)}</Text>
      <Text style={styles.faceText}>yawAngle: {yawAngle.toFixed(0)}</Text>
    </View>
  )

  renderFaces = () => (
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.faces.map(this.renderFace)}
    </View>
  )

  renderLandmarks = () => (
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.faces.map(this.renderLandmarksOfFace)}
    </View>
  )
}
