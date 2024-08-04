export interface ChartItem {
  height: number;
  width: number;
  position_x: number;
  position_y: number;
  chartID: string;
  name: string;
  chart_data: string;
  type: string;
  created_at?: string;
  updated_at?: string;
  user?: string;
  organization?: string;
  searchIDts?: string;
}
