import {P} from "../utils/type"
import {BaseConfig} from "./BaseConfig"

export interface EllipseConfig extends BaseConfig {
  /** @desc 圆弧总长度*/
  totalLength: number
  /** @desc 圆弧起点长度*/
  startLength: number
  /** @desc 圆弧起点*/
  startPoint: P
  /** @desc 起点长度对应的 鼠标控制点*/
  startMouseControlPoint: P
  /** @desc 圆弧终点*/
  endPoint: P
  /** @desc 终点长度对应的 鼠标控制点*/
  endMouseControlPoint: P
  /** @desc 所有控制点，总的12个*/
  cps: P[]
  getCps: Function
}