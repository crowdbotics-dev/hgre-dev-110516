import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vwcss_list = createAsyncThunk(
  "vwcsses/api_v1_vwcss_list",
  async payload => {
    const response = await apiService.api_v1_vwcss_list(payload)
    return response.data
  }
)
export const api_v1_vwcss_create = createAsyncThunk(
  "vwcsses/api_v1_vwcss_create",
  async payload => {
    const response = await apiService.api_v1_vwcss_create(payload)
    return response.data
  }
)
export const api_v1_vwcss_retrieve = createAsyncThunk(
  "vwcsses/api_v1_vwcss_retrieve",
  async payload => {
    const response = await apiService.api_v1_vwcss_retrieve(payload)
    return response.data
  }
)
export const api_v1_vwcss_update = createAsyncThunk(
  "vwcsses/api_v1_vwcss_update",
  async payload => {
    const response = await apiService.api_v1_vwcss_update(payload)
    return response.data
  }
)
export const api_v1_vwcss_partial_update = createAsyncThunk(
  "vwcsses/api_v1_vwcss_partial_update",
  async payload => {
    const response = await apiService.api_v1_vwcss_partial_update(payload)
    return response.data
  }
)
export const api_v1_vwcss_destroy = createAsyncThunk(
  "vwcsses/api_v1_vwcss_destroy",
  async payload => {
    const response = await apiService.api_v1_vwcss_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vwcssesSlice = createSlice({
  name: "vwcsses",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_vwcss_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vwcss_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vwcss_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vwcss_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vwcss_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vwcss_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vwcss_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vwcss_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vwcss_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vwcss_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vwcss_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vwcss_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vwcss_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vwcss_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vwcss_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vwcss_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vwcss_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vwcss_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_vwcss_list,
  api_v1_vwcss_create,
  api_v1_vwcss_retrieve,
  api_v1_vwcss_update,
  api_v1_vwcss_partial_update,
  api_v1_vwcss_destroy,
  slice: vwcssesSlice
}
