import {
  I18nLocaleTimePicker,
  II18nLocaleCommon,
  II18nLocaleTypeMap,
  II18nLocaleUpload,
  II18nLocaleTable,
} from './locale';
import { setLocale, zhCN } from './time-locale';

const common: II18nLocaleCommon = {
  confirm: '确认',
  cancel: '取消',
  ok: '我知道了',
  comma: '，',
  reset: '重置',
};

export const mark = 'zh-CN';

const TypeMap: II18nLocaleTypeMap = {
  image: '图片',
  voice: '音频',
};

const TypeUnitMap = {
  image: '张',
  voice: '个',
};

export const Upload: II18nLocaleUpload = {
  ...common,
  title_voice: '声音选择',
  title_image: '图片选择',
  input: {
    holder: '添加',
    maxAmount({ maxAmount, type }) {
      return `最多上传 ${maxAmount} ${TypeUnitMap[type]}${TypeMap[type]}`;
    },
    maxSize({ maxSize, type }) {
      return `不能上传大于 ${maxSize} 的${TypeMap[type]}`;
    },
    type({ type }) {
      return `不能上传不支持的${TypeMap[type]}类型`;
    },
  },
  popup: {
    web: '网络图片',
    group: '上传至分组',
    holder: '请添加网络图片地址',
    title_voice: '本地音频',
    title_image: '本地图片',
    type({ types, size }) {
      return `仅支持 ${types.join('、')} ${
        types.length
      }种格式, 大小不超过${size}`;
    },
    extract: '提取',
    extracting: '提取中...',
  },
};

const QUARTER_NAMES = ['第一季度', '第二季度', '第三季度', '第四季度'];

export const TimePicker: I18nLocaleTimePicker = () => {
  setLocale(zhCN);

  return {
    ...common,
    time: '请选择时间',
    date: '请选择日期',
    week: '请选择自然周',
    month: '请选择月份',
    quarter: '请选择季度',
    year: '请选择年份',
    range: '开始日期 至 结束日期',
    timeErrorPop: '时间不可用',
    dateErrorPop: '日期不可用',
    start: '开始日期',
    end: '结束日期',
    startTime: '开始时间',
    endTime: '结束时间',
    to: '至',
    current: {
      time: '当前时间',
      date: '今天',
      week: '当前周',
      month: '当前月',
      year: '当前年',
    },
    panel: {
      hour: '时',
      minute: '分',
      second: '秒',
      year: '年',
      hourSelect: '选择小时',
      minuteSelect: '选择分钟',
      secondSelect: '选择秒',
      titleFormat: 'YYYY年MMM',
      quarterNames: QUARTER_NAMES,
      yearQuarterName({ year, quarter }) {
        const val = QUARTER_NAMES[quarter];
        return `${year}年${val}`;
      },
      dayNames: ['日', '一', '二', '三', '四', '五', '六'],
      monthNames: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
    },
  };
};

export const Table: II18nLocaleTable = {
  ...common,
  emptyLabel: '没有更多数据了',
};
