import { Track } from './track'

export interface HistoryType {
  tracks: Track[]
  before: number | undefined
  after: number | undefined
}
