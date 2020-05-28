import axios from 'axios';
 
class MsgService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true
    });
    this.service = service;
  }

  sendMsg = (message, owner) => {
    return this.service.post('/messages', {message, owner})
    .then(response => response.data)
  }
 
}
 
export default MsgService;