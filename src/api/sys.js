import base from './base';
import wepy from 'wepy';

export default class Sys extends base {
    static kwJcsj =  '/user';
    /*
    * POST /a/ws/kwgl/kwJcsj/nowNdXq 获取当前考试年度学期
    */
    static userInfo(data) {
        const url = `${this.baseUrlSys}${Sys.kwJcsj}/userInfoData`;
        return this.get(url, data).then(res => res);
    };
    // 修改密码 POST /a/ws/sys/user/resetPwd
    static amendPassW(data) {
        const header = Object.assign({}, wepy.$instance.globalData.header, {'content-type':'application/x-www-form-urlencoded', });
        const url = `${this.baseUrlSys}${Sys.kwJcsj}/resetPwd`;
        return this.post(url, data, true, header).then(res => res);
    };
};