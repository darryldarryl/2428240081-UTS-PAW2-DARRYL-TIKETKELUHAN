import keluhanmodel from "../models/keluhan.model.js"
import { StorekeluhanSchema, UpdatekeluhanSchema } from "../schemas/keluhan.schema.js"
import { apiResponse, apiResponseValidation } from "../utils/response.js"

class keluhancontroller {
    static async index(req, res) {
        const listkeluhan = await keluhanmodel.find()
        return apiResponse({ res, status: 200, data: listkeluhan })
    }

    static async show(req, res) {
        const keluhanid = req.params.id
        const keluhan = await keluhanmodel.findById(keluhanid)

        if (!keluhan) {
            return apiResponse({ res, status: 404, message: 'data keluhan tidak ditemukan' })
        }

        return apiResponse({ res, status: 200, data: keluhan })
    }

    static async store(req, res) {
        const result = StorekeluhanSchema.safeParse(req.body)
        if (!result.success) {
            return apiResponseValidation({
                res,
                errors: result.error
            })
        }

        const { nama_keluhan, deskripsi_keluhan, priortas, terselesaikan } = result.data

        const newkeluhan = await keluhanmodel.create({ nama_keluhan, deskripsi_keluhan, priortas, terselesaikan })
        return apiResponse({ res, status: 201, data: newkeluhan })
    }

    static async update(req, res) {
        const keluhanid = req.params.id
        const result = UpdatekeluhanSchema.safeParse(req.body)
        if (!result.success) {
            return apiResponseValidation({
                res,
                errors: result.error
            })
        }

        const { nama_keluhan, deskripsi_keluhan, priortas, terselesaikan } = result.data

        const exists = await keluhanmodel.exists({ _id: keluhanid })
        if (!exists) {
            return apiResponse({ res, status: 404, message: 'data keluhan tidak ditemukan' })
        }

        const updatekeluhan = await keluhanmodel.findOneAndUpdate(
            { _id: keluhanid },
            { nama_keluhan, deskripsi_keluhan, priortas, terselesaikan },
            { new: true }
        )

        return apiResponse({ res, status: 200, data: updatekeluhan })
    }

    static async delete(req, res) {
        const keluhanid = req.params.id

        const exists = await keluhanmodel.exists({ _id: keluhanid })
        if (!exists) {
            return apiResponse({ res, status: 404, message: 'data keluhan tidak ditemukan' })
        }

        await keluhanmodel.findOneAndDelete({ _id: keluhanid })
        return apiResponse({ res, status: 200, message: 'data keluhan berhasil dihapus', data: null })
    }
}

export default keluhancontroller