import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_xzaq_list = createAsyncThunk(
  "xZAQS/api_v1_xzaq_list",
  async payload => {
    const response = await apiService.api_v1_xzaq_list(payload)
    return response.data
  }
)
export const api_v1_xzaq_create = createAsyncThunk(
  "xZAQS/api_v1_xzaq_create",
  async payload => {
    const response = await apiService.api_v1_xzaq_create(payload)
    return response.data
  }
)
export const api_v1_xzaq_retrieve = createAsyncThunk(
  "xZAQS/api_v1_xzaq_retrieve",
  async payload => {
    const response = await apiService.api_v1_xzaq_retrieve(payload)
    return response.data
  }
)
export const api_v1_xzaq_update = createAsyncThunk(
  "xZAQS/api_v1_xzaq_update",
  async payload => {
    const response = await apiService.api_v1_xzaq_update(payload)
    return response.data
  }
)
export const api_v1_xzaq_partial_update = createAsyncThunk(
  "xZAQS/api_v1_xzaq_partial_update",
  async payload => {
    const response = await apiService.api_v1_xzaq_partial_update(payload)
    return response.data
  }
)
export const api_v1_xzaq_destroy = createAsyncThunk(
  "xZAQS/api_v1_xzaq_destroy",
  async payload => {
    const response = await apiService.api_v1_xzaq_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const xZAQSSlice = createSlice({
  name: "xZAQS",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_xzaq_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xzaq_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xzaq_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xzaq_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xzaq_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xzaq_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xzaq_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xzaq_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xzaq_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xzaq_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xzaq_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xzaq_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xzaq_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xzaq_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xzaq_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xzaq_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xzaq_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xzaq_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_xzaq_list,
  api_v1_xzaq_create,
  api_v1_xzaq_retrieve,
  api_v1_xzaq_update,
  api_v1_xzaq_partial_update,
  api_v1_xzaq_destroy,
  slice: xZAQSSlice
}
