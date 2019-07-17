/**
 * @file audio 相关操作的API
 * @author lijiahui(lijiahui02@baidu.com)
 */

import InnerAudioContext from './inner-audio-context';
import BackgroundAudioManager from './background-audio-manager';
import {getSlaveId} from '../../../utils/common';

let audioId = 0;
export const createInnerAudioContext = () => new InnerAudioContext(++audioId, getSlaveId());

export const getBackgroundAudioManager = () => BackgroundAudioManager;
