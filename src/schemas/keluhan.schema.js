import z from 'zod'

export const StorekeluhanSchema = z.object({
    nama_keluhan: z.string().trim().min(3, "Nama Keluahan Minimal 3 Karakter"),
    deskripsi_keluhan: z.string().trim().min(3, "Merk Keluahan Minimal 3 Karakter"),
    priortas: z.string().trim().min(3, "Prioritas Keluahan Minimal Minimal 3 Karakter"),
    terselesaikan: z.string().trim().min(3, "Terselesaikan Minimal Minimal 3 Karakter")
})

export const UpdatekeluhanSchema = z.object({
    nama_keluhan: z.string().trim().min(3, "Nama Keluahan Minimal 3 Karakter"),
    deskripsi_keluhan: z.string().trim().min(3, "Merk Keluahan Minimal 3 Karakter"),
    priortas: z.string().trim().min(3, "Prioritas Keluahan Minimal Minimal 3 Karakter"),
    terselesaikan: z.string().trim().min(3, "Terselesaikan Minimal Minimal 3 Karakter")
})