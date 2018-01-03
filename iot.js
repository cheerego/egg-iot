const WALIYUN = require('waliyun')
const IOT = WALIYUN.IOT;


let config = {
    Api: 'https://iot.cn-shanghai.aliyuncs.com/',
    AccessKeyId: 'LTAIY7nhfy6xRklg',
    AccessKeySecret: 'vDyyiiQDgDe3naW4mzMvcRYJQuWBp1',
    Version: '2017-04-20'
};

class Iot {
    constructor(config) {
        this.client = IOT({
            Api: config.Api,
            AccessKeyId: config.AccessKeyId,
            AccessKeySecret: config.AccessKeySecret,
            Version: config.Version
        });
    }

    static create() {
        return IOT({
            Api: 'https://iot.cn-shanghai.aliyuncs.com/',
            AccessKeyId: config.AccessKeyId,
            AccessKeySecret: config.AccessKeySecret,
            Version: config.Version
        });
    }

    /**
     * 创建产品
     * @param Name 是
     * @param Desc 否
     * @returns {Promise<*>}
     * @constructor
     * @link https://help.aliyun.com/document_detail/45399.html?spm=5176.doc46674.6.603.GrQ3og
     */
    async CreateProduct(Name, Desc = '') {
        return await this.client.CreateProduct({
            Name,
            Desc
        });
    }

    /**
     * 修改产品信息
     * @param ProductKey
     * @param CatId
     * @param ProductName
     * @param ProductDesc
     * @returns {Promise<*>}
     * @constructor
     * @link https://help.aliyun.com/document_detail/46674.html?spm=5176.doc45399.6.604.o6cDDb
     */
    async UpdateProduct(ProductKey, CatId = '', ProductName = '', ProductDesc) {
        return await this.client.UpdateProduct({
            ProductKey,
            CatId,
            ProductName,
            ProductDesc
        });
    }

    /**
     * 查询产品的设备列表
     * @param ProductKey
     * @param PageSize
     * @param CurrentPage
     * @returns {Promise<*>}
     * @constructor
     */

    async QueryDevice(ProductKey, PageSize, CurrentPage) {
        return await this.client.QueryDevice({
            ProductKey,
            PageSize,
            CurrentPage,
        });
    }

    /**
     * 设备注册
     * @param ProductKey
     * @param DeviceName
     * @returns {Promise<*>}
     * @constructor
     * @link https://help.aliyun.com/document_detail/35395.html?spm=5176.doc46688.6.606.urU6Y8
     */
    async RegistDevice(ProductKey, DeviceName = '') {

        let params = DeviceName ? {...ProductKey, DeviceName} : {...ProductKey};
        return await this.client.RegistDevice(params);
    }

    /**
     * 批量申请设备
     * @param ProductKey
     * @param DeviceNames
     * @returns {Promise<*>}
     * @constructor
     * @link https://help.aliyun.com/document_detail/47305.html?spm=5176.doc35395.6.607.4mynao
     */
    async ApplyDeviceWithNames(ProductKey, DeviceNames) {
        return await this.client.ApplyDeviceWithNames({
            ProductKey,
            DeviceNames
        });
    }

    /**
     * 查询批量设备的申请状态
     * @param ApplyId
     * @returns {Promise<*>}
     * @constructor
     * @link https://help.aliyun.com/document_detail/47306.html?spm=5176.doc47305.6.608.tbeW3Y
     */
    async QueryApplyStatus(ApplyId) {
        return await this.client.QueryApplyStatus({
            ApplyId,
        });
    }

    /**
     * 查询批量生成的设备信息
     * @param ApplyId
     * @param PageSize
     * @param CurrentPage
     * @returns {Promise<*>}
     * @constructor
     * @link https://help.aliyun.com/document_detail/47307.html?spm=5176.doc47306.6.609.cB8F4l
     */
    async QueryPageByApplyId(ApplyId, PageSize, CurrentPage) {
        return await this.client.QueryPageByApplyId({
            ApplyId, PageSize, CurrentPage
        });
    }

    /**
     * 根据设备名称查询设备信息
     * @param ProductKey
     * @param DeviceName
     * @returns {Promise<*>}
     * @constructor
     * @link https://help.aliyun.com/document_detail/46690.html?spm=5176.doc47307.6.610.EUqWza
     */
    async QueryDeviceByName(ProductKey, DeviceNames) {
        return await this.client.QueryDeviceByName({
            ProductKey, DeviceNames
        });
    }

