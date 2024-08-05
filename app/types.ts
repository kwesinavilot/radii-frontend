// export interface ChartItem {
//   height: number;
//   width: number;
//   position_x: number;
//   position_y: number;
//   chartID: string;
//   name: string;
//   chart_data: string;
//   type: string;
//   created_at?: string;
//   updated_at?: string;
//   user?: string;
//   organization?: string;
//   searchIDts?: string;
// }

// export interface ChartItem {
//   position_x: any;
//   position_y: any;
//   width: any;
//   height: any;
//   chartID: string;
//   name: string;
//   chart_data: string;
//   type: string;

// }

export interface ChartItem {
  chartID: string;
  name: string;
  chart_data: string;
  type: string;
  position_x: number;
  position_y: number;
  width: number;
  height: number;
}
