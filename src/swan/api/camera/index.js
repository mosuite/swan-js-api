/**
 * @file camera 相关操作的 API
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */

import {getSlaveId} from '../../../utils/common';
import CameraContext from './camera';
import ARCameraContext from './ar-camera';

export const createCameraContext = () => new CameraContext(getSlaveId());

export const createARCameraContext = () => new ARCameraContext(getSlaveId());
