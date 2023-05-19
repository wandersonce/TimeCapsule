import { randomUUID } from 'crypto'
import { extname, resolve } from 'path'
import { pipeline } from 'stream'
import { promisify } from 'util'
import { FastifyInstance } from 'fastify'
import { createWriteStream } from 'fs'

const pump = promisify(pipeline)

export async function uploadRoutes(app: FastifyInstance) {
  app.post('/upload', async (request, reply) => {
    const upload = await request.files({
      limits: {
        fileSize: 5_242_880, // 5mb
      },
    })

    if (!upload) {
      return reply.status(400).send()
    }

    const mimiTypeRegex = /^(image|video)\/[a-zA-Z]+/
    const isValidFileFormat = mimiTypeRegex.test(upload.mimetype)

    if (!isValidFileFormat) {
      return reply.status(400).send()
    }

    const fileId = randomUUID()
    const extension = extname(upload.filename)

    const fileName = fileId.concat(extension)

    const writeStream = createWriteStream(
      resolve(__dirname, '../../uploads/', fileName),
    )

    await pump(upload.file, writeStream)

    const fullUrl = request.protocol.concat('://').concat(request.hostname)
    const fileUrl = new URL(`/uploads/${fileName}`, fullUrl).toString()

    return { ok: true }
  })
}
