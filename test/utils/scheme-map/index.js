/**
 * @file util/index
 * @author lijia30@baidu.com
 * @description  端能力scheme与模拟端返回映射关系
 */

import makePhoneCall from './maps/makePhoneCall';
import openInterface from './maps/openInterface';
import file from './maps/file';
import navigate from './maps/navigate';
import canvas from './maps/canvas';
import ai from './maps/ai';
import device from './maps/device';
import ext from './maps/ext';
import box from './maps/box';
import interFace from './maps/interface';
import openSmartProgram from './maps/openSmartProgram';
import media from './maps/media';
import network from './maps/network';
import system from './maps/system';
import location from './maps/location';
import background from './maps/background';
import ui from './maps/ui';
import navigateBar from './maps/naviBar';
import tabbar from './maps/tabbar';
import addPhoneContact from './maps/addPhoneContact';
import storage from './maps/storage';
import vibrateLong from './maps/vibrateLong';
import pullDownRefresh from './maps/pullDownRefresh';
import accelerometer from './maps/accelerometer';
import coverImage from './maps/coverImage';
import input from './maps/input';
import map from './maps/map';
import picker from './maps/picker';
import textarea from './maps/textarea';
import openLive from './maps/openLive';
import animationView from './maps/animation-view';
import ARCamera from './maps/ar-camera';
import button from './maps/button';
import deviceMotion from './maps/deviceMotion';
import camera from './maps/camera';
import coverView from './maps/cover-view';
import openVideo from './maps/openVideo';
import boxjsLast from './maps/boxjs_last';
import inner from './maps/inner';
import recommend from './maps/recommend';
// import swanInner from './maps/swanInner'

export default {
    ...makePhoneCall,
    ...openInterface,
    ...file,
    ...navigate,
    ...canvas,
    ...ai,
    ...device,
    ...ext,
    ...interFace,
    ...box,
    ...openSmartProgram,
    ...media,
    ...network,
    ...system,
    ...location,
    ...background,
    ...ui,
    ...navigateBar,
    ...tabbar,
    ...addPhoneContact,
    ...storage,
    ...vibrateLong,
    ...pullDownRefresh,
    ...accelerometer,
    ...deviceMotion,
    ...coverImage,
    ...input,
    ...map,
    ...picker,
    ...textarea,
    ...openLive,
    ...animationView,
    ...ARCamera,
    ...button,
    ...camera,
    ...coverView,
    ...openVideo,
    ...boxjsLast,
    ...inner,
    ...recommend
    // ...swanInner
};