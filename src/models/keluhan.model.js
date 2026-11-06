import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        nama_keluhan: {
            type: String,
            required: true
        },
        deskripsi_keluhan: {
            type: String,
            required: true,
        },
        priortas: {
            type: String,
            required: true,
        },
        terselesaikan: {
            type: String,
            required: true,
        }
    }
)

const keluhanModel = mongoose.model('keluhan', schema)
export default keluhanModel