    /**
     * 批量获取设备状态
     * @param ProductKey
     * @param DeviceName
     * @returns {Promise<*>}
     * @constructor
     */
    async BatchGetDeviceState(ProductKey, DeviceNames) {
        return await this.client.BatchGetDeviceState({
            ProductKey, DeviceNames
        });
    }


    /**
     * 保存设备属性
     * @param DeviceName
     * @param ProductKey
     * @param Props <p>属性json string</p>
     * @returns {Promise<*>}
     * @constructor
     * @link https://help.aliyun.com/document_detail/62994.html?spm=5176.doc62963.6.612.YFN6N1
     */
    async SaveDeviceProp(ProductKey, DeviceName, Props) {
        return await this.client.SaveDeviceProp({
            ProductKey,
            DeviceName,
            Props
        });
    }

    /**
     * 查询设备属性列表
     * @param ProductKey
     * @param DeviceName
     * @returns {Promise<*>}
     * @constructor
     * @link https://help.aliyun.com/document_detail/62963.html?spm=5176.doc62994.6.613.IBOpwC
     */
    async QueryDeviceProp(ProductKey, DeviceName) {
        return await this.client.QueryDeviceProp({
            ProductKey,
            DeviceName
        });
    }

    /**
     * 删除设备属性
     * @link https://help.aliyun.com/document_detail/63056.html?spm=5176.doc62963.6.614.tX1FsL
     * @param ProductKey
     * @param DeviceName
     * @param PropKey
     * @returns {Promise<*>}
     * @constructor
     */
    async DeleteDeviceProp(ProductKey, DeviceName, PropKey) {
        return await this.client.DeleteDeviceProp({
            ProductKey,
            DeviceName,
            PropKey
        });
    }

    /**
     * 发布消息到Topic
     * @link https://help.aliyun.com/document_detail/30568.html?spm=5176.doc30568.6.615.sbFA3Q
     * @param ProductKey
     * @param TopicFullName
     * @param MessageContent
     * @param Qos
     * @returns {Promise<*>}
     * @constructor
     */
    async Pub(ProductKey, TopicFullName, MessageContent, Qos = 0) {
        return await this.client.Pub({
            ProductKey,
            TopicFullName,
            MessageContent,
            Qos
        });
    }

    /**
     * 发消息给设备并同步返回响应
     * @link https://help.aliyun.com/document_detail/57166.html?spm=5176.doc30568.6.616.C9ZH2k
     * @param ProductKey
     * @param DeviceName
     * @param RequestBase64Byte
     * @param Timeout
     * @returns {Promise<*>}
     * @constructor
     */
    async RRpc(ProductKey, DeviceName, RequestBase64Byte, Timeout) {
        return await this.client.RRpc({
            ProductKey,
            DeviceName,
            RequestBase64Byte,
            Timeout
        });
    }

    /**
     * 发布广播消息
     * @link https://help.aliyun.com/document_detail/53985.html?spm=5176.doc57166.6.617.2mrknl
     * @param ProductKey
     * @param MessageContent
     * @param TopicFullName
     * @returns {Promise<*>}
     * @constructor
     */
    async PubBroadcast(ProductKey, MessageContent, TopicFullName) {
        return await this.client.PubBroadcast({
            ProductKey,
            MessageContent,
            TopicFullName,
        });
    }


    /**
     * 获取设备影子
     * @link https://help.aliyun.com/document_detail/54005.html?spm=5176.doc53985.6.618.RxBmg4
     * @param DeviceName
     * @param ProductKey
     * @returns {Promise<*>}
     * @constructor
     */
    async GetDeviceShadow(ProductKey, DeviceName) {
        return await this.client.GetDeviceShadow({
            ProductKey,
            DeviceName
        });
    }

    /**
     * 更新设备影子
     * @link https://help.aliyun.com/document_detail/54005.html?spm=5176.doc54006.6.618.8DAtSF
     * @param ProductKey
     * @param DeviceName
     * @param ShadowMessage
     * @returns {Promise<*>}
     * @constructor
     */
    async UpdateDeviceShadow(ProductKey, DeviceName, ShadowMessage) {
        return await this.client.UpdateDeviceShadow({
            ProductKey,
            DeviceName
        });
    }

    load() {
    }
}

module.exports = IOT;