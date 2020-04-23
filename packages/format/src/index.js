/**
  sourceData:传入需要归类的数组
  filterType:需要归类的对象属性名
*/
class FilterData {
  constructor (sourceData, filterType) {
    this.filterType = filterType // 过滤属性
    this.sourceData = sourceData // 原始数据
    this.allNewArr = [] // 根据属性相同，重新组装相应多维数组
  }

  isType (item) {
    return Array.prototype.toString.call(item)
  }

  formateData () {
    // 检测传参
    if ((!this.filterType) && typeof (this.isType(this.sourceData) !== '[object Array]') && (this.isType(this.filterType) !== '[object String]')) {
      return
    }
    // 每一个类型的单独数组，注意此处不能return出每个alikeArr，
    // 因为递归的返回值只返回最后一次的值
    const alikeArr = []
    let propertyName = ''
    if (this.sourceData.length > 0) {
      propertyName = this.sourceData[0][`${this.filterType}`]
      const tempArr = []
      // 将拥有共同propertyName属性的对象放到此次遍历的alikeArr中，
      // 将其他的对象放入到tempArr中，等待下次遍历
      this.sourceData.forEach((val, key) => {
        if (val[`${this.filterType}`] === propertyName) {
          alikeArr.push(val)
        } else {
          tempArr.push(val)
        }
      })
      this.allNewArr.push(alikeArr)
      this.sourceData = tempArr
      return this.formateData(this.filterType, this.sourceData, this.allNewArr)
    } else {
      return this.allNewArr
    }
  }

  singleFormatData (value) { // 通过单个属性值过滤
    return this.formateData().filter((item) => {
      return value === item[0][this.filterType]
    })[0] || []
  }

  /**
   * @param {*} filterType 通过filterType属性进行数组去重
   * @param {*} sourceData 需要去重的数组
   */
  removeDupData () { // 通过type属性进行数组去重
    const newData = {}
    this.sourceData = this.sourceData.reduce((item, next) => {
      if (newData[next[this.filterType]]) {
        item = ''
      } else {
        newData[next[this.filterType]] = true
        item.push(next)
      }
      return item
    }, [])
    return this.sourceData
  }
}
export {
  FilterData
}
