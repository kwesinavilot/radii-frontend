import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChartItem {
  chartID: string;
  chart_data: string;
  created_at: string;
  name: string;
  type: string;
  updated_at: string;
  user: string;
  organization: string;
  searchID: string;
}

interface ChartsState {
  charts: ChartItem[];
}

const initialState: ChartsState = {
  charts: [],
};

const chartsSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {
    setCharts(state, action: PayloadAction<ChartItem[]>) {
      state.charts = action.payload;
    },
    addChart(state, action: PayloadAction<ChartItem>) {
      state.charts.push(action.payload);
    },
    deleteChart(state, action: PayloadAction<string>) {
      state.charts = state.charts.filter(
        (chart) => chart.chartID !== action.payload
      );
    },
  },
});

export const { setCharts, addChart, deleteChart } = chartsSlice.actions;
export default chartsSlice.reducer;
