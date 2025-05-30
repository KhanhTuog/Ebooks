import Notification from '../Notification';

// handle user media capture
export const captureUserMedia = async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });
    return true
  } catch (error) {
    Notification('danger','Thông báo','Thiết bị bạn không hỗ trợ ghi âm')
    return false
  }
};
